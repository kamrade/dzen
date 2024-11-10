import { FC } from 'react';
import s from './Footer.module.scss';

export interface IFooterProps {
  version?: number;
}

export const Footer: FC<IFooterProps> = () => {
  return (
    <footer className={s.Footer}>
      <div className="container">
        denis.michailov@gmail.com
      </div>
    </footer>
  );
}
