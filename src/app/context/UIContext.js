"use client";

import { createContext, useContext, useState } from "react";

const UIContext = createContext(undefined);

export function UIProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <UIContext.Provider 
      value={{
        isMobileMenuOpen,
        toggleMobileMenu,
        closeMobileMenu,
        activeSection,
        setActiveSection
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  
  return context;
}
