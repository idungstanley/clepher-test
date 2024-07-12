import React, { createContext } from "react";

const ThemeContext = createContext<ThemeContextValue>({ darkMode: false, setDarkMode: () => ({}) });

export default ThemeContext;