import { Dispatch, FC, SetStateAction, useRef, useState, useEffect, TransitionEventHandler, ReactNode, RefObject } from "react";
import { createPortal } from 'react-dom';
import { IconButton } from "~/uikit";
import s from "./Drawer.module.scss";
import { RiCloseLine } from "react-icons/ri";
import { useOnClickOutside, useLockBodyScroll, useWindowSize } from '~/hooks';

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
  mobileTrigger?: number;
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
  mobileTrigger = 600,
}) => {

  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const [ isInnerVisible, setIsInnerVisible ] = useState(false);
  const [ drawerClassNames, setDrawerClassNames] = useState(`${s.Drawer}`);
  const [ backdropClassNames, setBackdropClassNames] = useState(`${s.DrawerBackdrop}`);

  const windowSize = useWindowSize({ debounceTime: 400 });

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
      setBackdropClassNames(s.DrawerBackdrop);
    }
  }, [isVisible]);

  useEffect(() => {
    setTimeout(() => {
      setDrawerClassNames(`${s.Drawer} ${isVisible ? s.DrawerVisible : ''}`);
      setBackdropClassNames(`${s.DrawerBackdrop} ${isVisible ? s.DrawerBackdropVisible : ''}`);
    }, 5);
  }, [isInnerVisible]);

  const transitionEndHandler: TransitionEventHandler<HTMLDivElement> = (e) => {
    if ((e.target === drawerRef.current || e.target === backdropRef.current) && (!isVisible)) {
      setIsInnerVisible(isVisible);
    }
  }

  useOnClickOutside([...insideRefs, drawerRef], () => {
    if (clickOutside) {
      setVisibility(false);
    }
  }, isVisible);

  useEffect(() => {
  }, [isInnerVisible, drawerClassNames])

  useLockBodyScroll(isVisible);
  
  return createPortal(
    (<>
      {isInnerVisible && (
        <div 
          onTransitionEnd={transitionEndHandler}
          ref={backdropRef} 
          className={backdropClassNames}
        ></div>
      )}
      {isInnerVisible && (
        <div 
          className={drawerClassNames} 
          ref={drawerRef} 
          onTransitionEnd={transitionEndHandler}
          style={{ 
            width: initialWidth,
            top: `${top}px`,
            bottom: `${windowSize.width > mobileTrigger ? bottom : 0}px`,
            right: `${windowSize.width > mobileTrigger ? right : 0}px`,
            left: `${windowSize.width > mobileTrigger ? left : 0}px`,
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
