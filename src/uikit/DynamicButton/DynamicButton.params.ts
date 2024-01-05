// Generative button data
export interface IButtonTheme<ThemeType> {
  name: ThemeType;
  background: string;
  hoverBackground: string;
  activeBackground: string;
  color: string;
  borderColor: string;
}

export interface IButtonSize<SizeType> {
  name: SizeType;
  paddingY: number;
  paddingX: number;
  innerGap: number;
  fontSize: number;
  lineHeight: number;
}

export interface IButtonShape<ShapeType> {
  name: ShapeType;
  borderRadius: string;
}

export interface IButtonGeneratorData<ThemeType, SizeType, ShapeType> {
  themes: IButtonTheme<ThemeType>[];
  sizes: IButtonSize<SizeType>[];
  shapes: IButtonShape<ShapeType>[];
}