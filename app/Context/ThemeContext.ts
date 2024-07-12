import React, { createContext } from "react";
import { ThemeContextValue } from "../types/index.interface";

const ThemeContext = createContext<ThemeContextValue>({ darkMode: false, setDarkMode: () => ({}) });

export default ThemeContext;