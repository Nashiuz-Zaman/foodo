//react
import { useState, useEffect } from 'react';

//hooks
import useIntersectionObserver from './useIntersectionObserver';

export default function useDetectMenu(menuRef) {
  const [passedMenu, setPassedMenu] = useState(false);
  const { entry } = useIntersectionObserver(menuRef);

  useEffect(() => {
    if (entry && entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
      setPassedMenu(true);
    } else {
      setPassedMenu(false);
    }
  }, [entry]);

  return { passedMenu };
}
