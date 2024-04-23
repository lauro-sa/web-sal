import React, { useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "system"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.remove("dark", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-2 py-1 text-white bg-gray-600 hover:bg-gray-700 rounded-full"
    >
      Cambiar tema
    </button>
  );
};

export default ThemeToggle;
