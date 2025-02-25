import { FC, useState, useEffect } from 'react';
import s from './TextBlinds.module.scss';

interface ITextBlindsProps {
  text: string;
  percentage: number;
}

export const TextBlinds: FC<ITextBlindsProps> = ({ text, percentage }) => {

  const [foregroundText, setForegroundText] = useState<string>("");
  const [backgroundText, setBackgroundText] = useState<string>(text);

  useEffect(() => {
    setBackgroundText(text);
  }, [text]);

  useEffect(() => {
    const lettersToShow = Math.round( (text.length / 100) * percentage);
    setForegroundText(text.slice(0, lettersToShow));
  }, [percentage, text]);

  return (
    <div className={s.TextBlinds}>
      <div className={s.foregroundText}>
        {foregroundText}
      </div>
      <div className={s.backgroundText}>
        {backgroundText}
      </div>
    </div>
  )
}