import { useState, useEffect, useRef } from 'react';
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { Typewriter, HitmanCharsSlider, Card, AnimatedCircle, TextBlinds } from '~/uikit';
import { useScroll } from '~/hooks';
import s from './Home.module.scss';
import { PortfolioSection } from './PortfolioSection.tsx';
import { data } from '~/data';


const scrambledValues = data.scrambledValuesHome;
const homeCards = data.homeCards;
const slidesText = [
  "Research and Ideation. Understand the target audience, analyze the competitive landscape. Generate ideas and concepts, explore potential solutions.",
  "Prototyping and design. Testing and gathering feedback. Improvements based on testing. Visual elements and layout. Seamless and enjoyable user journey.",
  "Development and testing. Implement the UI design, integration. Check the user stories and test cases, ensure the product meets users expectations.",
  "Feedback and Iteration. Continuously monitor the product, collect user feedback, make continuous improvements based on feedback and changing requirements."
];


export const Home = () => {

  const [slideText, setSlideText] = useState(slidesText[0]);
  const [progress, setProgress] = useState<number>(0);
  const { scrollY } = useScroll({ debounceTime: 10 });
  const scrollingColumn = useRef<HTMLDivElement | null>(null);

  // TODO: Add window resize handler
  const windowHeight = window.innerHeight;
  const scrollingColumnHeight = scrollingColumn.current?.getBoundingClientRect().height || 0;

  useEffect(() => {
    const percentage = parseFloat((scrollY / (scrollingColumnHeight - windowHeight)).toFixed(2))*100;
    setProgress( percentage );
    console.log(percentage);
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
  }, [progress]);

  const getPercentage = (percentage: number, i: number) => {
    if (i === 0) {
     return percentage * 4 + 10;
    }
    if (i === 1) {
      return (percentage - 25) * 4 + 10;
    }
    if (i === 2) {
      return (percentage - 50) * 4 + 10;
    }
    if (i === 3) {
      return (percentage - 75) * 4 + 10;
    }

  }

  return (
    <div className={s.HomePage}>
      <div className="container">
        <div>


          <div className={s.heroRow}>

            <div className={s.heroColumn}>
              <div className={s.titleWrapper} >
                <h1 className={s.title} style={{ transform: `translateY(${ -1 * (scrollY / 50) }px)`, }}>
                  <div>{data.heroLines[0]}</div>
                  <div>{data.heroLines[1]}</div>
                  <div>{data.heroLines[2]}</div>

                  <div className={s.titleLabelAnchor}>
                    <div className={s.titleLabel}>
                      <ScrambledText value={scrambledValues} slideLength={10000} postAnimate postAnimateSensetivity={100} />
                    </div>
                  </div>
                </h1>
              </div>
            </div>


            <div className={s.heroColumn} ref={scrollingColumn}>
              <div className={s.heroGraph}>
                <AnimatedCircle
                  percentage={progress}
                  radius={160}
                  color={"#EA7871"}
                  background={"transparent"}
                  opacity={0.5}
                />
              </div>
              <div className={s.heroSlides}>
                {slidesText.map((heroSlide, i) => (
                  <div className={s.heroSlide} key={i}>
                    <TextBlinds text={heroSlide} percentage={ getPercentage(progress, i) }></TextBlinds>
                  </div>
                ))}

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
