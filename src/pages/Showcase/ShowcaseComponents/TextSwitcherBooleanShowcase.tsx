import { useState } from 'react';
import { TextSwitcherBoolean } from '~/uikit';

const switcherValues = [{
  text: 'Menu',
  value: true
}, {
  text: 'Close',
  value: false
}];

export const TextSwitcherBooleanShowcase = () => {

  const [value, setValue] = useState(false);

  return (
    <div className="mb-3">
      <TextSwitcherBoolean values={switcherValues} currentValue={value} setValue={setValue} />
    </div>
  );
}