import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './MobileMenu.module.scss';

const mainMenuMobile = [{
  text: 'Home',
  link: '/'
}, {
  text: 'About',
  link: '/about'
}, {
  text: 'Call Me',
  link: '/call-me'
}];

interface INavLinkCLickHandler {
  isActive: boolean;
  isPending: boolean;
}

interface IMobileMenuProps {
  closeMenu: () => void;
}

export const MobileMenu: FC<IMobileMenuProps> = ({ closeMenu }) => {

  const navLinkClickHandler: (p: INavLinkCLickHandler) => string = 
    ({ isActive, isPending }) => 
      isPending ? s.mobileMenuItem + " pending" : isActive ? s.mobileMenuItem + " active" : s.mobileMenuItem;
  
  return (
    <div className={s.mobileMenu}>
      <div className="container" style={{ height: '100%' }}>
        <div className="row" style={{ height: '100%' }}>

          <div className="col-sm-12" style={{ position: 'relative' }}>
            <div className={s.mainMenuContent}>
              <div className={s.mainMenuContentInner} onMouseUp={closeMenu}>
                {mainMenuMobile.map((menuItem, i) => (
                  <NavLink key={i} to={menuItem.link} className={navLinkClickHandler}>
                    <h6>{menuItem.text}</h6>
                  </NavLink>
                ))}
              </div>
              <div className={s.mainMenuContentFooter}>
                <a href="mailto:denis.michailov@gmail.com" className={s.mobileMenuItemSocial}>
                  <h6>
                    denis.michailov@gmail.com
                  </h6>
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12" style={{ position: 'relative' }}>
            <div className={s.social}>
              <div className={s.socialImage}></div>
              <div className={s.socialLinks}>
                <a href='/' className={s.mobileMenuItemSocial}>
                  <h6>Behance</h6>
                </a>
                <a href='/' className={s.mobileMenuItemSocial}>
                  <h6>Dribble</h6>
                </a>
                <a href='/' className={s.mobileMenuItemSocial}>
                  <h6>LinkedIn</h6>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}