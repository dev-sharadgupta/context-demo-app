import { createContext } from "react";
import type { ThemeContextType } from "../../types/theme";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
