import { useCallback, useRef } from 'react';

export const useThrottle = (callback, limit = 1000) => {
  const lastRan = useRef(Date.now());

  return useCallback(
    (...args: any) => {
      if (Date.now() - lastRan.current >= limit) {
        callback(...args);
        lastRan.current = Date.now();
      }
    },
    [callback, limit]
  );
};
