import { FC, useEffect, useState, useRef } from 'react';
import s from './Typewriter.module.scss';
import { randomIntFromInterval } from '~/helpers';
import { useInterval } from '~/hooks';

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
  const intervalID = useRef<any>();

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
    
    intervalID.current = int1;
  }

  return <div><TypewriterEngine animatedText={animatedText} allText={text} /></div>
}

export interface ITypewriterEngineProps {
  animatedText: string;
  allText: string;
}

export const TypewriterEngine: FC<ITypewriterEngineProps> = ({ animatedText, allText }) => {

  const [ mainText, setMainText ] = useState<string[]>()
  const [ lastWord, setLastWord ] = useState<string>();
  const [ randomNumber, setRandomNumber ] = useState<number>();
  const intervalID = useRef<any>(null);

  const emp = () => {
    let totalWords = animatedText.split(' ').length;
    const randomN = randomIntFromInterval(0, totalWords - 2);
    setRandomNumber(randomN);
  }

  intervalID.current = useInterval(emp, 4000);  

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