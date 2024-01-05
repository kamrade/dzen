import React from 'react';
import './DynamicButton.scss';
import { IButtonGeneratorData } from './DynamicButton.params.ts';
import { CustomCSS } from './CustomCSS.ts';
import { IButtonBase } from './BasicButtonData.ts';
import { defaultTheme, defaultSize, defaultShape } from './Defaults.ts';

// Function generator
export function DynamicButtonGenerator<ThemeType, SizeType, ShapeType>(data: IButtonGeneratorData<ThemeType, SizeType, ShapeType>) {

  interface IDynamicButton extends IButtonBase {
    theme?: ThemeType;
    size?: SizeType;
    shape?: ShapeType;
  }

  const DynamicButton: React.FC<IDynamicButton> = (props) => {

    const th = data.themes.find((theme) => theme.name === props.theme);
    const sz = data.sizes.find((size) => size.name === props.size);
    const sh = data.shapes.find((shape) => shape.name === props.shape);

    const getStyles = (): CustomCSS => {
      return {
        '--background': th?.background || defaultTheme.background ,
        '--hoverBackground': th?.hoverBackground || defaultTheme.hoverBackground,
        '--activeBackground': th?.activeBackground || defaultTheme.activeBackground,
        '--color': th?.color || defaultTheme.color,
        '--borderColor': th?.borderColor || defaultTheme.borderColor,

        '--paddingY': `${sz?.paddingY || defaultSize.paddingY}px`,
        '--paddingX': `${sz?.paddingX || defaultSize.paddingX}px`,
        '--innerGap': `${sz?.innerGap || defaultSize.innerGap}px`,
        '--fontSize': `${sz?.fontSize || defaultSize.fontSize}px`,
        '--lineHeight': `${sz?.lineHeight || defaultSize.lineHeight}`,

        '--borderRadius': sh?.borderRadius || defaultShape.borderRadius,
      }
    }

    return (
      <button className={'DynamicButton'} style={getStyles()}>
        <span className={'DynamicButtonContent'}>
          {props.children}
        </span>
      </button>
    );

  }

  return DynamicButton;

}