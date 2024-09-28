import { useHover } from '../../hooks';
import { RefObject } from 'react';

export const Demo3 = () => {
  const { hovered, ref } = useHover() as { hovered: boolean; ref: RefObject<HTMLDivElement> };

  return <div ref={ref}>{hovered ? 'I am hovered' : 'Put mouse over me please'}</div>;
};
