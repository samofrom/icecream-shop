import { useCallback, useEffect, useState } from 'react';

type Key = 'productCart';

export function useLocalStorage<T>(key: Key, initialValue: T) {
  const getInitialValue = useCallback(
    () => (JSON.parse(localStorage.getItem(key) || '[]') as T) || initialValue,
    [key, initialValue]
  );

  const [state, setState] = useState<T>(getInitialValue());

  useEffect(() => {
    const handleStorageChange = () => {
      setState(getInitialValue());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [getInitialValue]);

  const setItem = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
    dispatchEvent(new Event('storage', {}));
  };

  return {
    value: state,
    setItem,
  };
}
