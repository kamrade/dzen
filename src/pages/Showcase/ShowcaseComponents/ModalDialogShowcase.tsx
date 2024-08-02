import { Button, Modal, ModalDialog } from '~/uikit';
import { useState } from 'react';

export const ModalDialogShowcase = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <div className={'mb-3'}>

      <Button
        theme={'primary'}
        variant={'contained'}
        onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}>
        Open Modal
      </Button>{' '}

      <Button
        theme={'primary'}
        variant={'contained'}
        onClick={() => setIsFullscreenModalOpen((isFullscreenModalOpen) => !isFullscreenModalOpen)}>
        Open Fullscreen Modal
      </Button>{' '}

      <Button
        theme={'primary'}
        variant={'contained'}
        onClick={() => setIsModalOpen2((isModalOpen) => !isModalOpen)}>
        Open Modal 2
      </Button>{' '}

      <Modal hideOnEscape={true} isShowed={isModalOpen} hideModal={() => setIsModalOpen(false)}>
        <ModalDialog hideModal={() => setIsModalOpen(false)}>
          <div><h2>Modal</h2></div>
          <div style={{ height: '2200px' }}>
            Content
          </div>
        </ModalDialog>
      </Modal>

      <Modal hideOnEscape={true} isShowed={isFullscreenModalOpen} hideModal={() => setIsFullscreenModalOpen(false)}>
        <ModalDialog type={'fullscreen'} hideModal={() => setIsFullscreenModalOpen(false)}>
          <div className="container">
            <div><h2>Modal</h2></div>
            <div style={{ height: '200px' }}>
              Fullscreen Content
            </div>
          </div>
        </ModalDialog>
      </Modal>

      <Modal hideOnEscape={true} isShowed={isModalOpen2} hideModal={() => setIsModalOpen2(false)}>
        <ModalDialog hideModal={() => setIsModalOpen2(false)}>
          <div><h2>Modal</h2></div>
          <div style={{ height: '2200px' }}>
            Content
          </div>
        </ModalDialog>
      </Modal>



    </div>
  );
}
