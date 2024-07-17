import { useState } from 'react';
import { CharsSlider } from '~/uikit';
import s from './WordsSliderShowcase.module.scss';

export const WordsSliderShowcase = () => {
  
  const [fromWord, setFromWord] = useState('eMibnta');
  const [toWord, setToWord] = useState('Ambient');

  const clickHandler = () => {
    let f = fromWord;
    let t = toWord;
    setFromWord(t);
    setToWord(f);
    
  }

  return (
    <div onClick={clickHandler} className={s.WordSlider}>
      { fromWord.split('').map((char, i) =>
          <CharsSlider charFrom={fromWord[i]} charTo={toWord[i]} key={i} randomValue={400} />
        )
      }
    </div>
  );
}