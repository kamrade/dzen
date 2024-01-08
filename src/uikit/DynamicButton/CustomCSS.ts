import { CSSProperties } from "react";

export interface CustomCSS extends CSSProperties {
  '--background': string;
  '--hoverBackground': string;
  '--activeBackground': string;
  '--color': string;
  '--borderColor': string;

  '--paddingY': string;
  '--paddingX': string;
  '--innerGap': string;
  '--fontSize': string;
  '--lineHeight': string;

  '--borderRadius': string;
  '--focusBorderRadius': string;

  '--focusColor': string;
  '--borderWidth': string;
  '--focusBorderOffset': string;
}
