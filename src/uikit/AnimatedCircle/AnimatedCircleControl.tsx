import React, { useState } from "react";
import AnimatedCircle from "./AnimatedCircle";

const AnimatedCircleConrol: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);
  const [radius, setRadius] = useState<number>(50); // Состояние для радиуса

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value));
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Анимированный круг по секторам</h1>
      <AnimatedCircle percentage={percentage} radius={radius} />
      <div style={{ marginTop: "20px" }}>
        <label>
          Процент:
          <input
            type="range"
            min="0"
            max="100"
            value={percentage}
            onChange={handleSliderChange}
            style={{ width: "300px" }}
          />
        </label>
      </div>
      <div style={{ marginTop: "20px" }}>
        <label>
          Радиус:
          <input
            type="range"
            min="10"
            max="100"
            value={radius}
            onChange={handleRadiusChange}
            style={{ width: "300px" }}
          />
        </label>
      </div>
      <p>Текущее значение: {percentage}%</p>
      <p>Текущий радиус: {radius}</p>
    </div>
  );
};

export default App;