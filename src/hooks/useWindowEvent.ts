import { useEffect } from 'react';

type UseWindowEventOptions = AddEventListenerOptions | boolean;

export function useWindowEvent(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: UseWindowEventOptions
) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);

      return () => {
        window.removeEventListener(type, listener, options);
      };
    }
  }, [type, listener, options]);
}
