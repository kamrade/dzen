import { FC, useEffect } from 'react';
import s from './TextSwitcher.module.scss';

export interface ITextSwitcherBooleanValue {
  text: string;
  value: boolean;
}

export interface ITextSwitcherBooleanProps {
  values: ITextSwitcherBooleanValue[];
  setValue: (value: boolean) => void;
  currentValue: boolean;
}

export const TextSwitcherBoolean: FC<ITextSwitcherBooleanProps> = ({ values, setValue, currentValue }) => {

  const clickHandler = () => {
    setValue(!currentValue);
  }

  return (
    <div 
      className={`${s.TextSwitcher}  ${currentValue ? s.TextSitcherOff : ''}`} 
      onClick={clickHandler}
    >
      <div className={s.TextSwitcherContent}>
        <div 
          className={s.TextSwitcherScroller} 
          style={{ transform: `translateY(${(currentValue ? 1 : 0) * (-12)}px)`}} 
        >
          { values.map((val, i) => (
            <h6 className={s.TextSwitcherValue} key={i}>
              {val.text}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
}