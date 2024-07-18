import { useState } from 'react';
import { WordsSlider } from '~/uikit';

export const WordsSliderShowcase = () => {
  
  const [fromWord, setFromWord] = useState('Nuclear physics or quantum mechanics');
  const [toWord, setToWord] =     useState('Neuralistic and neural networks');

  const clickHandler = () => {
    let f = fromWord;
    let t = toWord;
    setFromWord(t);
    setToWord(f);
  }

  return (
    <div onClick={clickHandler}>
      <WordsSlider from={fromWord} to={toWord} randomMax={500} transitionDuration={0.5} />
    </div>
  );
}