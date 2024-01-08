import React from 'react';
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
  }

  const DynamicButton: React.FC<IDynamicButton> = (props) => {

    const theme = data.themes.find((t) => t.name === props.theme)?.variants.find((v) => v.name === props.variant);
    const size = data.sizes.find((s) => s.name === props.size);
    const shape = data.shapes.find((s) => s.name === props.shape);
    const { onClick } = props;

    let borderRadius: string;
    let focusBorderRadius: string;
    if (shape && shape.borderRadius !== undefined && shape.borderRadius !== null) {
      borderRadius = typeof shape.borderRadius === 'number' ? `${shape.borderRadius}px` : shape.borderRadius;
      focusBorderRadius = typeof shape.focusBorderRadius === 'number' ? `${shape.focusBorderRadius}px` : shape.focusBorderRadius;
    } else {
      borderRadius = defaultShape.borderRadius as string;
      focusBorderRadius = defaultShape.focusBorderRadius as string;
    }
    let focusBorderOffset = `${-1 * ((size?.borderWidth || defaultSize.borderWidth) + 3)}px`;

    const getStyles = (): CustomCSS => {
      return {
        '--background': theme?.background || defaultTheme.variants[0].background ,
        '--hoverBackground': theme?.hoverBackground || defaultTheme.variants[0].hoverBackground,
        '--activeBackground': theme?.activeBackground || defaultTheme.variants[0].activeBackground,
        '--color': theme?.color || defaultTheme.variants[0].color,
        '--borderColor': theme?.borderColor || defaultTheme.variants[0].borderColor,
        '--focusColor': theme?.focusColor || defaultTheme.variants[0].focusColor,

        '--paddingY': `${size?.paddingY || defaultSize.paddingY}px`,
        '--paddingX': `${size?.paddingX || defaultSize.paddingX}px`,
        '--innerGap': `${size?.innerGap || defaultSize.innerGap}px`,
        '--fontSize': `${size?.fontSize || defaultSize.fontSize}px`,
        '--lineHeight': `${size?.lineHeight || defaultSize.lineHeight}`,

        '--borderRadius': borderRadius,

        '--focusBorderRadius': focusBorderRadius,
        '--focusBorderOffset': focusBorderOffset,

        '--borderWidth': `${size?.borderWidth}px` || `${defaultSize.borderWidth}px`,
      }
    }

    return (
      <button onClick={onClick} className={`DynamicButton ${theme?.convex ? 'DynamicButton--convex' : ''} ${theme?.focusFrame ? 'DynamicButton--focusFrame' : ''} ${data.mainClassName}`} style={getStyles()}>
        <span className={`DynamicButtonContent ${data.mainClassName}-content`}>
          {props.children}
        </span>
      </button>
    );

  }

  return DynamicButton;

}
