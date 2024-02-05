import React, { ReactNode } from 'react';
import './DynamicButton.scss';
import { IButtonGeneratorData, IButtonBase } from './Params.ts';
import { defaultTheme, defaultSize, defaultShape } from './Defaults.ts';
import { addStylesheet } from './add-stylesheet.ts';

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

  const stylesId = 'dynamic-button-styles';

  if ( !document.getElementById(stylesId) ) {

    const allThemesTypes: ThemeType[] = data.themes.map(theme => theme.name);
    const allVariants = data.themes[0].variants.map(variant => variant.name);
    const allSizes = data.sizes.map(size => size.name);
    const allShapes = data.shapes.map(shape => shape.name);

    let allSizesCss = '';
    let themeVariantCss = '';
    let allShapesCss = '';

    const focusOffset = 3;
    let height = 0;
    let focusHeight = 0;

    allThemesTypes.map(themeType => {
      allVariants.map(variantName => {
        themeVariantCss +=
          `.${data.mainClassName}.${data.mainClassName}-theme-${themeType}.${data.mainClassName}-variant-${variantName} {`
        let st = data.themes.find(theme => theme.name === themeType)?.variants?.find(variant => variant.name === variantName);
        if (st) {

          const background = st?.background || defaultTheme.variants[0].background;
          const hoverBackground = st?.hoverBackground || defaultTheme.variants[0].hoverBackground;
          const activeBackground = st?.activeBackground || defaultTheme.variants[0].activeBackground;
          const color = st?.color || defaultTheme.variants[0].color;
          const borderColor = st?.borderColor || defaultTheme.variants[0].borderColor;
          const focusColor = st?.focusColor || defaultTheme.variants[0].focusColor;

          themeVariantCss += (
            `--background: ${background};` +
            `--hoverBackground: ${hoverBackground};` +
            `--activeBackground: ${activeBackground};` +
            `--color: ${color};` +
            `--borderColor: ${borderColor};` +
            `--focusColor: ${focusColor};` +
            `}`
          );
        }
      });
    });

    allSizes.map((sizeType) => {
      allSizesCss +=
        `.${data.mainClassName}.${data.mainClassName}-size-${sizeType} {`;
      let sz = data.sizes.find(size => size.name === sizeType);
      if (sz) {
        const paddingY = sz?.paddingY === undefined ? defaultSize.paddingY : sz?.paddingY;
        const paddingX = sz?.paddingX === undefined ?  defaultSize.paddingX : sz?.paddingX;
        const fontSize = sz?.fontSize === undefined ? defaultSize.fontSize : sz?.fontSize;
        const lineHeight = sz?.lineHeight === undefined ? defaultSize.lineHeight : sz?.lineHeight;
        const borderWidth = sz?.borderWidth === undefined ? defaultSize.borderWidth : sz?.borderWidth;
        const innerGap = sz?.innerGap === undefined ? defaultSize.innerGap : sz?.innerGap;

        const focusBorderOffset = -1 * ((sz?.borderWidth || defaultSize.borderWidth) + focusOffset);
        height = (paddingY * 2) + fontSize * lineHeight + borderWidth * 2;
        focusHeight = height + (focusOffset * 2);


        allSizesCss += (
          `--paddingY: ${paddingY}px;` +
          `--paddingX: ${paddingX}px;` +
          `--innerGap: ${innerGap}px;` +
          `--fontSize: ${fontSize}px;` +
          `--lineHeight: ${lineHeight};` +
          `--borderWidth: ${borderWidth}px;` +
          `--focusBorderOffset: ${focusBorderOffset}px;` +
          `--focusHeight: ${focusHeight}px;` +
          `}`
        );
      }
    });

    allShapes.map((shapeType) => {
      allShapesCss +=
        `.${data.mainClassName}.${data.mainClassName}-shape-${shapeType} {`;
      let sh = data.shapes.find(shape => shape.name === shapeType);

      let borderRadius = sh?.borderRadius === undefined ? defaultShape.borderRadius : sh?.borderRadius;
      let focusBorderRadius = sh?.focusBorderRadius === undefined ? defaultShape.focusBorderRadius : sh?.focusBorderRadius;

      borderRadius = borderRadius > (height/2) ? Math.ceil(height/2) : borderRadius;
      focusBorderRadius = focusBorderRadius > (focusHeight/2) ? Math.ceil(focusHeight/2) : focusBorderRadius;

      const cut = Math.ceil(((focusHeight - (borderRadius))/focusHeight) * 100);
      const cutLeft = cut > 80 ? 80 : cut;
      const cutRight = (100 - cut) < 20 ? 20 : (100 - cut);

      if (sh) {
        allShapesCss +=
          `--borderRadius: ${borderRadius}px;` +
          `--focusBorderRadius: ${focusBorderRadius}px;` +
          `--cutLeft: ${cutLeft}%;` +
          `--cutRight: ${cutRight}%;` +
          `}`
      }
    })

    const styles = themeVariantCss + allSizesCss + allShapesCss;
    addStylesheet(styles, stylesId)

  }

  const DynamicButton: React.FC<IDynamicButton> = (props) => {

    const { onClick, customLoader, prefixIcon, suffixIcon } = props;


    // const size = data.sizes.find((s) => s.name === props.size);
    const theme = data.themes.find((t) => t.name === props.theme)?.variants.find((v) => v.name === props.variant);
    // const shape = data.shapes.find((s) => s.name === props.shape);

    const disabled = props.disabled || props.isLoading;

    const getClassName = () => {
      let className = 'DynamicButton';
      className += ' ';
      className += data.mainClassName;
      className += ' ';

      className += props.theme ? data.mainClassName + '-theme-' + props.theme + ' ' : '';
      className += props.variant ? data.mainClassName + '-variant-' + props.variant + ' ' : '';
      className += props.size ? data.mainClassName + '-size-' + props.size + ' ' : '';
      className += props.shape ? data.mainClassName + '-shape-' + props.shape + ' ' : '';

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
