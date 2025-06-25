import { useTheme } from "../context/ThemeContext";
import React from 'react'

export default function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setTheme("light")}
          className={`px-4 py-2 rounded-lg ${theme === "light" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          className={`px-4 py-2 rounded-lg ${theme === "dark" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Dark
        </button>
      </div>
    </div>
  );
}
