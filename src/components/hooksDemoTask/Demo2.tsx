import { useState } from 'react';
import { useLocalStorage } from '../../hooks';

export const Demo2 = () => {
  const [value, setValue] = useState<string>('');
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <p>Your token: {token}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <label>
          Please, enter your token: <br />
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <button onClick={() => setItem(value)}>Set token</button>
        <button onClick={() => removeItem()}>Remove token</button>
      </div>
    </>
  );
};
