import { useState } from 'react';
import { CharSlider } from '~/uikit';

export const CharSliderShowcase = () => {
  
  const [charVisible, setCharVisible] = useState(true);

  return (
    <div className="mb-3 d-flex" onClick={() => setCharVisible((isVisible) => !isVisible)}>
      <CharSlider char='A' isVisible={charVisible} />
    </div>
  );
}