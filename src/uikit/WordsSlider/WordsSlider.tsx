import { FC, useState, useEffect } from 'react';
import { CharsSlider } from '~/uikit';
import { randomIntFromInterval } from '~/helpers';
import s from './WordsSlider.module.scss';

export type Order = 'ordered' | 'mixed';

export interface IWordsSliderProps {
  from: string;
  to: string;
  randomMax?: number;
  transitionDuration?: number;
  timeout?: number;
  order?: Order;
  orderBasicDelay?: number;
}

export const WordsSlider: FC<IWordsSliderProps> = ({ 
  from, 
  to, 
  randomMax = 500, 
  transitionDuration = 1, 
  timeout = 0, 
  order = 'mixed',
  orderBasicDelay = 30
}) => {
  const [longerWord, setLongerWord] = useState('');

  useEffect(() => {
    setLongerWord(from.length > to.length ? from : to);
  }, []);

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
              maxRandomTimeout={randomMax}
              timeout={timeout + (i * orderBasicDelay + (order === 'ordered' ? randomIntFromInterval(0, randomMax) : 0))}
              transitionDuration={transitionDuration}
            />
          );
        })
      }
    </div>
  );
}