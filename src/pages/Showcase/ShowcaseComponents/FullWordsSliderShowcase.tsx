import { useState } from 'react';
import { WordsSlider } from '~/uikit';

const phrases = [
  'Improving digital interactions for enhanced user experiences',
  'User-friendly, intuitive, and enjoyable digital platforms',
  'Optimize user satisfaction by improving the usability, accessibility, and efficiency of digital interfaces'
]

export const FullWordsSliderShowcase = () => {
  
  const [fromWord, setFromWord] = useState(phrases[0]);
  const [toWord, setToWord] =     useState(phrases[1]);
  const [counter, setCounter] = useState(2);

  const clickHandler = () => {
    let previousCounter = counter === 0 ? 2 : counter - 1;
    setFromWord( phrases[previousCounter] );
    setToWord( phrases[counter] );
    let nextCounter = counter === 2 ? 0 : counter + 1
    setCounter(nextCounter);
  }

  return (
    <div onClick={clickHandler}>
      <WordsSlider 
        from={fromWord} 
        to={toWord} 
        randomMax={20}
        orderBasicDelay={50}
        transitionDuration={0.15}
        order={'ordered'}
        fullWord={true}
        largest={phrases[2]}
      />
    </div>
  );
}