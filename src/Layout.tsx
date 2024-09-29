import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CryptoChart from "./components/CryptoChart";
import { useAppSelector } from "./store/hooks";

const Layout: React.FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return <p>layout</p>;
};

export default Layout;
