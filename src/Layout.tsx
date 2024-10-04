import React, { useEffect } from "react";
import { useAppSelector } from "./store/hooks";
import Navbar from "./components/navBar/Navbar";
import BlockGame from "./components/game/BlockGame";
// import MainGameAi from "./components/game/MainGameAi";

const Layout: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <main className="max-h-screen max-w-[100vw]">
      <Navbar />
      {/* <MainGameAi /> */}
      <BlockGame />
    </main>
  );
};

export default Layout;
