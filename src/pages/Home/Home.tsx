import s from './Home.module.scss';
import { homeCards } from './home-cards';

export const Home = () => {

  return (
    <div className={s.HomePage}>
      <div className="container">
        
        <div>
          <h1 className={s.title}>
            <div>Human focusing</div>
            <div className={s.titleLabel}>design</div>
          </h1>
          
          <div className={s.headerCardsWrapper}>
            <div className='row'>
              <div className='col-lg-6'>
                <div className={s.headerCard}>Improving digital interactions for enhanced user experiences</div>
              </div>
                
              <div className='col-lg-6'>
                <div className={s.headerCard}>
                  User-friendly, intuitive, and enjoyable digital platforms
                </div>
              </div>
              <div className='col-lg-12'>
                <div className={`${s.headerCard} ${s.headerCardSpecial}`}>
                  Optimize user satisfaction by improving the usability, accessibility, and efficiency of digital interfaces
                </div>
              </div>
            </div>
          </div>

          <div className={s.cards}>
            <div className="row">
              {homeCards.map((card, i) => (
                <div className="col-lg-12 col-xl-6" key={i}>
                  <div className={s.card}>
                    <h3 className={s.cardTitle}>{card.title}</h3>
                    <div>{card.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        <div className={s.processFlow}>
          <h2 className={s.titleH2}>
            Process Flow
          </h2>
        </div>

        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
        <div className={s.Slide}></div>
      </div>
    </div>
  );
}