import { useState, useEffect, useRef } from 'react';

export function useIntersection(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      } else {
        if (!options.once) {
          setIsIntersecting(false);
        }
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options.once, options.threshold, options.root, options.rootMargin]);

  return [elementRef, isIntersecting];
}
