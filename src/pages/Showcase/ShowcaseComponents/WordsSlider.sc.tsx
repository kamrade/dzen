import { useState } from 'react';
import { WordsSlider } from '~/uikit';

export const WordsSliderShowcase = () => {
  
  const [fromWord, setFromWord] = useState('Nuclear physics or quantum mechanics');
  const [toWord, setToWord] =     useState('Aeuralistic and neural networks');

  const clickHandler = () => {
    const f = fromWord;
    const t = toWord;
    setFromWord(t);
    setToWord(f);
  }

  return (
    <div onClick={clickHandler}>
      <WordsSlider 
        from={fromWord} 
        to={toWord} 
        maxRandomTimeout={200}
        orderBasicDelay={30}
        transitionDuration={0.25}
        order={'ordered'}
      />
    </div>
  );
}