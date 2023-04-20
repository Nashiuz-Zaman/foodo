//react
import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver(
  ref,
  threshold = 0,
  rootMargin = '0px 0px 0px 0px',
  root = null
) {
  const [entryState, setEntryState] = useState(null);
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([currentEntry]) => {
        setEntryState(currentEntry);
      },
      {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    const element = ref.current;
    observerRef.current.observe(element);
    return () => {
      observerRef.current.disconnect();
    };
  }, [ref, threshold, rootMargin, root]);

  return {
    entry: entryState,
    observer: observerRef.current,
  };
}
