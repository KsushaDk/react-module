import { useEffect, useState } from 'react';

type ReturnValue = [
  value: string | null,
  {
    setItem: (value: string) => void;
    removeItem: () => void;
  }
];

type UseLocalStorage = (key: string) => ReturnValue;

export const useLocalStorage: UseLocalStorage = key => {
  const [value, setValue] = useState<string | null>(() => localStorage.getItem(key) || null);

  const setItem = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setValue(newValue);
  };

  const removeItem = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(key) || null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [value, { setItem, removeItem }];
};
