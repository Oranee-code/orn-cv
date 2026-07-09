import { useCallback, useEffect, useState } from "react";
import type { Theme } from "../types";
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  setStoredTheme,
} from "../utils/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return getStoredTheme() ?? getSystemTheme();
  });

  useEffect(() => {
    applyTheme(theme);
    setStoredTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme, setTheme };
}
