import { useEffect, useState } from "react";
import clsx from "clsx";

const rows = 6;
const cols = 7;
const initializeBoard = () =>
  Array.from({ length: rows }, () => Array(cols).fill(null));

const directions = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: -1 },
];

const GameBoardCpu = (props: {
  winner: string | null;
  setWinner: (status: string | null) => void;
  currentPlayer: string;
  setCurrentPlayer: (status: string) => void;
  gameRestart: boolean;
  setGameRestart: (status: boolean) => void;
  playAgain: boolean;
  setPlayAgain: (status: boolean) => void;
  resetTrigger: boolean;
  setResetTrigger: (status: boolean) => void;
}) => {
  const [board, setBoard] = useState(initializeBoard());

  const isValidCell = (x: number, y: number) =>
    x >= 0 && y >= 0 && x < rows && y < cols;

  const checkWin = (
    board: (string | null)[][],
    row: number,
    col: number,
    player: string
  ) => {
    for (const { x: dx, y: dy } of directions) {
      let count = 1;

      for (let i = 1; i < 4; i++) {
        const nx = row + dx * i;
        const ny = col + dy * i;
        if (isValidCell(nx, ny) && board[nx][ny] === player) count++;
        else break;
      }
      for (let i = 1; i < 4; i++) {
        const nx = row - dx * i;
        const ny = col - dy * i;
        if (isValidCell(nx, ny) && board[nx][ny] === player) count++;
        else break;
      }
      if (count >= 4) return true;
    }
    return false;
  };

  const handleClick = (colIndex: number) => {
    if (props.winner || props.currentPlayer === "yellow") return;

    for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][colIndex]) {
        const newBoard = board.map((row) => [...row]);
        newBoard[rowIndex][colIndex] = props.currentPlayer;
        setBoard(newBoard);
        if (checkWin(newBoard, rowIndex, colIndex, props.currentPlayer)) {
          props.setWinner(props.currentPlayer);
        } else {
          props.setCurrentPlayer("yellow");
          props.setResetTrigger(!props.resetTrigger);
        }
        break;
      }
    }
  };

  const cpuMove = () => {
    if (props.winner || props.currentPlayer === "red") return;

    const availableColumns = board[0]
      .map((cell, colIndex) => (cell === null ? colIndex : null))
      .filter((colIndex) => colIndex !== null);

    if (availableColumns.length === 0) return;

    const colIndex =
      availableColumns[Math.floor(Math.random() * availableColumns.length)];

    for (let rowIndex = rows - 1; rowIndex >= 0; rowIndex--) {
      if (!board[rowIndex][colIndex]) {
        const newBoard = board.map((row) => [...row]);
        newBoard[rowIndex][colIndex] = "yellow";
        setBoard(newBoard);
        if (checkWin(newBoard, rowIndex, colIndex, "yellow")) {
          props.setWinner("yellow");
        } else {
          props.setCurrentPlayer("red");
        }
        break;
      }
    }
  };

  useEffect(() => {
    if (props.currentPlayer === "yellow" && !props.winner) {
      const timer = setTimeout(cpuMove, 500);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (props.playAgain || props.gameRestart) {
      setBoard(initializeBoard());
      props.setPlayAgain(false);
      props.setGameRestart(false);
      props.setResetTrigger(false);
    }
  }, [props]);

  return (
    <div className="grid grid-cols-7 gap-[0.5rem] p-[1rem] pb-[2rem] bg-white rounded-3xl border-[0.2rem] border-[#000] shadow-custom-shadow z-10">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex: number) => (
          <div
            onClick={() => handleClick(colIndex)}
            key={`${rowIndex}-${colIndex}`}
            className={clsx(
              cell === "red" && "bg-[#FD6687]",
              cell === "yellow" && "bg-[#FFCE67]",
              !cell && "bg-[#7945FF]",
              "md:w-16 md:h-16 w-6 h-6 sm:w-9 sm:h-9 bg-[#7945FF] border-[0.3rem] border-[#000] shadow-custom-shadow-2 rounded-full cursor-pointer"
            )}
          />
        ))
      )}
    </div>
  );
};

export default GameBoardCpu;
