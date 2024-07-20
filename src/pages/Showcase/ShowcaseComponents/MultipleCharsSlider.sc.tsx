import { useState } from 'react';
import { CharsSlider } from '~/uikit';

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
    <div className={`mono mb-3 d-flex`} onClick={clickHandler}>
      <CharsSlider 
        charFrom={charA} 
        charTo={charB}
        
        multipleRandomChars={3}
        transitionDuration={0.5}
      />
    </div>
  );
}