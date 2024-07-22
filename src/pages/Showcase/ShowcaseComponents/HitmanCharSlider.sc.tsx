import { useState } from 'react';
import { Button, HitmanCharsSlider } from '~/uikit';

const phrase1 = 'Great design blends aesthetics with functionality seamlessly';
const phrase2 = 'Thoughtful design marries beauty and practicality effortless';

export const HitmanCharsSliderShowcase = () => {

  const [phrase, setPhrase] = useState(phrase1);

  const refresh = () => setPhrase((phrase) => phrase === phrase1 ? phrase2 : phrase1);

  return (
    <>
      <Button theme='primary' shape={'straight'} variant={'contained'} size={'md'} onClick={refresh}>Animate</Button>
      <HitmanCharsSlider text={phrase} />
    </>
  );
}