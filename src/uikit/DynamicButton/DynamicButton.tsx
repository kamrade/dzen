import React from 'react';
import s from './DynamicButton.module.scss';

// Geneartive button data
export interface IButtonTheme<ThemeType> {
  name: ThemeType;
  backgroundColor: string;
  outline: string;
  color: string;
  default: boolean;
}

export interface IButtonSize<SizeType> {
  name: SizeType;
  paddingY: number;
  paddingX: number;
  innerGap: number;
  default: boolean;
}

export interface IButtonShape<ShapeType> {
  name: ShapeType;
  borderRadius: number;
  default: boolean;
}

export interface IButtonGeneratorData<ThemeType, SizeType, ShapeType> {
  themes: IButtonTheme<ThemeType>[];
  sizes: IButtonSize<SizeType>[];
  shapes: IButtonShape<ShapeType>[];
}

// Basic button data
type ButtonType = 'button' | 'submit' | 'reset';

interface IButtonBase {
  type?: ButtonType;
  disabled?: boolean;
  children?: React.ReactNode;
}


// Function generator
export function DynamicButtonGenerator<ThemeType, SizeType, ShapeType>(data: IButtonGeneratorData<ThemeType, SizeType, ShapeType>) {

  interface IDynamicButton extends IButtonBase {
    theme?: ThemeType;
    size?: SizeType;
    shape?: ShapeType;
  }

  const DynamicButton: React.FC<IDynamicButton> = (props) => {

    console.log(props);
    console.log(data);

    return (
      <button className={s.DynamicButton}>
        {props.children}
      </button>
    );

  }

  return DynamicButton;

}