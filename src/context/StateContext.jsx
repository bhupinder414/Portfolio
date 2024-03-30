import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

function StateContextProvider({ children }) {
  const [barsClicked, setBarsClicked] = useState(false);
  const [deviceSize, setDeviceSize] = useState("");

  useEffect(function () {
    function updateDeviceSize() {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceSize("small");
      } else if (width >= 768 && width < 992) {
        setDeviceSize("medium");
      } else {
        setDeviceSize("large");
      }
    }
    updateDeviceSize();
    window.addEventListener("resize", updateDeviceSize);
    return () => window.removeEventListener("resize", updateDeviceSize);
  }, []);

  function toggleBars() {
    setBarsClicked((val) => !val);
  }

  return (
    <StateContext.Provider value={{ barsClicked, toggleBars, deviceSize }}>
      {children}
    </StateContext.Provider>
  );
}

function useStateData() {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "dark mode context cannot be used outside dark mode provider"
    );
  }
  return context;
}

export { useStateData, StateContextProvider };
