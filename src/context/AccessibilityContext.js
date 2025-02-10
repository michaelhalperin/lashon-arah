import React, { createContext, useContext, useState, useCallback } from "react";

const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.min(prev + 2, 24));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  }, []);

  const toggleHighContrast = useCallback(() => {
    setHighContrast((prev) => !prev);
  }, []);

  const resetSettings = useCallback(() => {
    setFontSize(16);
    setHighContrast(false);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  React.useEffect(() => {
    document.body.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        highContrast,
        increaseFontSize,
        decreaseFontSize,
        toggleHighContrast,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};
