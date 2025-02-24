import React, { useEffect, useRef } from "react";

interface AnimatedCircleProps {
  percentage: number;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ percentage }) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      // Рассчитываем угол в зависимости от процента
      const angle = (percentage / 100) * 360;
      const radius = 50;
      const centerX = 60;
      const centerY = 60;

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
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Фоновый круг */}
      <circle cx="60" cy="60" r="50" fill="#e0e0e0" />

      {/* Анимированный сектор */}
      <path
        ref={pathRef}
        fill="#007bff"

      />

      {/* Текст с процентом */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill="#007bff"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default AnimatedCircle;