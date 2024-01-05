import { DynamicButtonGenerator } from ".";

//  Create component
export type ButtonTheme = 'primary' | 'secondary' | 'contrast';
export type ButtonSize = 'md' | 'lg';
export type ButtonShape = 'straight' | 'rounded' | 'circled';

export const Button = DynamicButtonGenerator<ButtonTheme, ButtonSize, ButtonShape>({

  themes: [{
    name: 'primary',
    background: '#63D0F2',
    hoverBackground: '#59C8EB',
    activeBackground: '#53BEE0',
    borderColor: '#30BEEB',
    color: '#ffffff',
  }, {
    name: 'secondary',
    background: '#1B4552',
    hoverBackground: '#133540',
    activeBackground: '#0C262E',
    borderColor: 'transparent',
    color: 'white',
  }, {
    name: 'contrast',
    background: '#1B4552',
    hoverBackground: '#133540',
    activeBackground: '#0C262E',
    borderColor: 'transparent',
    color: '#ffffff',
  }],

  sizes: [{
    name: 'md',
    paddingY: 4,
    paddingX: 12,
    innerGap: 4,
    fontSize: 14,
    lineHeight: 1.5,
  }, {
    name: 'lg',
    paddingY: 8,
    paddingX: 12,
    innerGap: 4,
    fontSize: 14,
    lineHeight: 1.5,
  }],

  shapes: [{
    name: 'straight',
    borderRadius: '0'
  }, {
    name: 'rounded',
    borderRadius: '6px',
  }, {
    name: 'circled',
    borderRadius: '50%'
  }]

});