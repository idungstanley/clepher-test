import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import { IoMoonSharp } from "react-icons/io5";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`rounded-lg border-1 border-gray-200 p-2 absolute right-8 xl:right-32 shadow-lg transition duration-300 hover:scale-125 ${
        darkMode ? "shadow-gray-800" : null
      }`}
      onClick={toggleDarkMode}
    >
      <IoMoonSharp
        className={`h-8 w-8 cursor-pointer stroke-1 ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "stroke-black"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;