import { randomIntFromInterval } from './random-int-from-interval';
import { allChars } from '~/consts';

export const getRandomChar = () => {
  const length = allChars.length;
  const randomIndex = randomIntFromInterval(0, length - 1 );
  return allChars[randomIndex];
}

export const getRandomChars = (count: number) => {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += getRandomChar();
  }
  return result;
}