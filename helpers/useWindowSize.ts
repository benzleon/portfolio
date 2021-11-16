import { useState, useEffect } from "react";

const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize

    function handleResize() {
      // Set window width/height to state

      setWindowSize({
        width: document.documentElement.clientWidth,

        height: document.documentElement.clientHeight,
      });
    }

    // Add event listener

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size

    handleResize();

    // Remove event listener on cleanup

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
