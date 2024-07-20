import { useState} from 'react';
import { WordsSlider } from '~/uikit';

const phrases = [
  'Improving digital interactions for enhanced user experiences',
  'User-friendly, intuitive, and enjoyable digital platforms',
  'Optimize user satisfaction by improving the usability'
];

export const RandomCharsSliderShowcase = () => {

  const [fromText, setFromText] = useState(phrases[0]);
  const [toText, setToText] = useState(phrases[1]);
  const [counter, setCounter] = useState(2);

  const clickHandler = () => {
    let previousCounter = counter === 0 ? 2 : counter - 1;
    setFromText( phrases[previousCounter] );
    setToText( phrases[counter] );
    let nextCounter = counter === 2 ? 0 : counter + 1
    setCounter(nextCounter);
  }

  return (
    <div onClick={clickHandler}>
      <WordsSlider 
        from={fromText} 
        to={toText} 
        
        maxRandomTimeout={1200}
        orderBasicDelay={10}
        transitionDuration={0.2}
        order={'ordered'}
        fullWord={false}
        
        
        largest={phrases[0]}
        multipleRandomChars={2}
      />
    </div>
  )
}