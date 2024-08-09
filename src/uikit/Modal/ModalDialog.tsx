import { ReactNode, FC } from 'react';
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
}

export const ModalDialog: FC<IModalDialogProps> = ({ children, hideModal, type='default' }) => (
  <>
    <div className={cx('ModalDialogWrapper', {
      ModalDialogDefault: type === 'default',
      ModalDialogFullscreen: type === 'fullscreen'
    })}>
      <div className={s.ModalDialog}>

        <div className={s.ModalDialogContent}>
          {children}
        </div>

        <div className={s.Close}>
          <IconButton theme={'inv'} size={'md'} onClick={() => hideModal && hideModal()}><RiCloseFill /></IconButton>
        </div>

      </div>
    </div>
  </>
)
