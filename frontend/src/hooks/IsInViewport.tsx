import React, { useEffect, useMemo, useRef, useState } from "react";

export default function useIsInViewport(
  ref: React.MutableRefObject<any>,
  setState?: React.Dispatch<React.SetStateAction<boolean>>
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isIntersectingOnce, setIsIntersectingOnce] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, [observer, ref.current]); // Only include ref.current as a dependency

  if (!isIntersectingOnce && isIntersecting) {
    setState && setState(true);
    setIsIntersectingOnce(true);
  }
  return isIntersecting;
}
