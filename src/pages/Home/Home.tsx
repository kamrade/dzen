import { useState, useEffect, useRef } from 'react';
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { Typewriter, HitmanCharsSlider, Card, AnimatedCircle } from '~/uikit';
import { useScroll } from '~/hooks';
import s from './Home.module.scss';
import { PortfolioSection } from './PortfolioSection.tsx';
import { data } from '~/data';


const scrambledValues = data.scrambledValuesHome;
const homeCards = data.homeCards;
const phrase1 = data.heroPhrases[0];
const phrase2 = data.heroPhrases[1];
const slidesText = [
  "Research and Ideation",
  "Prototyping and design",
  "Development and testing",
  "Feedback and Iteration"
];


export const Home = () => {

  const [phrase, setPhrase] = useState(phrase1);
  const [slideText, setSlideText] = useState(slidesText[0]);
  const [progress, setProgress] = useState<number>(0);
  const { scrollY } = useScroll({ debounceTime: 10 });
  const scrollingColumn = useRef<HTMLDivElement | null>(null);

  // TODO: Add window resize handler
  const windowHeight = window.innerHeight;
  const scrollingColumnHeight = scrollingColumn.current?.getBoundingClientRect().height || 0;

  useEffect(() => {
    const interval = setInterval(() => setPhrase(phrase => phrase === phrase1 ? phrase2 : phrase1), 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const percentage = parseFloat((scrollY / (scrollingColumnHeight - windowHeight)).toFixed(2))*100;
    setProgress( percentage );
  }, [scrollingColumn, scrollY, windowHeight]);

  useEffect(() => {
    if (progress >= 0 && progress < 25) {
      setSlideText(slidesText[0]);
    } else if (progress >= 25 && progress < 50) {
      setSlideText(slidesText[1]);
    } else if (progress >= 50 && progress < 75) {
      setSlideText(slidesText[2]);
    } else {
      setSlideText(slidesText[3]);
    }
  }, [progress])


  // const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  useEffect(() => {
    // const scrollHeight = document.body.scrollHeight - window.innerHeight
    // const curr = Math.floor( (lottieRef.current?.animationItem?.totalFrames || 1) * scrollY/scrollHeight );
    // lottieRef.current?.goToAndStop(curr, true);
  }, [scrollY]);

  return (
    <div className={s.HomePage}>
      <div className="container">
        <div>


          <div className={s.heroRow}>

            <div className={s.heroColumn} style={{ position: 'sticky', top: '0', height: '100vh'}}>
              <div className={s.TitleWrapper} style={{ transform: `translateY(${scrollY / 50}px)`, }}>
                <h1 className={s.title}>
                  <div>{data.heroLines[0]}</div>
                  <div>{data.heroLines[1]}</div>
                  <div>{data.heroLines[2]}</div>

                  <div className={s.titleLabelAnchor}>
                    <div className={s.titleLabel}>
                      <ScrambledText value={scrambledValues} slideLength={10000} postAnimate postAnimateSensetivity={100} />
                    </div>
                  </div>
                </h1>
                {/*<div className={s.titleSub}>*/}
                {/*  <HitmanCharsSlider text={phrase} />*/}
                {/*</div>*/}
              </div>
            </div>


            <div className={s.heroColumn} ref={scrollingColumn}>
              <div className={s.heroGraph}>
                <AnimatedCircle percentage={progress} radius={160} color={"#EA7871"} background={"transparent"} opacity={0.5} />
                <div>
                  <HitmanCharsSlider text={slideText} speed={0.5} />
                </div>
              </div>
              <div className={s.scrollingCards}>

              </div>
            </div>

          </div>


          <div className={s.cards}>
            <div className="row">
              {homeCards.map((card, i) => (
                <div className="col-lg-12 col-xl-6" key={i}>
                  <Card image={card.image} title={card.title}>
                    {card.text}
                  </Card>
                </div>
              ))}
            </div>
          </div>

        </div>



        <h2 className={s.openingQuote}>
          <Typewriter
            maxTimeout={50}
            defaultInterval={20}
            text="Create products and services that meet users' needs and preferences. It emphasizes empathy, usability, satisfaction, inclusivity, and
            sustainability, ensuring solutions are intuitive, accessible, and beneficial for both users and organizations."
          />
        </h2>

      </div>

      <PortfolioSection />
      
      <div className={s.BackgroundPattern}></div>

    </div>
  );
};
