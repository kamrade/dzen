import { useState, useEffect, useRef } from 'react';
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { Typewriter, AnimatedCircle, TextBlinds } from '~/uikit';
import { useScroll, useWindowSize } from '~/hooks';
import s from './Home.module.scss';
import { PortfolioSection } from './PortfolioSection.tsx';
import { data } from '~/data';


const heroText = data.home_page_data.hero_text;
const scrambledValues = data.scrambledValuesHome;
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
const slideTags = [
  ["User Stories", "Moodboard", "Mind Maps", "User Journey Maps", "Characters Creation", "Empathy Cards", "Problem Statement"],
  ["Test Cases (for TDD)", "Wireframes", "Interactive prototypes", "Usability testing", "A/B Testing", "Interviews"],
  ["UIKit", "Design System", "Corner Cases", "Test Scenarios", "TDD", "Clean Architecture", "MVP", "FSD", "SOLID", "GRASP"],
  ["Agile Development", "Feedback and Analytics", "Double Diamond", "Lean UX", "Agile Methodology", "User-Centered Design (UCD)", "Kano Model ", "HEART Framework", "MMP"]
];

export const Home = () => {

  const [progress, setProgress] = useState<number>(0);
  const [animatedCircleRadius, setAnimatedCircleRadius] = useState<number>(200);
  const [progresses, setProgresses] = useState<number[]>([])
  const [isQuoteShowed, setIsQuoteShowed] = useState(false);

  const { scrollY } = useScroll({ debounceTime: 10 });
  const windowSize = useWindowSize({ debounceTime: 400 });

  const scrollingColumn = useRef<HTMLDivElement | null>(null);
  const slidesRefs = useRef<HTMLDivElement[]>([]);
  const openingQuoteRef = useRef<HTMLDivElement>(null);

  // TODO: Add window resize handler
  const windowHeight = window.innerHeight;
  const scrollingColumnHeight = scrollingColumn.current?.getBoundingClientRect().height || 0;


  // EFFECT :: react to window size change
  useEffect(() => {
    if (windowSize.width < 768 && windowSize.width > 576) {
      setAnimatedCircleRadius(160);
    } else if (windowSize.width <= 576){
      setAnimatedCircleRadius(100);
    } else {
      setAnimatedCircleRadius(200);
    }
  }, [windowSize]);

  // EFFECT :: Initiate slidesRefs percentage
  useEffect(() => {
    setProgresses( new Array(slidesRefs.current.length).fill(0));
  }, []);

  // EFFECT :: react to scroll
  useEffect(() => {


    const startQuote = (openingQuoteRef?.current?.offsetTop || 0) - windowHeight;
    const endQuote   = (openingQuoteRef?.current?.offsetTop || 0) + (openingQuoteRef?.current?.getBoundingClientRect().height || 0);
    if ((scrollY >= startQuote && scrollY <= endQuote )) {
      setIsQuoteShowed(true);
    } else {
      setIsQuoteShowed(false);
    }

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
              <div className="col-lg-12">
                {heroText.text}
              </div>
            </div>
          </div>


          <div className={s.heroGraph}>
            <div className={s.heroGraphInner}>
              <AnimatedCircle
                percentage={progress}
                radius={animatedCircleRadius}
                color={'#EA7871'}
                background={'transparent'}
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
                <div className={s.tags}>
                  { slideTags[i].map((tag, j) => {
                    return (<div key={j} className={s.tag}>{tag}</div>)
                  })}
                </div>
              </div>
            ))}

          </div>
        </div>


        {/*<div className={s.cards}>*/}
        {/*  <div className="row">*/}
        {/*    {homeCards.map((card, i) => (*/}
        {/*      <div className="col-lg-12 col-xl-6" key={i}>*/}
        {/*        <Card image={card.image} title={card.title}>*/}
        {/*          {card.text}*/}
        {/*        </Card>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}


        <h2 className={s.openingQuote} ref={openingQuoteRef}>
          {isQuoteShowed &&
            <Typewriter
              maxTimeout={50}
              defaultInterval={5}
              text="Create products and services that meet users' needs and preferences. It emphasizes empathy, usability, satisfaction, inclusivity, and
              sustainability, ensuring solutions are intuitive, accessible, and beneficial for both users and organizations."
            />
          }
        </h2>


      </div>

      <PortfolioSection />

      <div className={s.BackgroundPattern}></div>

    </div>
  );
};
