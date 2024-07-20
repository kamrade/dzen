import { FC, ReactNode } from "react";
import s from "./IconButton.module.scss";

export type IconButtonSize = 'sm' | 'md';

export interface IIconButton {
  children: ReactNode;
  onClick?: (e?: MouseEvent) => unknown;
  size?: IconButtonSize;
}

export const IconButton: FC<IIconButton> = ({ children, onClick, size = 'md' }) => {
  return (
    <button onClick={() => onClick && onClick()} className={`${s.IconButton} ${size === 'sm' ? s.IconButtonSm : ''}`}>
      {children}
    </button>
  );
};
