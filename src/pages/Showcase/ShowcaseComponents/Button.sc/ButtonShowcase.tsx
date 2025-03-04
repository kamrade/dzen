import { ReactNode, useState } from 'react';
// import { Button } from '@kamrade/react-dynamic-button';
import { Button } from '~/uikit';
import { RiAddCircleFill, RiArrowRightCircleLine } from "react-icons/ri";
import s from './ButtonShowcase.module.scss';

export function ButtonShowcase() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const customLoader: ReactNode = <span className={s.CustomLoader}></span>;
  const prefix: ReactNode = <RiAddCircleFill />
  const suffix: ReactNode = <RiArrowRightCircleLine />

  return (
    <div className={'ShowcasePage'}>

      <div className="mb-3">
        <Button onClick={() => console.log('Knock!')} style={{ color: 'green' }} theme='primary' shape={'straight'} variant={'text'} size={'md'}>Primary Text Large</Button>{' '}
        <Button theme='primary' shape={'straight'} variant={'contained'} size={'md'}>Primary Contained Large</Button>{' '}
        <Button prefixIcon={prefix} theme='primary' shape={'straight'} variant={'outlined'} size={'md'}>Primary Outlined Large</Button>{' '}
      </div>

      <div className="mb-3">
        <Button theme='primary' shape={'rounded'} variant={'text'} size={'sm'}>Primary Text Small</Button>{' '}
        <Button theme='primary' shape={'rounded'} variant={'contained'} size={'sm'}>Primary Contained Small</Button>{' '}
        <Button theme='primary' shape={'rounded'} variant={'outlined'} size={'sm'}>Primary Outlined Small</Button>{' '}
      </div>

      <div className="mb-3">
        <Button theme='primary' variant={'text'} size={'lg'}>Primary Text Large</Button>{' '}
        <Button theme='secondary' variant={'contained'} size={'lg'}>Secondary Contained Large</Button>{' '}
        <Button suffixIcon={suffix} theme='secondary' variant={'outlined'} size={'lg'}>Secondary Outlined Large</Button>{' '}
      </div>

      <div className="mb-3">
        <Button shape={'circled'} theme='primary' variant={'text'} size={'lg'}>Secondary Text Large</Button>{' '}
        <Button shape={'circled'} theme='primary' variant={'contained'} size={'lg'}>Secondary Contained Large</Button>{' '}
        <Button suffixIcon={suffix} shape={'circled'} theme='primary' variant={'outlined'} size={'lg'}>Secondary Outlined Large</Button>{' '}
      </div>

      <div className="mb-3">
        <Button shape={'rounded'} theme='primary' variant={'text'} size={'huge'}>Secondary Text Huge</Button>{' '}
        <Button shape={'rounded'} theme='primary' variant={'contained'} size={'huge'}>Secondary Contained Huge</Button>{' '}
        <Button prefixIcon={prefix} shape={'rounded'} theme='primary' variant={'outlined'} size={'huge'}>Secondary Outlined Huge</Button>{' '}
      </div>

      <div className="mb-3">
        <Button theme='primary' shape={'circled'} variant={'text'} size={'sm'}>Primary Text</Button>{' '}
        <Button theme='primary' shape={'circled'} variant={'contained'} size={'sm'}>Primary Contained</Button>{' '}
        <Button theme='primary' shape={'circled'} variant={'outlined'} size={'sm'}>Primary Outlined</Button>{' '}
      </div>

      <div className="mb-3" style={{ width: '300px' }}>
        <Button disabled={true} block theme='secondary' shape={'rounded'} variant={'contained'} size={'lg'}>Primary Text</Button>{' '}
      </div>

      <div className="mb-1" style={{ display: 'flex', gap: '4px' }}>
        <input type="checkbox" id="set_loading" onChange={(e) => setIsLoading(e.target.checked)}/>
        <label htmlFor="set_loading">
          Set loading
        </label>
      </div>

      <div className="mb-3">
        <Button customLoader={customLoader} isLoading={isLoading} theme='primary' shape={'circled'} variant={'contained'} size={'lg'}>Loading</Button>{' '}
        <Button isLoading={isLoading} theme='primary' shape={'circled'} variant={'contained'} size={'lg'}>Some long text for loading button</Button>{' '}
      </div>

      <div className='mb-3 p-3' style={{ borderRadius: '12px', border: '1px solid lightgray', width: '40%' }}>
        <form onSubmit={(e) => {
          e.preventDefault();
          alert('Form submitted');
        }}>
          <h1>Form</h1>
          <Button type='submit' theme='primary' shape={'rounded'} variant={'contained'} size={'md'}>Submit</Button>{' '}
        </form>
      </div>

    </div>
  );
}