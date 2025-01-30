import { 
  TextSwitcherBooleanShowcase, 
  CharSliderShowcase, 
  CharsSliderShowcase, 
  WordsSliderShowcase, 
  FullWordsSliderShowcase,
  MultipleCharsSliderShowcase,
  RandomCharsSliderShowcase,
  HitmanCharsSliderShowcase,
  ButtonShowcase,
  ModalDialogShowcase,
  GalleryShowcase
} from './ShowcaseComponents';

export function Showcase() {

  return (
    <div className={'ShowcasePage'}>
      <div className="container">

        <h1 className="mb-3">Showcase</h1>
        <hr/>

        <h5 className="mb-3">Gallery</h5>
        <GalleryShowcase/>
        <hr/>

        <h5 className="mb-3">Modal Dialog Showcase</h5>
        <ModalDialogShowcase/>
        <hr/>

        <h5 className="mb-3">Hitman Chars Slider</h5>
        <HitmanCharsSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Text Switcher Boolean</h5>
        <TextSwitcherBooleanShowcase/>
        <hr/>

        <h5 className="mb-3">Char Slider</h5>
        <CharSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Chars Slider</h5>
        <CharsSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Words Slider</h5>
        <WordsSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Full Words Slider</h5>
        <FullWordsSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Multiple Chars Slider Slider</h5>
        <MultipleCharsSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Random Chars Slider Slider</h5>
        <RandomCharsSliderShowcase/>
        <hr/>

        <h5 className="mb-3">Buttons Showcase</h5>
        <ButtonShowcase/>

      </div>
    </div>
  );
}
