import { FC } from 'react';
import s from './Image.module.scss';
import type { IGalleryImage } from '~/types';

export interface IImageProps {
  showGallery: () => void;
  image: IGalleryImage;
  title?: string;
  chip?: string;
  width?: number;
}

export const Image: FC<IImageProps> = ({ showGallery, image, title, chip, width }) => {
  return (
    <div className={s.Image} onClick={showGallery} style={ width ? {width: `${width}px`} : {} }>
      <img src={image.src} alt={image.alt} className={s.ImageEl} />
      { title && chip &&
        <div className={s.ImageLabel}>
          { title && <p className={s.ImageTitle}>{title}</p> }
          { chip && <p className={s.ImageChip}>{chip}</p> }
        </div>
      }
    </div>
  )
}
