import { createContext, use, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const DarkLight = () => {
  const { theme, handleToggleTheme } = use(ThemeContext);
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center min-h-dvh min-w-dvw ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h1>Dark Light Mode Website</h1>
        <button
          onClick={handleToggleTheme}
          className="mt-4 p-2 rounded cursor-pointer bg-blue-500 hover:bg-blue-700 text-white"
        >
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </>
  );
};
