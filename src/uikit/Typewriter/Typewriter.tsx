import { FC, useEffect, useState } from 'react';
import s from './Typewriter.module.scss';
import { randomIntFromInterval } from '~helpers';

export interface ITypewriterProps {
  text: string;
  minTimeout: number;
  maxTimeout: number;
  defaultInterval: number;
}

export const Typewriter: FC<ITypewriterProps> = ({ 
  text, 
  minTimeout = 0, 
  maxTimeout = 100,
  defaultInterval = 40
}) => {

  const [ wordsArray, setWordsArray ] = useState<string[]>([]);
  const [ animatedText, setAnimatedText ] = useState('');

  useEffect(() => setWordsArray( text.split(' ').reverse() ) , []);
  useEffect(() => render(wordsArray, defaultInterval), [wordsArray]);

  const render = (phrase: string[], interval: number, previous: string = '') => {    
    const timeout = randomIntFromInterval(minTimeout, maxTimeout);
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
        setTimeout(() => render(phrase, defaultInterval, part + ' '), timeout);
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