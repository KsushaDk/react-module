import { useEffect, useState, useCallback } from 'react';

interface FetchData<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: (params?: string[][] | Record<string, string> | string | URLSearchParams) => void;
}

export const useFetch = <T>(url: string): FetchData<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchData = useCallback(async (params: string[][] | Record<string, string> | string | URLSearchParams = {}) => {
    setIsLoading(true);
    setError(null);

    const queryString = new URLSearchParams(params).toString();
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    try {
      const response = await fetch(fullUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};
