import s from './CallMe.module.scss';

export function CallMe() {
  return (
    <div className="ServicesPage">
      <div className={s.CallMe}>
        <div className="container">
          <h1 className={s.callMeTitile}>Call Dennis</h1>
          <p className={s.callMeText}>Handling difficult cases in design and development.</p>
          <p className={s.callMeText}>Let's start with a letter to: <a href='mailto:denis.michailov@gmail.com'>denis.michailov@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}