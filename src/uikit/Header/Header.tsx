
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { StickyHeader } from '~/uikit';

export const Header = () => {

  return (        
    
    <StickyHeader>
      <header className={s.Header}>
        <div className="container">

          <div className={s.HeaderContent}>
          
            <h6 className={s.HeaderTitle}>
              Denys Mykhailov.
              <span className={s.HeaderTitleEmphasis}>Seasoned UX Designer</span>
            </h6>
            
            <div className={s.HeaderNav}>
              <NavLink to="/">
                <h6>Home</h6>
              </NavLink>
              <NavLink to="/services">
                <h6>Services</h6>
              </NavLink>
              <NavLink to="/showcase">
                <h6>Showcase</h6>
              </NavLink>
              <NavLink to="/about">
                <h6>About</h6>
              </NavLink>
            </div>
          
          </div>

        </div>
      </header>
    </StickyHeader>

  );
}