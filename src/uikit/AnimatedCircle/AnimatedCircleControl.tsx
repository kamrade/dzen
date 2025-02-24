import React, { useState } from "react";
import AnimatedCircle from "./AnimatedCircle";

const AnimatedCircleControl: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Анимированный круг</h1>
      <AnimatedCircle percentage={percentage} />
      <div style={{ marginTop: "20px" }}>
        <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={handleSliderChange}
          style={{ width: "300px" }}
        />
      </div>
      <p>Текущее значение: {percentage}%</p>
    </div>
  );
};

export default AnimatedCircleControl;