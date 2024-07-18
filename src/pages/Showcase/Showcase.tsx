import { TextSwitcherBooleanShowcase, CharSliderShowcase, CharsSliderShowcase, WordsSliderShowcase, FullWordsSliderShowcase } from './ShowcaseComponents';

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
        <hr/>
        <FullWordsSliderShowcase />
      </div>
    </div>
  );
}