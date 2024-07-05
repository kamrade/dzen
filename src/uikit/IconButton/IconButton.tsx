import { FC, ReactNode } from "react";
import s from "./IconButton.module.scss";

export interface IIconButton {
  children: ReactNode;
  onClick?: any;
}

export const IconButton: FC<IIconButton> = ({ children, onClick }) => {
  return (
    <button onClick={() => onClick && onClick()} className={s.IconButton}>
      {children}
    </button>
  );
};
