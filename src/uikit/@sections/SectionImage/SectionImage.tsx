import { FC } from 'react';
import s from './SectionImage.module.scss';

export interface ISectionImageProps {
  src: string;
  alt: string;
}

export const SectionImage: FC<ISectionImageProps> = ({src, alt}) => (
  <img src={src} alt={alt} className={s.SectionImage} />
);
