import s from './Home.module.scss';

export function Home() {

  return (
    <div className={s.HomePage}>
      <div className="container">
        <div className={s.Slide}>
          <h1>Home page</h1>
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
