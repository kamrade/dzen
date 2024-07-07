import { FC, useEffect, useState } from 'react';
import s from './Typewriter.module.scss';
import { randomIntFromInterval } from '~helpers';

export interface ITypewriterProps {
  text: string;
}

export const Typewriter: FC<ITypewriterProps> = ({ text }) => {

  const [ wordsArray, setWordsArray ] = useState<string[]>([]);
  // const [ fullAnimatedText, setFullAnimationText ] = useState('');
  const [ animatedText, setAnimatedText ] = useState('');

  // componentDidMount
  useEffect(() => setWordsArray( text.split(' ').reverse() ) , []);
  // componentDidMount and array is set
  useEffect(() => render(wordsArray, 40), [wordsArray]);

  const render = (phrase: string[], interval: number, previous: string = '') => {    
    const timeout = randomIntFromInterval(0, 100);
    const word = phrase.pop() || '';
    let part = previous;
    let currentLetter = 0;
    
    let int1 = setInterval(() => {
      if (word[currentLetter]) {
        part += word[currentLetter];
        setAnimatedText(part);
        currentLetter++;
      } else {
        clearInterval(int1);
        setTimeout(() => render(phrase, 10, part + ' '), timeout);
      }
    }, interval);
  }

  return (
    <div className={s.TypewriterWrapper}>
      <div className={s.TypewriterBase}>{text}</div>
      <div className={s.Typewriter}>
        <span>{animatedText}</span>
      </div>
    </div>
  )
}