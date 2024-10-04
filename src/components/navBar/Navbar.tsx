import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleTheme } from "../../store/reducers/themeSlice";
import { Button, Row } from "antd";

const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  return (
    <nav
      className={`bgTransition p-4 flex justify-between items-center text-lg font-bold ${
        isDarkMode ? "darkThemeNav" : "lightThemeNav"
      }`}
    >
      <Row className="flex items-center space-x-4 justify-around w-full">
        <h3 className="hover:text-orange-400 lg:text-base">کشف رنگ متفاوت</h3>

        <Button
          onClick={() => dispatch(toggleTheme())}
          className="text-gray-300 hover:text-white"
        >
          {theme === "light" ? <>🌙</> : <> ☀ </>}
        </Button>
      </Row>
    </nav>
  );
};

export default Navbar;
