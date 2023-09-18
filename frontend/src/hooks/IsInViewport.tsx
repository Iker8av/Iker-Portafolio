import React, { useEffect, useMemo, useRef, useState } from "react";
import "intersection-observer";

export default function useIsInViewport(
  ref: React.MutableRefObject<any>,
  setState?: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersectingOnce, setIsIntersectingOnce] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [ref.current]); // Only include ref.current as a dependency

  if (!isIntersectingOnce && isIntersecting) {
    setState && setState(true);
    setIsIntersectingOnce(true);
  }
  return isIntersecting;
}
