import { DynamicButtonGenerator } from ".";

//  Create component
export type ButtonTheme = 'primary' | 'secondary';
export type ButtonSize = 'md' | 'sm';
export type ButtonShape = 'straight' | 'rounded' | 'circled';

export const Button = DynamicButtonGenerator<ButtonTheme, ButtonSize, ButtonShape>({
  
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

  sizes: [{
    name: 'md',
    paddingY: 8,
    paddingX: 12,
    innerGap: 4,
    default: false,
  }],

  shapes: [{
    name: 'rounded',
    borderRadius: 6,
    default: true,
  }]

});