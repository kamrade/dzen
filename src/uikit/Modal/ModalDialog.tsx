import { ReactNode, FC, useRef, useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import s from './ModalDialog.module.scss';
const cx = classnames.bind(s);
import { RiCloseFill } from 'react-icons/ri';
import { IconButton } from '~/uikit';

export type ModalDialogTypes = 'default' | 'fullscreen';

export interface IModalDialogProps {
  children?: ReactNode;
  hideModal: () => void;
  type?: ModalDialogTypes;
  title?: string;
  backgroundTransparent?: boolean;
}

export const ModalDialog: FC<IModalDialogProps> = ({ children, hideModal, type='default', title, backgroundTransparent }) => {

  const modalDialogTitleRef = useRef<HTMLDivElement | null>(null);
  const [titleBlockHeight, setTitleBlockHeight] = useState(0);

  useEffect(() =>
    setTitleBlockHeight(modalDialogTitleRef?.current?.getBoundingClientRect().height || 0),
    [setTitleBlockHeight]);

  return (
    <>
      <div className={cx('ModalDialogWrapper', {
        ModalDialogDefault: type === 'default',
        ModalDialogFullscreen: type === 'fullscreen'
      })} style={backgroundTransparent ? {background: 'transparent'} : {} }>
        <div className={s.modalDialog}>

          {title &&(
            <div className={s.modalDialogTitle} ref={modalDialogTitleRef}>
              <h1 className={s.modalDialogTitleElement}>{title}</h1>
            </div>
          )}

          <div className={s.modalDialogContent} style={{ height: `calc(100vh - 6rem - ${titleBlockHeight}px)` }}>
            {children}
          </div>

          <div className={s.close}>
            <IconButton theme={'inv'} size={'md'} onClick={() => {
              hideModal && hideModal();
            }}><RiCloseFill /></IconButton>
          </div>

        </div>
      </div>
    </>
  )
}
