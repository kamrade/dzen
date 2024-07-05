import { RefObject, useEffect } from "react";

export const useOnClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  condition: boolean
) => {
  useEffect(() => {
    if (condition) {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        for (let i = 0; i < refs.length; i++) {
          if (
            !refs[i].current ||
            refs[i].current?.contains(event.target as HTMLElement)
          ) {
            return;
          }
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }
  }, [refs, handler, condition]);
};
