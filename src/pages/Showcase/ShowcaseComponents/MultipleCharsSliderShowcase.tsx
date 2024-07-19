import { useState } from 'react';
import { CharsSlider } from '~/uikit';
import s from './MultipleCharsSliderShowcase.module.scss';

export const MultipleCharsSliderShowcase = () => {
  
  const [charA, setCharA] = useState('X');
  const [charB, setCharB] = useState('Y');

  const clickHandler = () => {
    let a = charA;
    let b = charB;
    setCharA(b);
    setCharB(a);
  }

  return (
    <div className={`${s.MultipleCharsSliderShowcase} mb-3 d-flex`} onClick={clickHandler}>
      <CharsSlider 
        charFrom={charA} 
        charTo={charB}
        multipleRandomChars={5}
        transitionDuration={1}
      />
    </div>
  );
}