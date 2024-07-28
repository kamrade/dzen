import { FC, ReactNode } from 'react';
import s from './Card.module.scss';

export interface ICardProps {
  children: ReactNode | ReactNode[];
  image: string;
  title: string;
}

export const Card: FC<ICardProps> = ({ children, image, title }) => {
  return (
    <div className={s.Card}>
      <div className={s.cardImageWrapper}>
        <img src={`${image}`} alt="" />
      </div>
      <h3 className={s.cardTitle}>{title}</h3>
      <div>{children}</div>
    </div>
  )
}
