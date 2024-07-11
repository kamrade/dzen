import { Dispatch, FC, SetStateAction, useRef, useState, useEffect, TransitionEventHandler } from "react";
import { IconButton } from "~/uikit";
import s from "./Drawer.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useOnClickOutside } from '~/hooks';

export interface IDrawerProps {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

export const Drawer: FC<IDrawerProps> = ({ isVisible, setVisibility }) => {

  const drawerRef = useRef<HTMLDivElement>(null);
  const [ isInnerVisible, setIsInnerVisible ] = useState(false);
  const [ drawerClassNames, setDrawerClassNames] = useState(`${s.Drawer}`);

  useEffect(() => {
    if (isVisible) {
      setIsInnerVisible(true);
    } else {
      setDrawerClassNames(s.Drawer);
    }
  }, [isVisible]);

  useEffect(() => {
    setDrawerClassNames(`${s.Drawer} ${isInnerVisible ? s.DrawerVisible : ''}`);
  }, [isInnerVisible]);

  const transitionEndHandler: TransitionEventHandler<HTMLDivElement> = (e) => {
    if (e.target === drawerRef.current && (!isVisible)) {
      setIsInnerVisible(isVisible);
    }
  }

  useOnClickOutside([drawerRef], () => {
    setVisibility(false);
  }, isVisible);
  
  return (
    <>
      {isInnerVisible && (
        <div className={drawerClassNames} ref={drawerRef} onTransitionEnd={transitionEndHandler}>
          <IconButton onClick={() => setVisibility(false)}>
            <RiCloseLine />
          </IconButton>
          IconButtonThis is a Drawer
        </div>
      )}
    </>
  );
};
