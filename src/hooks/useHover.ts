import { useRef, useState, useEffect, useCallback } from 'react';

type UseHoverReturn<T extends HTMLElement> = {
  hovered: boolean;
  ref: React.RefObject<T>;
};

export const useHover = <T extends HTMLElement>(): UseHoverReturn<T> => {
  const [hovered, setHovered] = useState<boolean>(false);
  const ref = useRef<T>(null);

  const handleMouseEnter = useCallback(() => setHovered(true), []);
  const handleMouseLeave = useCallback(() => setHovered(false), []);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        node.removeEventListener('mouseenter', handleMouseEnter);
        node.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [handleMouseEnter, handleMouseLeave, ref]);

  return { hovered, ref };
};
