import { FC, useEffect, useState } from 'react';
import s from './Typewriter.module.scss';
import { randomIntFromInterval } from '~helpers';


/*
  Есть массив слов
  Есть функция render которая принимает этот массив
  Эта функция берет первый элемент и рендерит его через setInterval
  Когда setInterval отработал все буквы в слове, его нужно обнулить
    и опять рекурсивно вызвать функцию, передав ей в качестве параметра
    этот же массив, но без того элемента, который уже отрендерен

  Каждый раз при запуске, функция render берет случайный timeout от 0 до 100
  
*/

export interface ITypewriterProps {
  text: string;
}

export const Typewriter: FC<ITypewriterProps> = ({ text }) => {
  const [animatedText, setAnimatedText] = useState('');
  const [visibleText, setVisibleText] = useState('');
  const [lastText, setLastText] = useState('');

  const render = (prevText: string, text: string, interval: number) => {
    let splitted = text;
    let splittedText = splitted.split('');
    let part = '';
    let currentLetter = 0;

    let int1 = setInterval(() => {
      if (splittedText[currentLetter]) {
        part += prevText + splittedText[currentLetter];
        setAnimatedText(part);
        currentLetter += 1;
      } else {
        clearInterval(int1);
      }
    }, interval);
  };

  useEffect(() => {
    text.split(' ').map((word, i) => {
      console.log(word);
      render(``, word, 10);
    })
    
  }, []);

  useEffect(() => {
    let words = animatedText.split(' ');
    let lastWord = words[words.length - 1];

    setLastText(lastWord);
    setVisibleText(animatedText.substring(0, (animatedText?.length || 0) - (lastWord?.length || 0)));
  }, [animatedText]);

  return (
    <div className={s.TypewriterWrapper}>
      <div className={s.TypewriterBase}>{text}</div>
      <div className={s.Typewriter}>
        <span>{visibleText}</span>
        <span style={{ opacity: '0.4' }}>{lastText}</span>
      </div>
    </div>
  );
};
