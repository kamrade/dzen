import { FC, useState } from 'react';
import { Modal, ModalDialog } from '~/uikit';
import type { IGalleryImage } from '~/types';

export interface IGalleryGenericProps {
  previewTitle: string;
  previewChip: string;
  previewImage: IGalleryImage;
  title: string;
  images: IGalleryImage[];
}

export const GalleryGeneric: FC<IGalleryGenericProps> = ({ title, images, previewTitle, previewChip, previewImage }) => {

  const [isGallery, setIsGallery] = useState(false);

  return (
    <>
      <div className="base-image-wrapper" onClick={() => setIsGallery(true)}>
        <img src={previewImage.src} alt={previewImage.alt} className="base-image" />
        <div className="image-label">
          <p className="image-title">{ previewTitle }</p>
          <p className="image-chip">{ previewChip }</p>
        </div>
      </div>

    <Modal hideOnEscape={true} isShowed={isGallery} hideModal={() => setIsGallery(false)}>
      <ModalDialog type={'fullscreen'} hideModal={() => setIsGallery(false)}>
        <div className="container">
          <div className={'pt-5 pb-3'}>
            <h2>{title}</h2>
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
    </>
  );
}
