import { useState } from 'react';
import { CharsSlider } from '~/uikit';

export const CharsSliderShowcase = () => {
  
  const [charA, setCharA] = useState('X');
  const [charB, setCharB] = useState('Y');

  const clickHandler = () => {
    const a = charA;
    const b = charB;
    setCharA(b);
    setCharB(a);
  }

  return (
    <div className="mb-3 d-flex" onClick={clickHandler}>
      <CharsSlider charFrom={charA} charTo={charB} />
    </div>
  );
}