import { useEffect, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface ScrollPosition {
  x: number;
  y: number;
}

function getScrollPosition(): ScrollPosition {
  return typeof window !== 'undefined' ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 };
}

function scrollTo({ x, y }: Partial<ScrollPosition>) {
  if (typeof window !== 'undefined') {
    const scrollOptions: ScrollToOptions = { behavior: 'smooth' };

    if (typeof x === 'number') {
      scrollOptions.left = x;
    }

    if (typeof y === 'number') {
      scrollOptions.top = y;
    }

    window.scrollTo(scrollOptions);
  }
}

export const useWindowScroll = (): [ScrollPosition, (options: Partial<ScrollPosition>) => void] => {
  const [position, setPosition] = useState<ScrollPosition>({ x: 0, y: 0 });

  useWindowEvent('scroll', () => setPosition(getScrollPosition()));
  useWindowEvent('resize', () => setPosition(getScrollPosition()));

  useEffect(() => {
    setPosition(getScrollPosition());
  }, []);

  return [position, scrollTo] as const;
};
