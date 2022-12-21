import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultvalues) => {
  const [state, setstate] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultvalues;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setstate];
};
