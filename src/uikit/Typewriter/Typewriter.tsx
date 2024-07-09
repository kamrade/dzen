import { FC, useEffect, useState } from 'react';
import s from './Typewriter.module.scss';
import { randomIntFromInterval } from '~helpers';
import { useInterval } from '~hooks';

export interface ITypewriterProps {
  text: string;
  minTimeout?: number;
  maxTimeout?: number;
  defaultInterval?: number;
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

  return <TypewriterEngine animatedText={animatedText} allText={text} />
}

export interface ITypewriterEngineProps {
  animatedText: string;
  allText: string;
}

export const TypewriterEngine: FC<ITypewriterEngineProps> = ({ animatedText, allText }) => {

  const [ mainText, setMainText ] = useState<string[]>()
  const [ lastWord, setLastWord ] = useState<string>();
  const [ randomNumber, setRandomNumber ] = useState<number>();

  const emp = () => {
    let totalWords = animatedText.split(' ').length;
    const randomN = randomIntFromInterval(0, totalWords - 2);
    setRandomNumber(randomN);
  }

  useInterval(emp, 4000);

  useEffect(() => {
    let allWords = animatedText.split(' ');
    let lastWord = allWords[allWords.length - 1];
    allWords.pop();
    let mainWords = allWords;

    setMainText( mainWords );
    setLastWord( lastWord );
  }, [animatedText]);

  return (
    <div className={s.TypewriterWrapper}>
      <div className={s.TypewriterBase}>{allText}</div>
      <div className={s.Typewriter}>
        {mainText?.map((word, i) => (
          <span key={i} className={randomNumber === i ? 'random' : ''}>
            {word}{' '}
          </span>
        ))}
        <span>{lastWord}</span>
      </div>
    </div>
  )
}