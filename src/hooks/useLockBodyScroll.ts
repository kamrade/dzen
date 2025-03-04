import { useEffect } from 'react';

export const useLockBodyScroll = (isVisible: boolean) => {

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }

    return (() => {
      document.body.style.overflowY = 'scroll';
    });
  }, [isVisible]);
}
