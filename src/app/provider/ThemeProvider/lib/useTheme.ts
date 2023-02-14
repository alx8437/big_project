import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../../../../shared/config/theme/ThemeContext";
import {useContext} from "react";

interface UseTheResult {
  theme: Theme,
  toggleTheme: () => void,
}

export function useTheme(): UseTheResult {
  const {theme, setTheme} = useContext(ThemeContext);


  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {
    theme,
    toggleTheme
  }

}