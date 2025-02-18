"use client";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
