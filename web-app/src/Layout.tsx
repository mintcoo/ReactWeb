import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  const [dark, setDark] = useState<boolean>(false);

  const changeTheme = () => {
    setDark(() => !dark);
    if (localStorage.theme) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="w-screen h-full min-h-screen p-48 dark:bg-black dark:text-white">
      <button className="w-20 h-20 bg-slate-400" onClick={changeTheme}>
        Dark Mode
      </button>
      <Outlet />
    </div>
  );
}

export default Layout;
