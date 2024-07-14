import { useState, useEffect } from 'react';
import { TextSwitcherBoolean } from "~/uikit";

export function Showcase() {

  const switcherValues = [{
    text: 'Menu',
    value: true
  }, {
    text: 'Close',
    value: false
  }];

  const [value, setValue] = useState(false);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div className={'ShowcasePage'}>
      <div className="container">

        <h1>Showcase</h1>
        <TextSwitcherBoolean values={switcherValues} currentValue={value} setValue={setValue} />

      </div>
    </div>
  );
}