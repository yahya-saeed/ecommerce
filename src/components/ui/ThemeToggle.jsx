import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../../store/themeStore";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="
      p-2
      rounded-xl
      bg-slate-200
      dark:bg-slate-800
      "
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
