import { FC } from 'react';
import { Modal, ModalDialog } from '~/uikit';

export interface IGallerySidebar {
  isShowed: boolean;
  setIsShowed: (isShowed: boolean) => void
}

export const GallerySidebar: FC<IGallerySidebar> = ({ isShowed, setIsShowed }) => {

  return (
    <Modal hideOnEscape={true} isShowed={isShowed} hideModal={() => setIsShowed(false)}>
      <ModalDialog type={'fullscreen'} hideModal={() => setIsShowed(false)}>
        <div className="container">
          <div className={"pt-5 pb-3"}>
            <h2>Sidebar UI Component</h2>
          </div>
          <div>
            <div className={'mb-3'}>
              <img src="/img/sidebar_associated_individuals_details.png" alt="" className='base-image' />
            </div>
            <div className={'mb-3'}>
              <img src="/img/sidebar_components.png" alt="" className='base-image' />
            </div>
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
}
