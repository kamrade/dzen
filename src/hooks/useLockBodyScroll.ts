import { useEffect } from 'react';

export const useLockBodyScroll = (isVisible: boolean) => {

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return (() => {
      document.body.style.overflow = 'auto';
    });
  }, [isVisible]);
}
