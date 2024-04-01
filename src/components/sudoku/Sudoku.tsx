import "./Sudoku.scss";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import { CheckSudoku, startCheck } from "../../functions/CheckSudoku";

/*
testArr
[
    [0, 3, 5, 4, 6, 9, 2, 7, 8],
    [7, 8, 2, 1, 0, 5, 6, 0, 9],
    [0, 6, 0, 2, 7, 8, 1, 3, 5],
    [3, 2, 1, 0, 4, 6, 8, 9, 7],
    [8, 0, 4, 9, 1, 3, 5, 0, 6],
    [5, 9, 6, 8, 2, 0, 4, 1, 3],
    [9, 1, 7, 6, 5, 2, 0, 8, 0],
    [6, 0, 3, 7, 0, 1, 9, 5, 2],
    [2, 5, 8, 3, 9, 4, 7, 6, 0],
  ]
*/

const Sudoku = () => {
  const [sArr, setSArr] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  const onCheckSudoku = () => {
    let checkArr = JSON.parse(JSON.stringify(sArr));
    if (!startCheck(checkArr)) return;
    checkArr = CheckSudoku(checkArr);
    setSArr(checkArr);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.name;
    const [i, j] = name.split(" ").map(Number);
    let value: number = Number(e.target.value);
    const nextArr = JSON.parse(JSON.stringify(sArr));

    if (typeof value !== "number" || !value) {
      e.target.value = "";
      value = 0;
    }
    nextArr[i][j] = value;
    setSArr(nextArr);
  };

  useEffect(() => {
    console.log(sArr);
  }, [sArr]);

  return (
    <div className="sudokuBackground">
      <div className="sudokuFrame">
        {sArr.map((numberRow: number[], i: number) => (
          <div className="sudokuNumberRow">
            {numberRow.map((value: number, j: number) => (
              <input
                className={`sudokuNumber r${i} c${j}`}
                maxLength={1}
                name={`${i} ${j}`}
                value={sArr[i][j] > 0 ? sArr[i][j] : ""}
                onChange={onChange}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="buttonSet">
        <div className="sudokuInput">
          <Button onClick={onCheckSudoku}>풀이 시작</Button>
        </div>
      </div>
    </div>
  );
};

export default Sudoku;
