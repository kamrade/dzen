import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { StickyHeader, Drawer, IconButton } from '~/uikit';
import { ScrambledText } from '@kamrade/react-scrambled-text';
import { RiMenuLine } from 'react-icons/ri';

const scrambledValues = [
  '[ Product design ]',
  '[ Prototyping ]',
  '[ Infographic ]',
  '[ Design systems ]',
  '[ React/Angular components ]',
  '[ Business and system analytics ]',
];

export const Header = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

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

              <div className={s.headerNavMobile}>
                <IconButton onClick={() => setIsDrawerVisible(true)}>
                  <RiMenuLine />
                </IconButton>
              </div>

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
      <Drawer isVisible={isDrawerVisible} setVisibility={setIsDrawerVisible} initialWidth={320} />
    </>
  );
};
