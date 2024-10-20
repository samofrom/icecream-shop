import { useEffect, useRef } from 'react';

type useIntersectionOptions = Partial<{
  threshold: number[];
  isBottomToTop: boolean;
  onIntersection: () => void;
}>;

export const useIntersection = ({
  threshold = [],
  onIntersection = () => {},
}: useIntersectionOptions) => {
  const ref = useRef(null);
  const prevRef = useRef(ref.current);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersection();

          prevRef.current = ref.current;
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    if (prevRef.current) {
      observer.unobserve(prevRef.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [onIntersection]);

  return { ref };
};
