import { useToggle } from '../../hooks';

export const Demo6 = () => {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button style={{ background: `${value}` }} onClick={() => toggle()}>
      {value}
    </button>
  );
};

// const [value, toggle] = useToggle(['light', 'dark']);

// toggle(); // -> value === 'light'
// toggle(); // -> value === 'dark'

// // Так же можно передать конкретное значение и тогда
// // value станет одним из значений
// toggle('dark'); // -> value === 'dark'
