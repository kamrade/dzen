import { useEffect, useRef } from 'react';

export const useInterval = (callback: any, delay: number) => {
  
  const savedCallback = useRef<any>();
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function func() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(func, delay);
      return () => clearInterval(id);
    }
  }, []);

}