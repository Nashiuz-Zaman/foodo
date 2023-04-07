import { useCallback } from "react";

export default function useShuffleArr() {
  const shuffleArr = useCallback((arr) => {
    const shuffledArr = [...arr].sort(() => Math.random() - 0.5);
    return shuffledArr;
  }, []);

  return { shuffleArr };
}
