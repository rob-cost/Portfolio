import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    // Core ring classes
    "ring-1",
    "ring-inset",

    // Gray
    "bg-gray-50",
    "text-gray-600",
    "text-gray-400",
    "ring-gray-500/10",
    "dark:bg-gray-400/10",
    "dark:text-gray-400",
    "dark:ring-gray-400/20",

    // Red
    "bg-red-50",
    "text-red-700",
    "text-red-400",
    "ring-red-600/10",
    "dark:bg-red-400/10",
    "dark:text-red-400",
    "dark:ring-red-400/20",

    // Yellow
    "bg-yellow-50",
    "text-yellow-800",
    "text-yellow-500",
    "ring-yellow-600/20",
    "dark:bg-yellow-400/10",
    "dark:text-yellow-500",
    "ring-yellow-400/20",

    // Purple
    "bg-purple-50",
    "text-purple-700",
    "text-purple-400",
    "ring-purple-700/10",
    "ring-purple-400/30",
    "dark:bg-purple-400/10",
    "dark:text-purple-400",

    // Green
    "bg-green-50",
    "text-green-700",
    "text-green-400",
    "ring-green-600/20",
    "ring-green-500/20",
    "dark:bg-green-400/10",
    "dark:text-green-400",

    // Blue
    "bg-blue-50",
    "text-blue-700",
    "text-blue-400",
    "ring-blue-700/10",
    "ring-blue-400/30",
    "dark:bg-blue-400/10",
    "dark:text-blue-400",

    // Indigo
    "bg-indigo-50",
    "text-indigo-700",
    "text-indigo-400",
    "ring-indigo-700/10",
    "ring-indigo-400/30",
    "dark:bg-indigo-400/10",
    "dark:text-indigo-400",

    // Pink
    "bg-pink-50",
    "text-pink-700",
    "text-pink-400",
    "ring-pink-700/10",
    "ring-pink-400/20",
    "dark:bg-pink-400/10",
    "dark:text-pink-400",

    // Teal
    "bg-teal-50",
    "text-teal-700",
    "text-teal-400",
    "ring-teal-600/10",
    "dark:bg-teal-400/10",
    "dark:text-teal-400",
    "dark:ring-teal-400/20",

    // Orange
    "bg-orange-50",
    "text-orange-700",
    "text-orange-400",
    "ring-orange-600/10",
    "dark:bg-orange-400/10",
    "dark:text-orange-400",
    "dark:ring-orange-400/20",

    // Cyan
    "bg-cyan-50",
    "text-cyan-700",
    "text-cyan-400",
    "ring-cyan-600/10",
    "dark:bg-cyan-400/10",
    "dark:text-cyan-400",
    "dark:ring-cyan-400/20",

    // Emerald
    "bg-emerald-50",
    "text-emerald-700",
    "text-emerald-400",
    "ring-emerald-600/10",
    "dark:bg-emerald-400/10",
    "dark:text-emerald-400",
    "dark:ring-emerald-400/20",

    // Violet
    "bg-violet-50",
    "text-violet-700",
    "text-violet-400",
    "ring-violet-600/10",
    "dark:bg-violet-400/10",
    "dark:text-violet-400",
    "dark:ring-violet-400/20",

    // Fuchsia
    "bg-fuchsia-50",
    "text-fuchsia-700",
    "text-fuchsia-400",
    "ring-fuchsia-600/10",
    "dark:bg-fuchsia-400/10",
    "dark:text-fuchsia-400",
    "dark:ring-fuchsia-400/20",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
