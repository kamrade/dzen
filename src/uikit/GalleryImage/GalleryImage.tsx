import { FC, useState } from 'react';
import { Modal, ModalDialog, Image } from '~/uikit';
import type { IGalleryImage } from '~/types';
import s from './GalleryImage.module.scss';

export interface IGalleryGenericProps {
  previewTitle: string;
  previewChip: string;
  previewImage: IGalleryImage;
  title: string;
  images?: IGalleryImage[];
}

export const GalleryImage: FC<IGalleryGenericProps> = ({ title, images, previewTitle, previewChip, previewImage }) => {

  const [isGallery, setIsGallery] = useState(false);

  return (
    <div className={s.GalleryImage}>

      <Image
        showGallery={() => setIsGallery(true)}
        image={previewImage}
        title={previewTitle}
        chip={previewChip}
      />

      {images &&
        <Modal hideOnEscape={true} isShowed={isGallery} hideModal={() => setIsGallery(false)}>
          <ModalDialog type={'fullscreen'} hideModal={() => setIsGallery(false)}>
            <div className="container">
              <div className={'pt-5 pb-3'}>
                <h2>{title}</h2>
              </div>
              <div>
                {images.map((image, i) => (
                  <div className={'mb-3'} key={i}>
                    <img src={image.src} alt={image.alt} className={s.GalleryImage} />
                  </div>
                ))}
              </div>
            </div>
          </ModalDialog>
        </Modal>
      }
    </div>
  );
}
