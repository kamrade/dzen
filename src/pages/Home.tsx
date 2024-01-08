import s from './Home.module.scss';
import { Button } from '~/uikit';

export function Home() {
  return (
    <div className={s.HomePage}>
      <div className="container">
        <div className={s.Slide}>

          <div className="mb-3">
            <Button theme='primary' shape={'straight'} variant={'text'} size={'lg'}>Primary Text</Button>{' '}
            <Button theme='primary' shape={'straight'} variant={'contained'} size={'lg'}>Primary Contained</Button>{' '}
            <Button theme='primary' shape={'straight'} variant={'outlined'} size={'lg'}>Primary Outlined</Button>{' '}
          </div>

          <div className="mb-3">
            <Button theme='primary' shape={'rounded'} variant={'text'} size={'sm'}>Primary Text</Button>{' '}
            <Button theme='primary' shape={'rounded'} variant={'contained'} size={'sm'}>Primary Contained</Button>{' '}
            <Button theme='primary' shape={'rounded'} variant={'outlined'} size={'sm'}>Primary Outlined</Button>{' '}
          </div>

          <div className="mb-3">
            <Button theme='secondary' variant={'text'} size={'lg'}>Secondary Text</Button>{' '}
            <Button theme='secondary' variant={'contained'} size={'lg'}>Secondary Contained</Button>{' '}
            <Button theme='secondary' variant={'outlined'} size={'lg'}>Secondary Outlined</Button>{' '}
          </div>

          <div className="mb-3">
            <Button shape={'circled'} theme='primary' variant={'text'} size={'lg'}>Secondary Text</Button>{' '}
            <Button shape={'circled'} theme='primary' variant={'contained'} size={'lg'}>Secondary Contained</Button>{' '}
            <Button shape={'circled'} theme='primary' variant={'outlined'} size={'lg'}>Secondary Outlined</Button>{' '}
          </div>

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
