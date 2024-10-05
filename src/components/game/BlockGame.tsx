import { Alert, Col } from "antd";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { CellRenderer } from "./CellRenderer";
import { AlertType, isAlertType } from "../../utils/Types/allTypes";

const BlockGame = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const [blockColor, setBlockColor] = useState(getRandomNumber());
  const [level, setLevel] = useState(1); //1 - 7
  const [subLevel, setSubLevel] = useState(1); //1 - 3
  const [rowCount, setrowCount] = useState(3); //3 - 9
  const [colCount, setColCount] = useState(4); //4 - 16
  const [op, setOp] = useState(0.85); //0 - 1
  const [alertOption, setAlertOption] = useState({
    show: false,
    message: "",
    type: "success",
  });

  function getRandomNumber() {
    return [
      Math.ceil(Math.random() * 256),
      Math.ceil(Math.random() * 256),
      Math.ceil(Math.random() * 256),
    ];
  }

  const {
    AllCells,
    randomRow,
    randomCol,
  }: { AllCells: JSX.Element; randomRow: number; randomCol: number } =
    CellRenderer(rowCount, colCount, blockColor, op, handleCellClick);

  function handleCellClick(r: number, c: number) {
    if (randomRow == r && randomCol == c) {
      if (level < 8) {
        if (subLevel < 3) {
          setSubLevel(subLevel + 1);
          setOp(op + 0.04);
        } else {
          setSubLevel(1);
          setOp(0.85);
          setBlockColor(getRandomNumber());
          setrowCount(rowCount + 1);
          setColCount(colCount + 2);
          setLevel(level + 1);
        }
      } else {
        setAlertOption({
          show: true,
          message:
            "تبریک! شما بازی را به پایان رساندید. لطفا مجددا امتحان کنید.",
          type: "success" as AlertType,
        });
      }
    } else {
      setAlertOption({
        show: true,
        message:
          "متاسفانه سلول اشتباهی را انتخاب کردید. لطفا مجددا امتحان کنید.",
        type: "warning" as AlertType,
      });
    }
  }

  return (
    <>
      <Col
        className={`bgTransition max-w-[100vw] max-h-screen flex flex-col items-center justify-between mx-auto  mt-5 pb-5
        ${theme === "dark" ? "darkTheme" : ""}  `}
      >
        {AllCells as JSX.Element}
      </Col>
      {alertOption.show && (
        <Alert
          className="absolute top-5 right-5 z-10 h-20 lg:text-base"
          message={alertOption.message}
          type={isAlertType(alertOption.type) ? alertOption.type : "success"}
          showIcon
          closable
        />
      )}
    </>
  );
};

export default BlockGame;
