import { FC, useState, useEffect } from 'react';
import s from './TextBlinds.module.scss';

interface ITextBlindsProps {
  text: string;
}

export const TextBlinds: FC<ITextBlindsProps> = ({ text }) => {

  const [innerText, setInnerText] = useState<string>(text);

  useEffect(() => {
    setInnerText(text);
  }, [text]);

  return (
    <div className={s.TextBlinds}>
      {innerText}
    </div>
  )
}