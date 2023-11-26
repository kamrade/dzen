import React from 'react';
import s from './DynamicButton.module.scss';


// Geneartive button data
interface IButtonTheme {
  name: string;
  backgroundColor: string;
  outline: string;
  color: string;
  default: boolean;
}

interface IButtonSize {
  name: string;
  paddingY: number;
  paddingX: number;
  innerGap: number;
  default: boolean;
}

interface IButtonShape {
  name: string;
  borderRadius: number;
  default: boolean;
}

interface IButtonGeneratorData {
  themes: IButtonTheme[];
  sizes: IButtonSize[];
  shapes: IButtonShape[];
}


// Basic button data
type ButtonType = 'button' | 'submit' | 'reset';

interface IButtonBase {
  type?: ButtonType;
  disabled?: boolean;
  children?: React.ReactNode;
}


// Function generator
export function DynamicButtonGenerator<ThemeType, SizeType>(data: IButtonGeneratorData) {

  interface IDynamicButton extends IButtonBase {
    theme?: ThemeType;
    size?: SizeType;
  }


  const DynamicButton: React.FC<IDynamicButton> = (props) => {

    return (
      <button className={s.DynamicButton}>
        {props.children}
      </button>
    );

  }

  return DynamicButton;

}


//  Create component
export type ButtonTheme = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'sm';

export const Button = DynamicButtonGenerator<ButtonTheme, ButtonSize>({
  
  sizes: [{
    name: 'md',
    paddingY: 8,
    paddingX: 12,
    innerGap: 4,
    default: false,
  }],
  
  themes: [{
    name: 'primary',
    color: 'white',
    outline: 'transparent',
    backgroundColor: 'blue',
    default: false,
  }, {
    name: 'secondary',
    color: 'darkgrey',
    outline: 'transparent',
    backgroundColor: 'lightgray',
    default: false,
  }],

  shapes: [{
    name: 'base',
    borderRadius: 6,
    default: true,
  }]

});