import React, { useEffect, useState, useRef } from 'react';
import s from './StickyHeader.module.scss';
import { useWindowSize } from '~/hooks';

interface StickyHeaderProps extends React.PropsWithChildren {
  preventHiding?: boolean;
}

type ScrollDirection = 'up' | 'down';

const StickyHeader: React.FC<StickyHeaderProps> = ({ children, preventHiding = true }) => {
  const [height, setHeight] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [lastScrollDirection, setLastScrollDirection] = useState<ScrollDirection>('up');
  const stickyHeaderContent = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize({ debounced: true });
  const preventHidingRef = useRef(preventHiding);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    scrollPosition - lastScrollTop > 0 && !preventHiding
      ? setLastScrollDirection('down')
      : setLastScrollDirection('up');

    setLastScrollTop(scrollPosition);
  }, [scrollPosition]);

  const updateWrapperSize = () => {
    if (stickyHeaderContent?.current) {
      setHeight(stickyHeaderContent.current.getBoundingClientRect().height);
    }
  };

  useEffect(() => {
    updateWrapperSize();
  }, [windowSize]);

  useEffect(() => {
    updateWrapperSize();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (preventHidingRef.current && !preventHiding) {
      setLastScrollDirection('up');
    }
    preventHidingRef.current = preventHiding;
  }, [preventHiding]);

  return (
    <div className={s.StickyHeader}>
      <div id="StickyHeaderPosition"
        className={`${s.StickyHeaderPosition} ${scrollPosition > 0 ? s.StickyHeaderShadow : ''}`}
        style={{
          top:
            scrollPosition > height - 16 && lastScrollDirection === 'down' && !preventHiding
              ? `-${height}px` : '0',
        }}
      >
        <div className={s.StickyHeaderContent} ref={stickyHeaderContent}>
          {children}
        </div>
      </div>

      <div className={s.StickyHeaderStub} style={{ height: `${height}px` }} />
    </div>
  );
};

export { StickyHeader };
