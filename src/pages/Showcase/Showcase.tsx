import { TextSwitcherBooleanShowcase, CharSliderShowcase, CharsSliderShowcase, WordsSliderShowcase } from './ShowcaseComponents';

export function Showcase() {
  return (
    <div className={'ShowcasePage'}>
      <div className="container">
        <h1>Showcase</h1>
        <hr/>
        <TextSwitcherBooleanShowcase />
        <hr/>
        <CharSliderShowcase />
        <hr/>
        <CharsSliderShowcase />
        <hr/>
        <WordsSliderShowcase />
      </div>
    </div>
  );
}