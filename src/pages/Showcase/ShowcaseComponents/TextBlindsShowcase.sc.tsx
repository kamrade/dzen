import { useState, ChangeEvent } from 'react';
import { TextBlinds, Button } from '~/uikit';

export const TextBlindsShowcase = () => {

  const [ percentage, setPercentage ] = useState(0);
  const [ currentText, setCurrentText] = useState('Lorem ipsum dolor sit amet consectetur. Velit ac id morbi congue ultrices nec at. Egestas vel egestas pellentesque sapien fringilla vitae vel non vitae. Non tempus diam cras sed parturient ornare tincidunt donec ultrices. Duis nulla lacus magnis orci euismod mus cursus turpis.');

  const randomizeText = () => {
    setCurrentText( Math.random().toString().substring(2) );
  }

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPercentage(parseInt(event.target.value));
  }

  return (
    <div>
      <TextBlinds text={currentText} percentage={percentage}></TextBlinds>
      <div className={"pt-3"}>{percentage}</div>
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        onChange={handleSliderChange}
        style={{width: "300px"}}
      />
      <Button onClick={randomizeText} theme='primary' shape={'straight'} variant={'contained'}
              size={'md'}>Animate</Button>
    </div>
  );
}