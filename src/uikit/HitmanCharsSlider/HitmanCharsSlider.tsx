import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './HitmanCharsSlider.module.scss';

export interface IHitmanCharsSliderProps {
  text: string;
  speed?: number;
}

export const HitmanCharsSlider: FC<IHitmanCharsSliderProps> = ({ text, speed = 1 }) => {

  const [currentText, setCurrentText] = useState(text);
  const [controlArray, setControlArray] = useState<number[]>([]);

  const animator = (randomArray: number[], phase: number) => {
    for (let i = 0; i < speed; i++) {
      if (randomArray.length) {
        const n = randomIntFromInterval(0, randomArray.length - 1);
        const m = randomArray[n];
        setCurrentText( (t) => (t.substring(0, m))  +  (phase === 1 ? '_' : text[m])  +  (t.substring(m + 1, t.length)) );
        randomArray.splice(n, 1); // Not very nice, but convenient. Check it twice.
        setCurrentText(t => t.length > text.length ? t.slice(0, -1) : t);
        setCurrentText(t => t.length < text.length ? t + text[t.length] : t);
      }
    }
  }

  const updateControlArray = (animateIn: boolean) => {
    if (animateIn) {
      const rand = randomIntFromInterval(0, currentText.length - 1);
      setControlArray(controlArray => [ ...controlArray, rand ]);
    } else {
      setControlArray(controlArray => controlArray.filter((_el, i) => i !== 0));
    }
  }

  const animate1 = (randomArray: number[]) => {
    
    animator(randomArray, 1);    
    updateControlArray(true);
    if (randomArray.length >= text.length / 2) {
      requestAnimationFrame(() => animate1(randomArray));
    } else {
      const randomArray = text.split('').map((_el, i) => i);
      animate2(randomArray);
    }
  };

  const animate2 = (randomArray: number[]) => {
    animator(randomArray, 2);
    updateControlArray(false);
    if (randomArray.length >= 1) {
      requestAnimationFrame(() => animate2(randomArray));
    } else {
      setControlArray([]);
    }
  }

  // START!
  useEffect(() => {
    const randomArray  = text.split('').map((_el, i) => i);
    animate1( randomArray );
  }, [text]);

  // useEffect(() => console.log(controlArray), [controlArray]);

  return (
    <div className={s.HitmanCharsSlider}>
      {currentText.split('').map((word, i) => {
        return (
          <span key={i} className={`${(controlArray.includes(i) || controlArray.includes(i-1)) ? s.Bold : ''}`}>
            {word}
          </span>
        );
      })}
    </div>
  )
}
