import { useState, useEffect } from "react";

const useWindowSize = (initialSize: { width: number; height: number }) => {
  const [windowSize, setWindowSize] = useState(initialSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
