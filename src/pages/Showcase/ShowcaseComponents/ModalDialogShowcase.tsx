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
        <ModalDialog
          hideModal={() => setIsModalOpen(false)}
          title={'Very long Modal Title. Which can be rendered in 2 rows'}
        >
          <div style={{ height: '2200px', padding: '1rem' }}>
            The sun was setting behind the mountains, casting a warm glow over the valley. A gentle breeze rustled the leaves, carrying the scent of fresh pine. Birds chirped softly as they settled into their nests for the night. A small stream flowed nearby, its water sparkling under the fading light. Everything felt peaceful, as if nature itself was preparing for rest.
          </div>
        </ModalDialog>
      </Modal>

      <Modal hideOnEscape={true} isShowed={isFullscreenModalOpen} hideModal={() => setIsFullscreenModalOpen(false)}>
        <ModalDialog
          type={'fullscreen'}
          hideModal={() => setIsFullscreenModalOpen(false)}
          title={'Very long Modal Title. Which can be rendered in 2 rows'}
        >
          <div style={{ padding: "1rem"}}>
            <div><h2>Modal</h2></div>
            <div style={{ height: '2200px' }}>
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
