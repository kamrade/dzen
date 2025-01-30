import { FC, useState } from 'react';
import { Modal, ModalDialog, Image } from '~/uikit';
import type { IGalleryImage } from '~/types';
import s from './GalleryImage.module.scss';

export interface IGalleryGenericProps {
  previewTitle: string;
  previewChip: string;
  previewImage: IGalleryImage;
  title?: string;
  images?: IGalleryImage[];
  previewWidth?: number;
}

export const GalleryImage: FC<IGalleryGenericProps> =
({ title, images, previewTitle, previewChip, previewImage, previewWidth }) => {

  const [isGallery, setIsGallery] = useState(false);

  return (
    <div className={s.GalleryImage}>

      <Image
        showGallery={() => setIsGallery(true)}
        image={previewImage}
        title={previewTitle}
        chip={previewChip}
        width={previewWidth}
      />

      {images &&
        <Modal hideOnEscape={true} isShowed={isGallery} hideModal={() => setIsGallery(false)}>
          <ModalDialog
            type={'fullscreen'}
            hideModal={() => setIsGallery(false)}
            backgroundTransparent={true}
          >
            {title &&
              <div className={'pt-5 pb-3'}>

                <h2>{title}</h2>

              </div>
            }
            <div className="container">
              {images.map((image, i) => (
                <div className={'mb-3'} key={i}>
                  <img src={image.src} alt={image.alt} className={s.GalleryImage} />
                </div>
              ))}
            </div>
          </ModalDialog>
        </Modal>
      }
    </div>
  );
}
