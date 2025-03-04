import { ReactNode, FC } from 'react';
import classnames from 'classnames/bind';
import s from './ModalDialog.module.scss';
const cx = classnames.bind(s);
import { RiCloseFill } from 'react-icons/ri';
import { IconButton } from '~/uikit';

export type ModalDialogTypes = 'default' | 'fullscreen' | 'container';

export interface IModalDialogProps {
  children?: ReactNode;
  hideModal: () => void;
  type?: ModalDialogTypes;
  title?: string;
}

export const ModalDialog: FC<IModalDialogProps> = ({ children, hideModal, type='default', title }) => {

  return (
    <>
      <div className={cx('ModalDialogWrapper', {
        ModalDialogDefault: type === 'default',
        ModalDialogFullscreen: type === 'fullscreen',
        ModalDialogContainer: type === 'container'
      }) + (type === 'container' ? ' container' : '')}>
        <div className={s.modalDialog}>

          {title &&(
            <div className={s.modalDialogTitle}>
              <h1 className={s.modalDialogTitleElement}>{title}</h1>
            </div>
          )}

          <div className={s.modalDialogContent} >
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
