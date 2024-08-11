import { FC } from 'react';
import { Modal, ModalDialog } from '~/uikit';
import type { IGalleryImage } from '~/types';

export interface IGalleryGenericProps {
  isShowed: boolean;
  setIsShowed: (isShowed: boolean) => void;
  title: string;
  images: IGalleryImage[];
}

export const GalleryGeneric: FC<IGalleryGenericProps> = ({ isShowed, setIsShowed, title, images }) => {

  return (
    <Modal hideOnEscape={true} isShowed={isShowed} hideModal={() => setIsShowed(false)}>
      <ModalDialog type={'fullscreen'} hideModal={() => setIsShowed(false)}>
        <div className="container">
          <div className={"pt-5 pb-3"}>
            <h2>{ title }</h2>
          </div>
          <div>
            {images.map((image, i) => (
              <div className={'mb-3'} key={i}>
                <img src={image.src} alt={image.alt} className="base-image" />
              </div>
            ))}
          </div>
        </div>
      </ModalDialog>
    </Modal>
  );
}
