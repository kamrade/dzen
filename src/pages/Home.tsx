import s from './Home.module.scss';
import { Button } from '~/uikit';

export function Home() {
  return (
    <div className={s.HomePage}>
      <div className="container">
        <div className={s.Slide}>

          <Button>Test 1</Button>{' '}
          <Button theme='secondary' size={'lg'}>Large Secondary</Button>{' '}
          <Button theme={'primary'} size={'lg'}>Large Primary</Button>{' '}

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