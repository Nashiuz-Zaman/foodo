//react
import { useCallback } from 'react';

//hook
import useShuffleArr from './useShuffleArr';

export default function useExtractRandomFromArr() {
  const { shuffleArr } = useShuffleArr();

  const extractRandomFromArr = useCallback(
    (arr, count) => {
      const sourceArray = shuffleArr(arr);
      const newArr = sourceArray.slice(0, count);
      return newArr;
    },
    [shuffleArr]
  );

  return { extractRandomFromArr };
}
