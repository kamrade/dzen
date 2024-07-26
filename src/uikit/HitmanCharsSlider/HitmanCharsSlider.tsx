import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './HitmanCharsSlider.module.scss';
import { getRandomChar } from '~/helpers';

export interface IHitmanCharsSliderProps {
  text: string;
  factor?: number;
  speed?: number;
}

export const HitmanCharsSlider: FC<IHitmanCharsSliderProps> = ({ text, factor = 1, speed = 10 }) => {

  const [currentText, setCurrentText] = useState(text);

  const animator = (randomArray: number[], phase: number) => {
    const n = randomIntFromInterval(0, randomArray.length - 1);
    const m = randomArray[n];
    setCurrentText( (t) => {
      const firstPart = t.substring(0, m);
      const secondPart = t.substring(m + 1, t.length);
      const newChar = phase === 1 ? '_' : text[m];
      return firstPart + newChar + secondPart;
    });
    return n;
  }

  const animate2 = (counter: number, randomArray: number[]) => {

    if (counter % factor === 0) {
      const n = animator(randomArray, 2);
      randomArray.splice(n, 1);
    }
    counter += 1;

    if (randomArray.length >= 1) {
      requestAnimationFrame(() => animate2(counter, randomArray));
    }
  }
  
  const animate1 = (counter: number, randomArray: number[]) => {

    if (counter % factor === 0) {
      const n = animator(randomArray, 1);
      randomArray.splice(n, 1);
    }
    counter += 1;

    if (randomArray.length >= text.length / 2) {
      requestAnimationFrame(() => animate1(counter, randomArray));
    } else {
      const randomArray = text.split('').map((_el, i) => i);
      animate2(counter, randomArray);
    }

  }

  useEffect(() => {
    console.log('old text:', currentText, currentText.length);
    console.log('new text:', text, text.length);
    let counter = 0;
    const randomArray = text.split('').map((_el, i) => i);
    animate1(counter, randomArray);
  }, [text]);

  return (
    <div className={s.HitmanCharsSlider}>
      {currentText.split('').map((word, i) => {
        return (
          <span key={i}>
            {word}
          </span>
        );
      })}
    </div>
  )
}
