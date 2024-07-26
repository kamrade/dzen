import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './HitmanCharsSlider.module.scss';
import { getRandomChar } from '~/helpers';

export interface IHitmanCharsSliderProps {
  text: string;
  speed?: number;
}

export const HitmanCharsSlider: FC<IHitmanCharsSliderProps> = ({ text, speed = 2 }) => {

  const [currentText, setCurrentText] = useState(text);

  const animator = (randomArray: number[], phase: number) => {
    for (let i = 0; i < speed; i++) {
      const n = randomIntFromInterval(0, randomArray.length - 1);
      const m = randomArray[n];
      setCurrentText( (t) => (t.substring(0, m))  +  (phase === 1 ? '_' : text[m])  +  (t.substring(m + 1, t.length)) );
      randomArray.splice(n, 1); // Not very nice, but convenient. Check it twice.
    }
  }

  const animate1 = (randomArray: number[]) => {
    animator(randomArray, 1);

    if (randomArray.length >= text.length / 2) {
      requestAnimationFrame(() => animate1(randomArray));
    } else {
      const randomArray = text.split('').map((_el, i) => i);
      animate2(randomArray);
    }
  }

  const animate2 = (randomArray: number[]) => {
    animator(randomArray, 2);
    if (randomArray.length >= 1) {
      requestAnimationFrame(() => animate2(randomArray));
    }
  }

  useEffect(() => animate1( text.split('').map((_el, i) => i) ), [text]);

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
