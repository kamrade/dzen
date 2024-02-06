import React, { ReactNode } from 'react';
import './DynamicButton.scss';
import { IButtonGeneratorData, IButtonBase } from './data-types/Params.ts';
import { setButtonVariables } from './helpers/set-button-variables.ts';
import { getButtonClassname } from './helpers/get-button-classname.ts';

export interface IDynamicButton<ThemeType, ButtonVariant, SizeType, ShapeType> extends IButtonBase {
  theme?: ThemeType;
  variant?: ButtonVariant;
  size?: SizeType;
  shape?: ShapeType;
  onClick?: () => any;
  block?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  customLoader?: ReactNode;
  style?: React.CSSProperties;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

// Function generator
export function DynamicButtonGenerator<ThemeType, ButtonVariant, SizeType, ShapeType>(data: IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType>) {

  setButtonVariables<ThemeType, ButtonVariant, SizeType, ShapeType>(data);

  const DynamicButton: React.FC<IDynamicButton<ThemeType, ButtonVariant, SizeType, ShapeType>> = (props) => {

    const { onClick, customLoader, prefixIcon, suffixIcon } = props;
    const theme = data.themes.find((t) => t.name === props.theme)?.variants.find((v) => v.name === props.variant);
    const disabled = props.disabled || props.isLoading;

    return (
      <button
        onClick={onClick}
        className={ getButtonClassname<ThemeType, ButtonVariant, SizeType, ShapeType>({
          data: data,
          th: theme,
          theme: props.theme,
          variant: props.variant,
          size: props.size,
          shape: props.shape,
          block: props.block,
          disabled: disabled,
          isLoading: props.isLoading
        }) }
        style={{ ...props.style }}
        disabled={disabled}
      >
        {prefixIcon &&
          <span className={`DynamicButton--prefixIcon`}>
            <span className={`DynamicButton--prefixIconContent`}>
              {prefixIcon}
            </span>
          </span>
        }
        <span className={`DynamicButtonContent ${data.mainClassName}-content`}>
          {props.children}
        </span>

        {suffixIcon &&
          <span className={`DynamicButton--suffixIcon`}>
            <span className={`DynamicButton--suffixIconContent`}>
              {suffixIcon}
            </span>
          </span>
        }

        { props.isLoading &&
          <span className="DynamicButton--loader">
            {customLoader ? customLoader : <span className="DynamicButton--spinner" />}
          </span>
        }
      </button>
    );

  }

  return DynamicButton;

}
