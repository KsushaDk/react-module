import { useViewportSize } from '../../hooks';

export const Demo4 = () => {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
};
