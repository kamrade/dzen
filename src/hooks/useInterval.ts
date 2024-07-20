import { useEffect, useRef } from 'react';

export const useInterval = (callback: any, delay: number) => {

  const savedCallback = useRef<any>();
  const intervalRef = useRef<any>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (typeof delay === 'number' && delay !== null) {
      const id = setInterval(tick, delay);
      intervalRef.current = id;
      return () => clearInterval(intervalRef.current);
    }

  }, [delay]);

  return intervalRef.current;

}
