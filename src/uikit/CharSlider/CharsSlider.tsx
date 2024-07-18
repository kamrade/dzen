import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './CharsSlider.module.scss'

export interface ICharsSliderProps {
  charFrom: string;
  charTo: string;
  randomValue?: number;
  transitionDuration?: number;
}

export const CharsSlider: FC<ICharsSliderProps> = ({ charFrom, charTo, randomValue = 40, transitionDuration = 0.2 }) => {


  const rand = randomIntFromInterval(0, randomValue);

  const [charFromShift, setCharFromShift] = useState('translateY(-100%)');
  const [charToShift, setCharToShift] = useState('translateY(0)');
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    setIsAnimated(false);
    setCharFromShift('translateY(0)');
    setCharToShift('translateY(100%)');
    
    setTimeout(() => {
      setIsAnimated(true);
      setCharFromShift('translateY(-100%)');
      setCharToShift('translateY(0)');
    }, rand);

  }, [charFrom, charTo]);

  return (
    <span className={s.CharsSlider}>
      
      <span className={s.CharOriginal}>
        {charFrom === ' ' ? '0' : charFrom}
      </span>

      <span className={s.CharFrom} style={{
        transform: charFromShift,
        transition: isAnimated ? `transform ${transitionDuration}s ease-in-out` : 'none',
      }}>
        {charFrom}
      </span>
      <span className={`${s.CharTo} ${isAnimated ? s.CharToAnimation : ''}`} style={{
        transform: charToShift,
        transition: isAnimated ? `transform ${transitionDuration}s ease-in-out` : 'none',
        animationDuration: `${isAnimated ? transitionDuration : 0}s`,
      }}>
        {charTo}
      </span>
    </span>
  );
}