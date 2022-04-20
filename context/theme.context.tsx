import { createContext, useContext, useState, ReactChild } from "react";
import { ThemeContextType, Theme } from "types/theme";

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{ children: ReactChild }> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>("light");
  return (
    <ThemeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext) as ThemeContextType;
};

export default ThemeProvider;
