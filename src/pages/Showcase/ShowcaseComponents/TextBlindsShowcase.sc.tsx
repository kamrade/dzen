import { useState } from 'react';
import { TextBlinds, Button } from '~/uikit';

export const TextBlindsShowcase = () => {

  const [ currentText, setCurrentText] = useState('Test 911');

  const randomizeText = () => {
    setCurrentText( Math.random().toString().substring(2) );
  }

  return (
    <div>
      <TextBlinds text={currentText}></TextBlinds>
      <Button onClick={randomizeText} theme='primary' shape={'straight'} variant={'contained'} size={'md'}>Animate</Button>
    </div>
  );
}