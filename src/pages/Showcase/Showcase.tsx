import { 
  TextSwitcherBooleanShowcase, 
  CharSliderShowcase, 
  CharsSliderShowcase, 
  WordsSliderShowcase, 
  FullWordsSliderShowcase,
  MultipleCharsSliderShowcase,
  RandomCharsSliderShowcase
} from './ShowcaseComponents';

export function Showcase() {
  return (
    <div className={'ShowcasePage'}>
      <div className="container">
        
        <h1 className="mb-3">Showcase</h1>
        <hr/>

        <div className="row">
          <div className="col-md-12"><h5>Text Switcher Boolean</h5></div>
          <div className="col-md-12"><TextSwitcherBooleanShowcase /></div>
        </div>

        <hr/>
        
        <div className="row">
          <div className="col-md-12"><h5>Char Slider</h5></div>
          <div className="col-md-12"><CharSliderShowcase /></div>
        </div>

        <hr/>
        
        <div className="row">
          <div className="col-md-12"><h5>Chars Slider</h5></div>
          <div className="col-md-12"><CharsSliderShowcase /></div>
        </div>

        <hr/>
        
        <div className="row">
          <div className="col-md-12"><h5>Words Slider</h5></div>
          <div className="col-md-12"><WordsSliderShowcase /></div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-12"><h5>Full Words Slider</h5></div>
          <div className="col-md-12"><FullWordsSliderShowcase /></div>
        </div>

        <hr/>

        <div className="row">
          <div className="col-md-12"><h5>Multiple Chars Slider Slider</h5></div>
          <div className="col-md-12"><MultipleCharsSliderShowcase /></div>
        </div>

        <hr/>
        
        <div className="row">
          <div className="col-md-12"><h5>Random Chars Slider Slider</h5></div>
          <div className="col-md-12"><RandomCharsSliderShowcase /></div>
        </div>
        
      </div>
    </div>
  );
}