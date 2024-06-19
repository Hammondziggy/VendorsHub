"use client";

import { useRef, useEffect, createContext, useContext, useState } from 'react';

// get context
const AppContext = createContext();

// apply context 
export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize window width on component mount
    setWindowWidth(window.innerWidth);

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  if (windowWidth === null) {
    // Return loading state or render nothing until window width is initialized
    return <p>Loading...</p>;
  }
  
  return (
    <AppContext.Provider value={{ windowWidth, servicesSectionRef }}>
      {children}
    </AppContext.Provider>
  );
};
