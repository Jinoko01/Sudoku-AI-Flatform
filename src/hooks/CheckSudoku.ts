function check(x: number, y: number, sudoku: number[][], k: number): boolean {
  // 가로 확인
  for (let i = 0; i < 9; i++) {
    if (sudoku[y][i] === k) return false;
  }
  // 세로 확인
  for (let i = 0; i < 9; i++) {
    if (sudoku[i][x] === k) return false;
  }
  // 사각형 확인
  const sqaureX = Math.floor(x / 3) * 3;
  const squareY = Math.floor(y / 3) * 3;
  for (let i = squareY; i < squareY + 3; i++) {
    for (let j = sqaureX; j < sqaureX + 3; j++) {
      if (sudoku[i][j] === k) return false;
    }
  }
  return true;
}

let end = false;
let result: number[][];
function solution(sudoku: number[][], blank: number) {
  console.log(blank);
  console.log(sudoku);
  if (blank === 0) {
    result = sudoku;
    console.log(result);
    end = true;
  }
  if (end) {
    return;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (check(j, i, sudoku, k)) {
            sudoku[i][j] = k;
            solution(sudoku, blank - 1);
            if (end) {
              return;
            }
            sudoku[i][j] = 0;
          }
          if (k === 9) return;
        }
      }
    }
  }
}

function CheckSudoku(arr: number[][]) {
  let blank = 0;
  const sudoku = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === 0) blank++;
    }
  }
  solution(sudoku, blank);
  return result;
}

export default CheckSudoku;
