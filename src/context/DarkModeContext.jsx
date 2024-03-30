import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const KEY = "isDarkMode";

function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(function () {
    const storedValue = localStorage.getItem(KEY);
    return storedValue
      ? JSON.parse(storedValue)
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem(KEY, JSON.stringify(true));
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem(KEY, JSON.stringify(false));
    }
  }, [isDarkMode]);
  function toggleDarkMode() {
    setIsDarkMode((mode) => !mode);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error(
      "dark mode context cannot be used outside dark mode provider"
    );
  }
  return context;
}
export { useDarkMode, DarkModeContextProvider };
