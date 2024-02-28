// my context

"use client";

import { useRef, useEffect, createContext, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  // Initialize useRef inside the component body
  const servicesSectionRef = useRef(null);
  
  
  useEffect(() => {
    // Check if servicesSectionRef is not null and scroll to it
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  console.log("Initial value of servicesSectionRef:", servicesSectionRef.current);
  
  return (
    <AppContext.Provider value={{ servicesSectionRef }}>
      {children}
    </AppContext.Provider>
  );
};