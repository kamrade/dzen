import { FC, useState, useEffect } from 'react';
import s from './TextBlinds.module.scss';

interface ITextBlindsProps {
  text: string;
  percentage: number;
  background: string;
  foreground: string;
}

export const TextBlinds: FC<ITextBlindsProps> = ({ text, percentage, background, foreground }) => {

  const [foregroundText, setForegroundText] = useState<string>("");
  const [backgroundText, setBackgroundText] = useState<string>(text);

  useEffect(() => {
    setBackgroundText(text);
  }, [text]);

  useEffect(() => {
    const currentPercentage = percentage > 100 ? 100 : percentage;
    const lettersToShow = Math.round( (text.length / 100) * currentPercentage );
    setForegroundText(text.slice(0, lettersToShow));
  }, [percentage, text]);

  return (
    <div className={s.TextBlinds}>
      <div className={`${s.foregroundText} ${percentage > 100 ? s.foregroundMax : ''}`} style={{ color: foreground }}>
        {foregroundText.split('').map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
      <div className={s.backgroundText} style={{ color: background }}>
        {backgroundText}
      </div>
    </div>
  )
}
