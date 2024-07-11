import { Dispatch, FC, SetStateAction, useRef, useState, useEffect, TransitionEventHandler, ReactPortal } from "react";
import { createPortal } from 'react-dom';
import { IconButton } from "~/uikit";
import s from "./Drawer.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useOnClickOutside } from '~/hooks';

export interface IDrawerProps {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  initialWidth?: number;
}

export const Drawer: FC<IDrawerProps> = ({ isVisible, setVisibility, initialWidth = 400 }) => {

  const drawerRef = useRef<HTMLDivElement>(null);
  const [ isInnerVisible, setIsInnerVisible ] = useState(false);
  const [ drawerClassNames, setDrawerClassNames] = useState(`${s.Drawer}`);

  const drawerRoot = document.getElementById('drawer-root') as HTMLDivElement;
  if (!drawerRoot) {
    let createdDrawerRoot = document.createElement('div');
    createdDrawerRoot.className = 'drawer-root';
    createdDrawerRoot.id = 'drawer-root';
    document.body.appendChild(createdDrawerRoot);
  }

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
  
  return createPortal(
    (<>
      {isInnerVisible && (
        <div className={drawerClassNames} ref={drawerRef} onTransitionEnd={transitionEndHandler} style={{ width: `${initialWidth}px` }}>
          <IconButton onClick={() => setVisibility(false)}>
            <RiCloseLine />
          </IconButton>
          IconButtonThis is a Drawer
        </div>
      )}
    </>), document.getElementById('drawer-root') as HTMLDivElement);
};
