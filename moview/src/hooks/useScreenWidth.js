import React from "react";

export default function useScreenWidth() {
  const getScreenWidth = React.useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = React.useState(getScreenWidth);

  React.useEffect(() => {
    window.addEventListener('resize',resizeWidth, false)
    let resizeTimer;
    function handleScreenResize() {
      setScreenWidth(getScreenWidth());
    }
    function resizeWidth() {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleScreenResize();
        }, 1000);
      }
    }
    return () => window.removeEventListener('resize', handleScreenResize)
  }, [getScreenWidth]);
  return screenWidth;
}