import React, { useEffect, useRef } from "react";

interface AnimatedCircleProps {
  percentage: number;
  radius: number;
  color: string;
  background: string;
  opacity: number;
}

export const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ percentage, radius, color, background, opacity }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      // Рассчитываем угол в зависимости от процента
      const angle = (percentage / 100) * 360;
      const centerX = radius;
      const centerY = radius;

      // Начальная точка (12 часов)
      const startX = centerX;
      const startY = centerY - radius;

      // Конечная точка на окружности
      const endX = centerX + radius * Math.sin((angle * Math.PI) / 180);
      const endY = centerY - radius * Math.cos((angle * Math.PI) / 180);

      // Флаг для больших углов (больше 180 градусов)
      const largeArcFlag = angle > 180 ? 1 : 0;

      // Команда для path
      const pathData = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

      pathRef.current.setAttribute("d", pathData);
    }
  }, [percentage]);

  return (
    <svg width={radius*2} height={radius*2} viewBox={`0 0 ${radius*2} ${radius*2}`}>
      {/* Фоновый круг */}
      <circle cx={radius} cy={radius} r={radius} fill={percentage >= 100 ? color : background} opacity={percentage >= 100 ? opacity : '1'} />

      {/* Анимированный сектор */}
      <path
        ref={pathRef}
        fill={color}
        opacity={percentage >= 100 ? 0 : opacity}
      />

      <circle cx={radius} cy={radius} r="60" fill="#F1F6FD"/>

    </svg>
  );
};
