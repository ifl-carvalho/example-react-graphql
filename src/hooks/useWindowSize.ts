import { useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

interface SizeInformation {
  size: Size;
  isMobile: boolean;
}

const getWindowSize = (): Size => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export function useWindowSize(): SizeInformation {
  const [windowSize, setWindowSize] = useState<Size>(getWindowSize());

  function handleResize(): void {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { size: windowSize, isMobile: windowSize.width < 768 };
}
