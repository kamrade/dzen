import { useLayoutEffect, useState } from 'react';
import { debounce } from 'lodash';

export interface IUseScroll {
  debounceTime: number;
}

export interface IUseScrollReturnValue {
  scrollX: number;
  scrollY: number;
}

export const useScroll: (debounceTime: IUseScroll) => IUseScrollReturnValue = (props) => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    };

    const handleScrollDebounced = props?.debounceTime ? debounce(handleScroll, props.debounceTime) : handleScroll;
    window.addEventListener('scroll', handleScrollDebounced);
    handleScroll();

    return () => window.removeEventListener('resize', handleScrollDebounced);
  }, [props.debounceTime]);

  return { scrollX, scrollY };
};
