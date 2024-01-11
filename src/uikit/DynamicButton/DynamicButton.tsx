import React, { ReactNode } from 'react';
import './DynamicButton.scss';
import { IButtonGeneratorData, IButtonBase } from './Params.ts';
import { CustomCSS } from './CustomCSS.ts';
import { defaultTheme, defaultSize, defaultShape } from './Defaults.ts';

// Function generator
export function DynamicButtonGenerator<ThemeType, ButtonVariant, SizeType, ShapeType>(data: IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType>) {

  interface IDynamicButton extends IButtonBase {
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

  const DynamicButton: React.FC<IDynamicButton> = (props) => {

    const { onClick, customLoader, prefixIcon, suffixIcon } = props;
    const focusOffset = 3;

    const size = data.sizes.find((s) => s.name === props.size);
    const theme = data.themes.find((t) => t.name === props.theme)?.variants.find((v) => v.name === props.variant);
    const shape = data.shapes.find((s) => s.name === props.shape);

    const paddingY = size?.paddingY === undefined ? defaultSize.paddingY : size?.paddingY;
    const paddingX = size?.paddingX === undefined ?  defaultSize.paddingX : size?.paddingX;
    const fontSize = size?.fontSize === undefined ? defaultSize.fontSize : size?.fontSize;
    const lineHeight = size?.lineHeight === undefined ? defaultSize.lineHeight : size?.lineHeight;
    const borderWidth = size?.borderWidth === undefined ? defaultSize.borderWidth : size?.borderWidth;
    const innerGap = size?.innerGap === undefined ? defaultSize.innerGap : size?.innerGap;

    const background = theme?.background || defaultTheme.variants[0].background;
    const hoverBackground = theme?.hoverBackground || defaultTheme.variants[0].hoverBackground;
    const activeBackground = theme?.activeBackground || defaultTheme.variants[0].activeBackground;
    const color = theme?.color || defaultTheme.variants[0].color;
    const borderColor = theme?.borderColor || defaultTheme.variants[0].borderColor;
    const focusColor = theme?.focusColor || defaultTheme.variants[0].focusColor;

    let borderRadius = shape?.borderRadius === undefined ? defaultShape.borderRadius : shape?.borderRadius;
    let focusBorderRadius = shape?.focusBorderRadius === undefined ? defaultShape.focusBorderRadius : shape?.focusBorderRadius;

    const focusBorderOffset = -1 * ((size?.borderWidth || defaultSize.borderWidth) + focusOffset);
    const height = (paddingY * 2) + fontSize * lineHeight + borderWidth * 2;
    const focusHeight = height + (focusOffset * 2);

    borderRadius = borderRadius > (height/2) ? Math.ceil(height/2) : borderRadius;
    focusBorderRadius = focusBorderRadius > (focusHeight/2) ? Math.ceil(focusHeight/2) : focusBorderRadius;

    const cut = Math.ceil(((focusHeight - (borderRadius))/focusHeight) * 100);
    const cutLeft = cut > 80 ? 80 : cut;
    const cutRight = (100 - cut) < 20 ? 20 : (100 - cut);

    const disabled = props.disabled || props.isLoading;

    const getStyleVariables = (): CustomCSS => ({
      '--background': background,
      '--hoverBackground': hoverBackground,
      '--activeBackground': activeBackground,
      '--color': color,
      '--borderColor': borderColor,
      '--focusColor': focusColor,

      '--paddingY': `${paddingY}px`,
      '--paddingX': `${paddingX}px`,
      '--innerGap': `${innerGap}px`,
      '--fontSize': `${fontSize}px`,
      '--lineHeight': `${lineHeight}`,

      '--borderRadius': `${borderRadius}px`,

      '--focusBorderRadius': `${focusBorderRadius}px`,
      '--focusBorderOffset': `${focusBorderOffset}px`,

      '--borderWidth': `${borderWidth}px`,

      '--focusHeight': `${focusHeight}px`,
      '--cutLeft': `${cutLeft}%`,
      '--cutRight': `${cutRight}%`,
    });

    const getClassName = () => {
      let className = 'DynamicButton';
      className += ' ';
      className += data.mainClassName;
      className += ' ';
      className += theme?.convex ? 'DynamicButton--convex' : '';
      className += ' ';
      className += theme?.focusFrame ? 'DynamicButton--focusFrame' : '';
      className += ' ';
      className += props.block ? 'DynamicButton--block' : '';
      className += ' ';
      className += disabled ? 'DynamicButton--disabled' : '';
      className += ' ';
      className += props.isLoading ? 'DynamicButton--loading' : '';
      return className;
    }

    return (
      <button
        onClick={onClick}
        className={ getClassName() }
        style={{
          ...getStyleVariables(),
          ...props.style
        }}
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
