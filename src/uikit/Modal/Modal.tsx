import { FC, KeyboardEvent, MouseEventHandler, ReactNode, useEffect, useCallback } from 'react';
import { createPortal} from 'react-dom';
import s from './Modal.module.scss';
import { useLockBodyScroll } from '~/hooks';

export interface IModalProps {
  isShowed: boolean;
  children: ReactNode;
  hideModal: () => void;
  hideOnEscape?: boolean;
}

export const Modal: FC<IModalProps> = ({ children, isShowed, hideModal, hideOnEscape }) => {

  useLockBodyScroll(isShowed);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      hideModal();
    }
  }, [hideModal]);

  useEffect(() => {

    if (hideOnEscape) {
      // @ts-expect-error/ts-is-fucking-bullshitting-me
      document.addEventListener('keydown', handleKeyDown);
    }
  }, [hideOnEscape, handleKeyDown])

  const modalClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    (e.target as HTMLElement).classList.contains('ModalContent') && hideModal();
  }

  return createPortal(
    isShowed &&
      (
        <div className={s.ModalRoot}>
          <div className={s.ModalBackdrop} />
          <div className={`${s.ModalContent} ModalContent`} onMouseDown={modalClickHandler}>
            {children}
          </div>
        </div>
      ),
    document.getElementById('modal-root') || document.body);
}
