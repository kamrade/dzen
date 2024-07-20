/*
// Scrolls from char "from" to char "to"
*/

import { FC, useEffect, useState } from 'react';
import { randomIntFromInterval, getRandomChars } from '~/helpers';
import s from './CharsSlider.module.scss'

export interface ICharsSliderProps {
  charFrom: string;
  charTo: string;
  
  timeout?: number; // if strict timeout - ignore maxRandomTimeout
  maxRandomTimeout?: number; // max animation timeout in random mode (will be ignored if timeout is set)

  transitionDuration?: number; // just transition duration
  multipleRandomChars?: number; // how many random chars slide in from -> to anumation
}

export const CharsSlider: FC<ICharsSliderProps> = ({ 
  charFrom, 
  charTo, 

  timeout = 0, 
  maxRandomTimeout = 40,
  
  transitionDuration = 0.2,
  multipleRandomChars = 0
}) => {

  const animationTimeout = timeout ? timeout : randomIntFromInterval(0, maxRandomTimeout);

  const [animatorShift, setAnimatorShift] = useState('translateY(-100%)');
  const [isAnimated, setIsAnimated] = useState(true);
  
  const [showAnimator, setShowAnimator] = useState(false);
  const [showOriginal, setShowOriginal] = useState(true);

  const randomChars = getRandomChars(multipleRandomChars);

  useEffect(() => {
    setIsAnimated(false);
    setAnimatorShift('translateY(0)');
    setShowAnimator(true);
    setShowOriginal(false);
    
    setTimeout(() => {
      setIsAnimated(true);
      setAnimatorShift('translateY(-100%)');
    }, animationTimeout);

  }, [charFrom, charTo, animationTimeout]);

  const transitionEndHandler = () => {
    setShowAnimator(false);
    setShowOriginal(true);
  }

  return (
    <span className={s.CharsSlider}>
      
      <span className={`${s.CharOriginal} ${showOriginal ? s.CharOriginalVisible : ''}`} style={{
        display: showOriginal ? 'inline' : 'inline-block'
      }}>
        {charTo}
      </span>

      {showAnimator&&
        <span onTransitionEnd={transitionEndHandler} className={s.CharAnimationSlider} style={{
          transform: animatorShift,
          transition: isAnimated ? `transform ${transitionDuration}s ease-in-out` : 'none',
        }}>
          <span className={s.CharAnimationSliderItem}>{charFrom}</span>
          {randomChars.split('').map((randomChar, i) => (
            <span className={s.CharAnimationSliderItem} key={i}>{randomChar}</span>
          ))}
          <span className={s.CharAnimationSliderItemTo}>{charTo}</span>
        </span>
      }
    </span>
  );
}