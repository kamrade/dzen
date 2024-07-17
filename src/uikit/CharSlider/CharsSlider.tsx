import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './CharsSlider.module.scss'

export interface ICharsSliderProps {
  charFrom: string;
  charTo: string;
  randomValue?: number;
}

export const CharsSlider: FC<ICharsSliderProps> = ({ charFrom, charTo, randomValue = 40 }) => {


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
        {charFrom}
      </span>
      <span className={s.CharFrom} style={{
        transform: charFromShift,
        transition: isAnimated ? 'transform .2s linear' : 'none'
      }}>
        {charFrom}
      </span>
      <span className={s.CharTo} style={{
        transform: charToShift,
        transition: isAnimated ? 'transform .3s ease-in-out' : 'none'
      }}>
        {charTo}
      </span>
    </span>
  );
}