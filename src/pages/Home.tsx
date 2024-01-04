import s from './Home.module.scss';
import { Button } from '~/uikit';

export function Home() {
  return (
    <div className={s.HomePage}>
      <div className="container">
        <div className={s.Slide}>

          <Button theme='primary'>Test</Button>

        </div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
      </div>
    </div>
  );
}