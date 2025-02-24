import { useState, useEffect, useRef } from 'react';
import { LottieRefCurrentProps } from "lottie-react";
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { Typewriter, HitmanCharsSlider, Card } from '~/uikit';
import { useScroll } from '~/hooks';
import s from './Home.module.scss';
import { homeCards } from './home-cards';
import { PortfolioSection } from './PortfolioSection.tsx';
import { data } from '~/data';
import AnimatedCircleControl from "~/uikit/AnimatedCircle/AnimatedCircleControl.tsx";

const scrambledValues = ['Digital', 'UX/UI', 'Mobile', 'Graphic', 'Motion', 'Info'];
const phrase1 = 'User-friendly, intuitive, and enjoyable digital platforms';
const phrase2 = 'Optimize user satisfaction by improving the usability';

export const Home = () => {

  const [phrase, setPhrase] = useState(phrase1);
  const { scrollY } = useScroll({ debounceTime: 10 });

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    const scrollHeight = document.body.scrollHeight - window.innerHeight
    const curr = Math.floor( (lottieRef.current?.animationItem?.totalFrames || 1) * scrollY/scrollHeight );
    lottieRef.current?.goToAndStop(curr, true);
  }, [scrollY]);

  useEffect(() => {
    const interval = setInterval(() => setPhrase(phrase => phrase === phrase1 ? phrase2 : phrase1), 6000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className={s.HomePage}>
      <div className="container">
        <div>


          <div className={s.heroRow}>

            <div className={s.heroColumn} style={{ position: 'sticky', top: '0', height: '100vh'}}>
              <div className={s.TitleWrapper} style={{ transform: `translateY(${scrollY / 10}px)`, }}>

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

                <div className={s.titleSub}>
                  <HitmanCharsSlider text={phrase} />
                </div>
              </div>
            </div>
            <div className={s.heroColumn}>


              <AnimatedCircleControl></AnimatedCircleControl>


              {homeCards.map((card, i) => (
                <div key={i}>
                  <Card image={card.image} title={card.title}>
                    {card.text}
                  </Card>
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
      
      <div className={s.BackgroundPattern}>

      </div>


    </div>
  );
};
