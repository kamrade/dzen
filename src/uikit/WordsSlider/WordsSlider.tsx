import { FC, useState, useEffect } from 'react';
import { CharsSlider } from '~/uikit';
import s from './WordsSlider.module.scss';

export interface IWordsSliderProps {
  from: string;
  to: string;
  randomMax?: number;
  transitionDuration?: number;
}

export const WordsSlider: FC<IWordsSliderProps> = ({ from, to, randomMax = 500, transitionDuration = 0.5 }) => {
  const [longerWord, setLongerWord] = useState('');

  useEffect(() => {
    setLongerWord(from.length > to.length ? from : to);
  }, [])

  return (
    <div className={s.WordSlider}>
      { longerWord.split('').map((_char, i) => {
          let f = from[i] || ' ';
          let t = to[i] || ' ';
          return (
            <CharsSlider 
              charFrom={f} 
              charTo={t} 
              key={i} 
              randomValue={randomMax} 
              transitionDuration={transitionDuration}
            />
          );
        })
      }
    </div>
  );
}