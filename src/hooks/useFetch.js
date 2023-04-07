//react
import { useCallback } from 'react';

//axios
import axios from 'axios';

export default function useFetch() {
  const getData = useCallback((url) => {
    const resultingPromise = axios.get(url);
    return resultingPromise;
  }, []);

  return { getData };
}
