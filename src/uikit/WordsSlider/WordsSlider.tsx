import { FC, useState, useEffect } from 'react';
import { CharsSlider } from '~/uikit';
import { randomIntFromInterval } from '~/helpers';
import s from './WordsSlider.module.scss';

export type Order = 'ordered' | 'mixed';

export interface IWordsSliderProps {
  from: string;
  to: string;
  
  maxRandomTimeout?: number;
  timeout?: number;

  transitionDuration?: number;
  order?: Order;
  orderBasicDelay?: number;
  fullWord?: boolean;
  largest?: string;

  multipleRandomChars?: number;
}

export const WordsSlider: FC<IWordsSliderProps> = ({ 
  from, 
  to, 
  
  maxRandomTimeout = 500, 
  timeout = 0, 

  transitionDuration = 1, 
  
  order = 'mixed',
  orderBasicDelay = 30,
  fullWord = false,
  largest = '',
  multipleRandomChars = 0
}) => {
  const [longerWord, setLongerWord] = useState('');

  let counter = 0;

  useEffect(() => {
    if (largest) {
      setLongerWord(largest);
    } else {
      setLongerWord(from.length > to.length ? from : to);
    }
  }, []);

  return (
    <div className={s.WordSlider}>
      { !fullWord && longerWord.split('').map((_char, i) => {
          let f = from[i] || ' ';
          let t = to[i] || ' ';

          return (
            <CharsSlider
              charFrom={f}
              charTo={t}
              key={i}
              maxRandomTimeout={maxRandomTimeout}
              // -> If timeout is set maxRandomTimeout will be ignored
              timeout={timeout + (i * orderBasicDelay + (order === 'ordered' ? randomIntFromInterval(0, maxRandomTimeout) : 0))}
              transitionDuration={transitionDuration}

              multipleRandomChars={multipleRandomChars}
            />
          );
        })
      }

      { fullWord && longerWord.split(' ').map((word, i) => {

          let realWord = word + ' ';
          
          return realWord.split('').map((_char, j) => {
            
            let f = from[counter] || ' ';
            let t = to[counter] || ' ';
            
            counter = counter + 1;

            return (
              <CharsSlider
                charFrom={f}
                charTo={t}
                key={counter}
                maxRandomTimeout={maxRandomTimeout}
                
                // -> If timeout is set maxRandomTimeout will be ignored
                timeout={timeout + (i * orderBasicDelay + (order === 'ordered' ? randomIntFromInterval(0, randomMax) : 0))}
                transitionDuration={transitionDuration}
                
                multipleRandomChars={multipleRandomChars}
              />
            );
          });

        })
      }
    </div>
  );
}