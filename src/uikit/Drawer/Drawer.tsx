import { Dispatch, FC, SetStateAction, useRef, useState, useEffect, TransitionEventHandler, ReactNode, RefObject } from "react";
import { createPortal } from 'react-dom';
import { IconButton } from "~/uikit";
import s from "./Drawer.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useOnClickOutside, useLockBodyScroll } from '~/hooks';

export interface IDrawerProps {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
  initialWidth?: string;
  children: ReactNode | ReactNode[];
  closeButton?: boolean;
  clickOutside?: boolean;
  insideRefs?: RefObject<HTMLElement>[]; // click on these elements is not a click outside
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

export const Drawer: FC<IDrawerProps> = ({ 
  isVisible, setVisibility, children,
  initialWidth = 'auto', 
  closeButton = false,
  clickOutside = true,
  insideRefs = [],
  top = 0,
  bottom = 0,
  right = 0,
  left = 0,
}) => {

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

  useOnClickOutside([...insideRefs, drawerRef], () => {
    if (clickOutside) {
      setVisibility(false);
    }
  }, isVisible);

  useLockBodyScroll(isVisible);
  
  return createPortal(
    (<>
      {isInnerVisible && (
        <div 
          className={drawerClassNames} 
          ref={drawerRef} 
          onTransitionEnd={transitionEndHandler} 
          style={{ 
            width: initialWidth,
            top: `${top}px`,
            bottom: `${bottom}px`,
            right: `${right}px`,
            left: `${left}px`,
          }}
        >
          { closeButton &&  
            <IconButton size='sm' onClick={() => setVisibility(false)}>
              <RiCloseLine />
            </IconButton>
          }
          <div className={s.DrawerContent}>
            {children}
          </div>
        </div>
      )}
    </>), document.getElementById('drawer-root') as HTMLDivElement);
};
