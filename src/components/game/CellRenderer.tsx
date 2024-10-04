import { Col, Row } from "antd";

export function CellRenderer(
  rowCount: number,
  colCount: number,
  blockColor: number[],
  op: number,
  handleCellClick: (r: number, c: number) => void
): { AllCells: JSX.Element; randomRow: number; randomCol: number } {
  const randomrow: number = Math.floor(Math.random() * rowCount);
  const randomcol: number = Math.floor(Math.random() * colCount);
  const colWidth = Math.floor(100 / colCount) - 3;
  const rowHeight = Math.floor(100 / rowCount) - 1;
  const rowWidth = colCount * colWidth;

  const AllCells = (
    <>
      {Array.from({ length: rowCount }, (_, i) => (
        <Row
          key={i}
          style={{ minHeight: `${rowHeight}vh`, minWidth: `${rowWidth}vw` }}
        >
          {Array.from({ length: colCount }, (_, j) => (
            <Col
              key={j}
              className="border border-opacity-5 border-black"
              style={{
                backgroundColor:
                  i === randomrow && j === randomcol
                    ? `rgba(${blockColor[0]}, ${blockColor[1]}, ${blockColor[2]},${op})`
                    : `rgb(${blockColor[0]}, ${blockColor[1]}, ${blockColor[2]})`,
                minWidth: `${colWidth}vw`,
              }}
              onClick={() => handleCellClick(i, j)}
            />
          ))}
        </Row>
      ))}
    </>
  );

  return { AllCells, randomRow: randomrow, randomCol: randomcol };
}
