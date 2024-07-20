import { randomIntFromInterval } from './random-int-from-interval';

const allChars = "1234567890_+-=QWERTYUIOP{}[]ASDFGHJKL:|;~ZXCVBNM<>?";

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