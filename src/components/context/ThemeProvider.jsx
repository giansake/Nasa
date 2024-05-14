import { createContext, useState } from "react";

const ThemeContext = createContext({
  remainingRequests: 0,
  setRemainingRequests: () => {},
});

const ThemeProvider = ({ children }) => {
  const [remainingRequests, setRemainingRequests] = useState(-1);

  return (
    <ThemeContext.Provider
      value={{
        remainingRequests,
        setRemainingRequests,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
