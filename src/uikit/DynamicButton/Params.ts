import React from 'react';

// Basic button data
export type ButtonType = 'button' | 'submit' | 'reset';

export interface IButtonBase {
  type?: ButtonType;
  disabled?: boolean;
  children?: React.ReactNode;
}

// Generative button data
export interface IButtonVariant<ButtonVariants> {
  name: ButtonVariants;
  background: string;
  hoverBackground: string;
  activeBackground: string;
  color: string;
  borderColor: string;
  focusColor: string;
  convex?: boolean;
  focusFrame?: boolean;
}

export interface IButtonTheme<ThemeType, VariantType> {
  name: ThemeType;
  variants: IButtonVariant<VariantType>[];
}

export interface IButtonSize<SizeType> {
  name: SizeType;
  paddingY: number;
  paddingX: number;
  innerGap: number;
  fontSize: number;
  lineHeight: number;
  borderWidth: number;
}

export interface IButtonShape<ShapeType> {
  name: ShapeType;
  borderRadius: number | string;
  focusBorderRadius: number | string;
}

// Button Generator Component Props
export interface IButtonGeneratorData<ThemeType, ButtonVariant, SizeType, ShapeType> {
  themes: IButtonTheme<ThemeType, ButtonVariant>[];
  sizes: IButtonSize<SizeType>[];
  shapes: IButtonShape<ShapeType>[];
  mainClassName: string;
}
