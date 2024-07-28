import { useState } from 'react';
import { Button, HitmanCharsSlider } from '~/uikit';

// const phrase1 = 'Great design blends aesthetics with functionality seamlessly';
// const phrase2 = 'Thoughtful design marries beauty and practicality effortless';

const phrase3 = 'User-friendly, intuitive, and enjoyable digital platforms';
const phrase4 = 'Optimize user satisfaction by improving the usability';

export const HitmanCharsSliderShowcase = () => {

  const [phrase, setPhrase] = useState(phrase3);

  const refresh = () => setPhrase((phrase) => phrase === phrase3 ? phrase4 : phrase3);

  return (
    <>
      <div className="mb-3">
        <Button theme='primary' shape={'straight'} variant={'contained'} size={'md'} onClick={refresh}>Animate</Button>
      </div>
      <HitmanCharsSlider text={phrase} />
    </>
  );
}