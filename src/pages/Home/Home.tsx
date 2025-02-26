import { useState, useEffect, useRef } from 'react';
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { Typewriter, Card, AnimatedCircle, TextBlinds, useWindowSize } from '~/uikit';
import { useScroll } from '~/hooks';
import s from './Home.module.scss';
import { PortfolioSection } from './PortfolioSection.tsx';
import { data } from '~/data';


const heroText = data.home_page_data.hero_text;
const scrambledValues = data.scrambledValuesHome;
const homeCards = data.homeCards;
const slidesTitle = [
  "Research and Ideation.",
  "Prototyping and design.",
  "Development and testing.",
  "Feedback and Iteration."
];
const slidesText = [
  "Understand the target audience, analyze the competitive landscape. Generate ideas and concepts, explore potential solutions.",
  "Testing and gathering feedback. Improvements based on testing. Visual elements and layout. Seamless and enjoyable user journey.",
  "Implement the UI design, integration. Check the user stories and test cases, ensure the product meets users expectations.",
  "Continuously monitor the product, collect user feedback, make continuous improvements based on feedback and changing requirements."
];

export const Home = () => {

  const [progress, setProgress] = useState<number>(0);
  const [progresses, setProgresses] = useState<number[]>([])
  const { scrollY } = useScroll({ debounceTime: 10 });

  const scrollingColumn = useRef<HTMLDivElement | null>(null);
  const slidesRefs = useRef<HTMLDivElement[]>([]);

  // TODO: Add window resize handler
  const windowHeight = window.innerHeight;
  const scrollingColumnHeight = scrollingColumn.current?.getBoundingClientRect().height || 0;


  // EFFECTS

  useEffect(() => {
    setProgresses( new Array(slidesRefs.current.length).fill(0));
  }, []);

  useEffect(() => {
    const percentage = parseFloat((scrollY / (scrollingColumnHeight - windowHeight)).toFixed(6))*100;
    setProgress( percentage );
  }, [scrollingColumn, scrollY, windowHeight, scrollingColumnHeight]);

  useEffect(() => {
    const currentScroll = window.innerHeight + scrollY;
    for (let i = 0; i < slidesRefs.current.length; i++) {
      const top = slidesRefs.current[i].getBoundingClientRect().top;
      const height = slidesRefs.current[i].getBoundingClientRect().height;

      const currStart = top + currentScroll - windowHeight;
      const currEnd = top + currentScroll + height - windowHeight;

      if (currentScroll > currStart && currentScroll <= currEnd) {
        const onePercent = ((currEnd) - (currStart + height*0.25)) / 100;
        let progress = (currentScroll - currStart) / onePercent;
        const innerProgresses = [...progresses];
        innerProgresses[i] = progress;
        progress = progress > 100 ? 100 : progress;
        setProgresses(innerProgresses);
      }
    }
    console.log("---");
  }, [scrollY]);

  return (
    <div className={s.HomePage}>
      <div className="container">

        <div className={s.hero} ref={scrollingColumn}>

          <div className={s.titleLabel}>
            <ScrambledText value={scrambledValues} slideLength={10000} postAnimate postAnimateSensetivity={100} />
          </div>

          <h1 className={s.heroTitle}>
            <div>{heroText.title1}</div>
            <div className={s.textEmp}>{heroText.title2}</div>
          </h1>

          <div className={s.heroText}>
            <div className="row">
              <div className="col-md-12">
                {heroText.text}
              </div>
            </div>
          </div>


          <div className={s.heroGraph}>
            <div className={s.heroGraphInner}>
              <AnimatedCircle
                percentage={progress}
                radius={260}
                color={'#EA7871'}
                background={'#E9EFF6'}
                opacity={0.5}
              />
            </div>
          </div>

          <div className={s.heroSlides}>
            {slidesText.map((heroSlide, i) => (
              <div className={s.heroSlide} key={i} ref={(el: HTMLDivElement) => (slidesRefs.current[i] = el)}>
                <div className={s.slideTitle}>{slidesTitle[i]}</div>
                <TextBlinds
                  text={heroSlide}
                  percentage={progresses[i]}
                  background={"var(--color-bg-control-100)"}
                  foreground={"var(--color-text-body)"}
                />
                <div className={s.heroSlideNumber}>0{i+1}</div>
              </div>
            ))}

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
