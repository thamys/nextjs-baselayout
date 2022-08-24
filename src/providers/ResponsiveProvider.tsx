import React, { ProviderProps, useContext, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const breakpoints = {
  mobile: 480,
  tablet: 576,
  medium: 768,
  laptop: 992,
  desktop: 1280,
  wide: 1440
};

const ResponsiveContext = React.createContext({
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  screenWidth: 0
});

/**
 * Responsive provider
 */
const ResponsiveProvider: React.FC = (props: { children: React.ReactNode }) => {
  // Local state
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  /** Set isMobile */
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setIsMobile(window.innerWidth < breakpoints.tablet);
    setIsTablet(window.innerWidth < breakpoints.medium);
    setIsLaptop(window.innerWidth < breakpoints.laptop);
  };

  // Resize on page load
  useEffect(() => {
    handleResize();
    // On resize
    window.addEventListener('resize', debounce(handleResize, 100));
  }, []);

  return (
    <ResponsiveContext.Provider
      value={{
        isMobile,
        isTablet,
        isLaptop,
        screenWidth
      }}
    >
      {props.children}
    </ResponsiveContext.Provider>
  );
};

/**
 * Create custom hook
 */
export const useResponsiveContext = () => {
  return useContext(ResponsiveContext);
};

export default ResponsiveProvider;

