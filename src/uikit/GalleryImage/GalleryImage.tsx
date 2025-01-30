import { FC, useState } from 'react';
import { Modal, ModalDialog, Image } from '~/uikit';
import type { IGalleryImage } from '~/types';
import s from './GalleryImage.module.scss';

export interface IGalleryGenericProps {
  previewTitle?: string;
  previewChip?: string;
  previewImage: IGalleryImage;
  title?: string;
  images?: IGalleryImage[];
  previewWidth?: number;
  noFrame?: boolean;
}

export const GalleryImage: FC<IGalleryGenericProps> =
({ title, images, previewTitle, previewChip, previewImage, previewWidth, noFrame }) => {

  const [isGallery, setIsGallery] = useState(false);

  return (
    <div className={s.GalleryImage} style={noFrame ? { padding: '0'} : {}}>

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
            type={'container'}
            hideModal={() => setIsGallery(false)}
          >
            {title && <div className={'pt-5 pb-3'}><h2>{title}</h2></div>}
            <div>
              {images.map((image, i) => (
                <div className={s.ImageWrapper} key={i}>
                  <a href={image.src} target={"_blank"}>
                    <img src={image.src} alt={image.alt} className={s.ImageElement} />
                  </a>
                </div>
              ))}
            </div>
          </ModalDialog>
        </Modal>
      }
    </div>
  );
}
