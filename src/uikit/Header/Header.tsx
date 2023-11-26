import { Link, NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export const Header = () => {
  return (        
    
    <header className={s.Header}>
      <div className="container">

        <div className={s.HeaderContent}>
        
          <h6 className={s.HeaderTitle}>Denys Mykhailov</h6>
          <div className={s.Logo}></div>
          <div className={s.HeaderNav}>
            <h6>
              <Link to="/">Home</Link>
            </h6>
            <h6>
              <NavLink to="/about">About</NavLink>
            </h6>
          </div>
        
        </div>

      </div>
    </header>


  );
}