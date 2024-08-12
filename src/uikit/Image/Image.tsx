import { FC } from 'react';
import s from './Image.module.scss';
import type { IGalleryImage } from '~/types';

export interface IImageProps {
  showGallery: () => void;
  image: IGalleryImage;
  title: string;
  chip: string;
}

export const Image: FC<IImageProps> = ({ showGallery, image, title, chip }) => {
  return (
    <div className={s.Image} onClick={showGallery}>
      <img src={image.src} alt={image.alt} className={s.ImageEl} />
      <div className={s.ImageLabel}>
        <p className={s.ImageTitle}>{title}</p>
        <p className={s.ImageChip}>{chip}</p>
      </div>
    </div>
  )
}
