import { randomIntFromInterval } from './random-int-from-interval';
import { allChars } from '~/consts';

export const getRandomChar = (charSet = allChars) => {
  const length = charSet.length;
  const randomIndex = randomIntFromInterval(0, length - 1 );
  return charSet[randomIndex];
}

export const getRandomChars = (count: number) => {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += getRandomChar();
  }
  return result;
}