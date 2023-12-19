import { useEffect, useState } from "react";

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
    <>
      <button onClick={changeTheme}>Dark Mode</button>
    </>
  );
}

export default Layout;
