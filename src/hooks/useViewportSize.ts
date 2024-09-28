import { useCallback, useEffect, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

type ViewportSize = {
  width: number;
  height: number;
};

const eventListerOptions = {
  passive: true,
};

export const useViewportSize = (): ViewportSize => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    setWindowSize({ width: window.innerWidth || 0, height: window.innerHeight || 0 });
  }, []);

  useWindowEvent('resize', handleResize, eventListerOptions);
  useWindowEvent('orientationchange', handleResize, eventListerOptions);
  useEffect(handleResize, [handleResize]);

  return windowSize;
};
