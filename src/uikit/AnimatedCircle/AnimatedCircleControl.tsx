import React, { useState } from "react";
import {AnimatedCircle} from "./AnimatedCircle";

export const AnimatedCircleControl: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPercentage(Number(event.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <AnimatedCircle percentage={percentage} radius={200} color={"#EA7871"} background={"transparent"} opacity={0.5} />
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