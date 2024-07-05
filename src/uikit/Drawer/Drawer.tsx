import { Dispatch, FC, SetStateAction } from "react";
import { IconButton } from "~/uikit";
import s from "./Drawer.module.scss";
import { RiCloseLine } from "react-icons/ri";

export interface IDrawerProps {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

export const Drawer: FC<IDrawerProps> = ({ isVisible, setVisibility }) => {
  return (
    <>
      {isVisible && (
        <div className={s.Drawer}>
          <IconButton onClick={() => setVisibility(false)}>
            <RiCloseLine />
          </IconButton>
          IconButtonThis is a Drawer
        </div>
      )}
    </>
  );
};
