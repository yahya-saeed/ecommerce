import { create } from "zustand";

const initialDark = localStorage.getItem("theme") === "dark";

if (initialDark) {
  document.documentElement.classList.add("dark");
}

export const useThemeStore = create((set) => ({
  dark: initialDark,

  toggleTheme: () =>
    set((state) => {
      const dark = !state.dark;

      document.documentElement.classList.toggle("dark", dark);

      localStorage.setItem("theme", dark ? "dark" : "light");

      return { dark };
    }),
}));
