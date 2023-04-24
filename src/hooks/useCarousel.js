//react
import { useEffect, useState, useRef } from 'react';

export default function useCarousel(
  dataArrayLength = 0,
  timeDifference = 2000
) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === dataArrayLength - 1 ? 0 : prev + 1));
    }, timeDifference);

    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [dataArrayLength, timeDifference]);

  return {
    currentSlide,
  };
}
