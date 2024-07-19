import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval } from '~/helpers';
import s from './CharsSlider.module.scss'

export interface ICharsSliderProps {
  charFrom: string;
  charTo: string;
  
  timeout?: number; // if strict timeout - ignore maxRandomTimeout
  maxRandomTimeout?: number;

  transitionDuration?: number;
}

export const CharsSlider: FC<ICharsSliderProps> = ({ charFrom, charTo, maxRandomTimeout = 40, timeout = 0, transitionDuration = 0.2 }) => {

  const animationTimeout = timeout ? timeout : randomIntFromInterval(0, maxRandomTimeout);

  const [charFromShift, setCharFromShift] = useState('translateY(-100%)');
  const [charToShift, setCharToShift] = useState('translateY(0)');
  const [isAnimated, setIsAnimated] = useState(true);

  const [showOriginal, setShowOriginal] = useState(true);
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  useEffect(() => {
    setIsAnimated(false);
    setCharFromShift('translateY(0)');
    setCharToShift('translateY(100%)');
    setShowFrom(true);
    setShowTo(true);
    setShowOriginal(false);
    
    setTimeout(() => {
      setIsAnimated(true);
      setCharFromShift('translateY(-100%)');
      setCharToShift('translateY(0)');
    }, animationTimeout);

  }, [charFrom, charTo]);

  const fromTransitionEndHandler = () => {
    setShowFrom(false);
  }

  const toTransitionEndHandler = () => {
    setShowTo(false);
    setShowOriginal(true);
  }


  return (
    <span className={s.CharsSlider}>
      
      <span className={`${s.CharOriginal} ${showOriginal ? s.CharOriginalVisible : ''}`} style={{
        display: showOriginal ? 'inline' : 'inline-block'
      }}>
        {charTo}
      </span>

      { showFrom && 
        <span onTransitionEnd={fromTransitionEndHandler} className={s.CharFrom} style={{
          transform: charFromShift,
          transition: isAnimated ? `transform ${transitionDuration}s ease-in-out` : 'none',
        }}>
          {charFrom}
        </span>
      }

      { showTo &&
        <span onTransitionEnd={toTransitionEndHandler} className={`${s.CharTo} ${isAnimated ? s.CharToAnimation : ''}`} style={{
          transform: charToShift,
          transition: isAnimated ? `transform ${transitionDuration}s ease-in-out` : 'none',
          animationDuration: `${isAnimated ? transitionDuration : 0}s`,
        }}>
          {charTo}
        </span>
      }

    </span>
  );
}