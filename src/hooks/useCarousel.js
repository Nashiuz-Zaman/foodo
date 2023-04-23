//react
import { useEffect, useState, useRef } from 'react';

export default function useCarousel(
  dataArrayLength = 0,
  timeDifference = 2000
) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseInside, setMouseInside] = useState(false);
  const timerRef = useRef(null);

  console.log(currentSlide);

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const handleMouseEnter = () => {
    setMouseInside(true);
  };

  const handleMouseLeave = () => {
    setMouseInside(false);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === dataArrayLength - 1 ? 0 : prev + 1));
    }, timeDifference);

    return () => {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    };
  }, [dataArrayLength, timeDifference]);

  useEffect(() => {
    if (mouseInside) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, []);

  return {
    handleMouseEnter,
    handleMouseLeave,
    goToSlide,
    currentSlide,
  };
}
