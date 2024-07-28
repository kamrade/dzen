import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { StickyHeader, Drawer, TextSwitcherBoolean, MobileMenu } from '~/uikit';
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { scrambledValues } from './scrambled-values';
import { switcherValues } from './switcher-values';

export const Header = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const switcherRef = useRef(null);

  return (
    <>
      <StickyHeader>
        <header className={s.Header}>
          <div className="container">
            <div className={s.HeaderContent}>
              <h6 className={s.HeaderTitle}>
                Denys Mykhailov.
                <span className={s.HeaderTitleEmphasis}>Seasoned UX Designer</span>
                <span className={s.HeaderTitleDynamic}>
                  <ScrambledText value={scrambledValues} slideLength={2000} postAnimate postAnimateSensetivity={500} />
                </span>
              </h6>

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
