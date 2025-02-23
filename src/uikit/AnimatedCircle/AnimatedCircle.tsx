import { FC, useRef } from 'react';

interface AnimatedCircleProps {
  test?: 'test';
}

export const AnimatedCircle: FC<AnimatedCircleProps> = ( props ) => {

  const circle = useRef<HTMLElement>();

  const animateCircle = () => {
    const circumference = 2 * Math.PI * 45;
    if (circle.current) {
      (circle.current as HTMLElement).style.strokeDasharray = circumference.toString();
      (circle.current).style.strokeDashoffset = "0";

      circle.current.animate([
        { strokeDashoffset: 0 },
        { strokeDashoffset: circumference }
      ], {
        duration: 2000,
        easing: "linear",
        fill: "forwards"
      });
    }


  }

  return (
    <div>
      <h1>Animated Circle</h1>
      <svg viewBox="0 0 100 100" width="200" height="200" ref={circle}>
        <circle
          id="circle"
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="10"
          fill="black"
        />
      </svg>

      <div>
        <button onClick={animateCircle}>Запустить анимацию</button>
      </div>

    </div>
  );
}
