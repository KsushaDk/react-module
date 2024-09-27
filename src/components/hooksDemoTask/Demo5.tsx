import { useWindowScroll } from '../../hooks';

export const Demo5 = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    // DEVNOTE: to demonstrate scroll data on the top of the page
    <div
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        padding: '1rem',
        background: 'pink',
        color: 'black',
      }}
    >
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
};
