import React, { useEffect, useRef } from "react";

interface AnimatedCircleProps {
  percentage: number;
}

const AnimatedCircle: React.FC<AnimatedCircleProps> = ({ percentage }) => {
  const pathRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const radius = 50;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percentage / 100) * circumference;
      pathRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
      pathRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [percentage]);

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      {/* Фоновый круг */}
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#e0e0e0"
        strokeWidth="10"
      />
      {/* Анимированный круг */}
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#007bff"
        strokeWidth="10"
        strokeLinecap="round"
        ref={pathRef}
        style={{
          transition: "stroke-dashoffset 0.5s ease-in-out",
          transform: "rotate(-90deg)",
          transformOrigin: "center",
        }}
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