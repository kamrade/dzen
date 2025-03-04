import { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import s from './Header.module.scss';
import { StickyHeader, Drawer, TextSwitcherBoolean, MobileMenu } from '~/uikit';
import { switcherValues } from './switcher-values';
import { data } from '~/data';

export const Header = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const switcherRef = useRef(null);

  return (
    <>
      <StickyHeader>
        <header className={s.Header}>
          <div className="container">
            <div className={s.HeaderContent}>

              <Link to={"/"}>
                <h6 className={s.HeaderTitle}>
                  {data.mainTitle.name}
                  <span className={s.HeaderTitleEmphasis}>{data.mainTitle.description}</span>
                </h6>
              </Link>

              <div className={s.headerNavMobile} ref={switcherRef}>
                 <TextSwitcherBoolean values={switcherValues} currentValue={isDrawerVisible} setValue={setIsDrawerVisible} />
              </div>

              <div className={s.HeaderNav}>
                <NavLink to="/">
                  <h6>Home</h6>
                </NavLink>
                <NavLink to="/about">
                  <h6>About</h6>
                </NavLink>
                <NavLink to="/call-me">
                  <h6>Call me</h6>
                </NavLink>
              </div>
            </div>
          </div>
        </header>
      </StickyHeader>
     
      <Drawer 
        isVisible={isDrawerVisible} 
        setVisibility={setIsDrawerVisible} 
        initialWidth='auto'
        clickOutside={true}
        insideRefs={[switcherRef]}
        top={100}
        bottom={16}
        right={16}
        left={16}
        mobileTrigger={576}
      >
        <MobileMenu closeMenu={ () => setIsDrawerVisible(false) }/>
      </Drawer>
    </>
  );
};
