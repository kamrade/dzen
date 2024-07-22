import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './HitmanCharsSlider.module.scss';

export interface IHitmanCharsSliderProps {
  text: string;
  factor?: number;
}

export const HitmanCharsSlider: FC<IHitmanCharsSliderProps> = ({
  text,
  factor = 4,
}) => {

  const [currentText, setCurrentText] = useState(text);
  const randomArray = text.split('').map((el, i) => i);
  let counter = -1;

  const animate = () => {
    counter = counter + 1;
    
    if (counter % factor === 0) {
      const n = randomIntFromInterval(0, randomArray.length - 1);
      const m = randomArray[n];
      setCurrentText( (text) => text.substring(0, m) + '_' + text.substring(m + 1, text.length) );
      randomArray.splice(n, 1);
    }
    
    if (randomArray.length >= 1) {
      requestAnimationFrame(animate);
    }
  }

  useEffect(() => {
    animate();
  }, []);

  useEffect(() => setCurrentText(text), [text]);

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
