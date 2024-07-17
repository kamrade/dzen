import { FC } from 'react';
import s from './CharSlider.module.scss';

export type CharAnimateDirection = 'top' | 'bottom' | 'left' | 'right';

export interface ICharSliderProps {
  char: string;
  isVisible: boolean;
  animationDirection?: CharAnimateDirection;
}



export const CharSlider: FC<ICharSliderProps> = ({ char, isVisible, animationDirection = 'top' }) => {

  const getTransform = () => {

    let visibleDirection = ''
    let direction = '';
    switch(animationDirection) {
      case 'top':
        direction = 'translateY(-100%)';
        visibleDirection = 'translateY(0)';
        break;
      case 'bottom':
        direction = 'translateY(100%)';
        visibleDirection = 'translateY(0)';
        break;
      case 'left':
        direction = 'translateX(-100%)';
        visibleDirection = 'translateX(0)';
        break;
      case 'right':
        direction = 'translateX(100%)';
        visibleDirection = 'translateX(0)';
        break;
    }

    return isVisible ? visibleDirection : direction;
  }

  return (
    <span className={s.CharSlider}>
      <span className={s.CharOriginal}>{char}</span>
      <span 
        className={s.CharAnimation}
        style={{
          transform: getTransform(),
        }}
      >{char}</span>
    </span>
  )
}