import { useState } from 'react';
import { WordsSlider } from '~/uikit';

const phrases = [
  'Improving digital interactions for enhanced user experiences',
  'User-friendly, intuitive, and enjoyable digital platforms',
  'Optimize user satisfaction by improving the usability'
]

export const FullWordsSliderShowcase = () => {
  
  const [fromWord, setFromWord] = useState(phrases[0]);
  const [toWord, setToWord] =     useState(phrases[1]);
  const [counter, setCounter] = useState(2);

  const clickHandler = () => {
    const previousCounter = counter === 0 ? 2 : counter - 1;
    setFromWord( phrases[previousCounter] );
    setToWord( phrases[counter] );
    const nextCounter = counter === 2 ? 0 : counter + 1
    setCounter(nextCounter);
  }

  return (
    <div onClick={clickHandler}>
      <WordsSlider 
        from={fromWord} 
        to={toWord} 
        
        maxRandomTimeout={1000}
        orderBasicDelay={20}
        transitionDuration={0.25}
        order={'mixed'}
        fullWord={false}
        
        largest={phrases[0]}
        multipleRandomChars={2}
      />
    </div>
  );
}