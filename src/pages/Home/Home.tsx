import { useState, useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { Typewriter, HitmanCharsSlider, Card } from '~/uikit';
import { useScroll } from '~/hooks';
import s from './Home.module.scss';
import { homeCards } from './home-cards';
import animation from './Flow3.json';

const scrambledValues = ['Digital', 'UX/UI', 'Mobile', 'Graphic', 'Motion', 'Info'];
const phrase1 = 'User-friendly, intuitive, and enjoyable digital platforms';
const phrase2 = 'Optimize user satisfaction by improving the usability';

export const Home = () => {

  const [phrase, setPhrase] = useState(phrase1);
  const { scrollY } = useScroll({ debounceTime: 10 });

  let lottieRef = useRef<LottieRefCurrentProps | null>(null);

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
          
          <div className={s.TitleWrapper}>
            <h1 className={s.title} style={{
              transform: `translateY(${scrollY/10}px)`,
            }}>
              <div>Human focusing</div>
              <div className={s.titleLabelAnchor}>
                design
                <div className={s.titleLabel}>
                  <ScrambledText value={scrambledValues} slideLength={10000} postAnimate postAnimateSensetivity={100} />
                </div>
              </div>
            </h1>

            <div className={s.titleSub}>
              <HitmanCharsSlider text={phrase} />
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

        <div className={s.processFlow}>
          <h2 className={s.titleH2}>Process Flow</h2>
        </div>

        
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
      </div>

      <div className={s.BackgroundVideoContainer}>
        <video autoPlay muted loop>
          <source src="public/Comp1.webm" type="video/webm" />
        </video>
      </div>
      
      <div className={s.BackgroundLottieContainer}>
        <Lottie
          animationData={animation}
          autoplay={false}
          height={'100%'}
          width={'100%'}
          lottieRef={lottieRef}
        />
      </div>
      
    </div>
  );
};
