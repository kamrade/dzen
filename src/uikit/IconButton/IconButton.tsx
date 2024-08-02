import { FC, ReactNode } from "react";
import s from "./IconButton.module.scss";
import classNames from 'classnames/bind';
const sx = classNames.bind(s);

export type IconButtonSize = 'sm' | 'md';
export type IconButtonTheme = 'base' | 'inv';

export interface IIconButton {
  children: ReactNode;
  onClick?: (e?: MouseEvent) => unknown;
  size?: IconButtonSize;
  theme?: IconButtonTheme;
}

export const IconButton: FC<IIconButton> = ({ children, onClick, size = 'md', theme = 'base' }) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={sx({
        IconButton: true,
        IconButtonSm: size === 'sm',
        IconButtonInverted: theme === 'inv'
      })}>
        {children}
    </button>
  );
};
