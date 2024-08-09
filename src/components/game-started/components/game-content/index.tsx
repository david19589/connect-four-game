import { useEffect, useState } from "react";
import GameBoardCpu from "../game-board-cpu";
import Logo from "/src/assets/logo.svg";
import Player from "/src/assets/you.svg";
import Cpu from "/src/assets/cpu.svg";
import TurnBackgroundRed from "/src/assets/turn-background-red.svg";
import TurnBackgroundYellow from "/src/assets/turn-background-yellow.svg";
import Player1Svg from "/src/assets/player-one.svg";
import Player2Svg from "/src/assets/player-two.svg";
import InGameMenu from "../../../in-game-menu";
import GameBoardPlayer from "../game-board-player";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import Timer from "../timer";

function GameContent({
  player1,
  player2,
  player1Turn,
  player2Turn,
}: {
  player1: string;
  player2: string;
  player1Turn: string;
  player2Turn: string;
}) {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [playAgain, setPlayAgain] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (winner === "red") {
      setPlayerScore((prev) => prev + 1);
    } else if (winner === "yellow") {
      setCpuScore((prev) => prev + 1);
    }
  }, [winner]);

  const resetBoard = () => {
    setGameRestart(true);
    setCurrentPlayer("red");
    setWinner(null);
  };

  const resetGame = () => {
    setGameRestart(true);
    setCurrentPlayer("red");
    setWinner(null);
    setCpuScore(0);
    setPlayerScore(0);
    setShowMenu(false);
    setResetTrigger(true);
  };

  const handleTimeUp = () => {
    if (currentPlayer === "red" && !winner) {
      setWinner("yellow");
    } else if (currentPlayer === "yellow" && !winner) {
      setWinner("red");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#7945FF] p-[1.5rem] relative">
      <div className="flex items-center justify-between max-w-[39rem] w-full mb-[3.2rem]">
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="text-[1rem] leading-[1.3rem] font-[700] px-5 py-3 text-[#FFF] bg-[#5C2DD5] rounded-full"
        >
          MENU
        </button>
        <img src={Logo} alt="Logo" />
        <button
          onClick={resetGame}
          className="text-[1rem] leading-[1.3rem] font-[700] px-5 py-3 text-[#FFF] bg-[#5C2DD5] rounded-full"
        >
          Restart
        </button>
      </div>
      <div className="lg:flex lg:flex-row lg:items-center z-10 lg:gap-[4rem]">
        <div className="lg:max-w-[9rem] lg:h-[10rem] lg:mb-0 flex justify-between max-w-[35rem] w-full mb-[3.2rem]">
          <div className="lg:flex-col lg:max-w-[9rem] lg:h-[10rem] md:max-w-[15rem] flex items-center justify-center relative max-w-[7rem] sm:max-w-[9rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl px-[3.4rem] py-[0.6rem]">
            <img
              className="lg:translate-x-0 lg:translate-y-[-5rem] md:translate-x-[-7rem] absolute translate-x-[-3rem] sm:translate-x-[-4rem]"
              src={location.pathname === "/player-vs-cpu" ? Player : Player1Svg}
              alt={
                location.pathname === "/player-vs-cpu" ? "Player" : "Player1"
              }
            />
            <div className="lg:flex-col lg:gap-0 md:flex-row md:gap-[2rem] flex flex-col items-center">
              <h2 className="md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
                {player1}
              </h2>
              <span className="md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700] text-[#000]">
                {playerScore}
              </span>
            </div>
          </div>
          <div className="lg:hidden md:max-w-[15rem] flex items-center justify-center relative max-w-[7rem] sm:max-w-[9rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl px-[3.4rem] py-[0.6rem]">
            <div className="md:flex-row-reverse md:gap-[2rem] flex flex-col items-center">
              <h2 className="md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
                {player2}
              </h2>
              <span className="md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700] text-[#000]">
                {cpuScore}
              </span>
            </div>
            <img
              className="md:translate-x-[7rem] absolute translate-x-[3rem] sm:translate-x-[4rem]"
              src={location.pathname === "/player-vs-cpu" ? Cpu : Player2Svg}
              alt={location.pathname === "/player-vs-cpu" ? "Cpu" : "Player2"}
            />
          </div>
        </div>
        {location.pathname === "/player-vs-cpu" && (
          <GameBoardCpu
            winner={winner}
            setWinner={setWinner}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            playAgain={playAgain}
            setPlayAgain={setPlayAgain}
            gameRestart={gameRestart}
            setGameRestart={setGameRestart}
            resetTrigger={resetTrigger}
            setResetTrigger={setResetTrigger}
          />
        )}
        {location.pathname === "/player-vs-player" && (
          <GameBoardPlayer
            winner={winner}
            setWinner={setWinner}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            playAgain={playAgain}
            setPlayAgain={setPlayAgain}
            gameRestart={gameRestart}
            setGameRestart={setGameRestart}
            resetTrigger={resetTrigger}
            setResetTrigger={setResetTrigger}
          />
        )}
        <div className="lg:flex-col lg:max-w-[9rem] lg:h-[10rem] lg:flex hidden md:max-w-[15rem] items-center justify-center relative max-w-[7rem] sm:max-w-[9rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl px-[3.4rem] py-[0.6rem]">
          <div className="lg:flex-col lg:gap-0 md:flex-row-reverse md:gap-[2rem] flex flex-col items-center">
            <h2 className="md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
              {player2}
            </h2>
            <span className="md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700] text-[#000]">
              {cpuScore}
            </span>
          </div>
          <img
            className="lg:translate-x-0 lg:translate-y-[-5rem] md:translate-x-[7rem] absolute translate-x-[3rem] sm:translate-x-[4rem]"
            src={location.pathname === "/player-vs-cpu" ? Cpu : Player2Svg}
            alt={location.pathname === "/player-vs-cpu" ? "Cpu" : "Player2"}
          />
        </div>
      </div>
      {!winner && (
        <div className="z-10 translate-y-[-1.5rem]">
          <img
            src={
              currentPlayer === "red" ? TurnBackgroundRed : TurnBackgroundYellow
            }
            alt="TurnBackground"
          />
          <div className="md:translate-x-[2.9rem] flex flex-col items-center absolute translate-y-[-7rem] translate-x-[3.5rem]">
            <h2
              className={clsx(
                currentPlayer === "red" ? "text-[#FFF]" : "text-[#000]",
                "md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700]"
              )}
            >
              {currentPlayer === "red" ? player1Turn : player2Turn}
            </h2>
            <Timer
              currentPlayer={currentPlayer}
              handleTimeUp={handleTimeUp}
              resetTrigger={resetTrigger}
              showMenu={showMenu}
            />
          </div>
        </div>
      )}
      {winner && (
        <div className="flex flex-col items-center z-10 translate-y-[-1.5rem] bg-[#FFF] p-[1rem] max-w-[17.5rem] w-full border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl">
          <h3 className="text-[1.4rem] leading-[1.3rem] font-[700] text-[#000]">
            {winner === "red" ? player1 : player2}
          </h3>
          <h1 className="text-[3.5rem] leading-[4.5rem] font-[700] text-[#000]">
            {location.pathname === "/player-vs-cpu" ? "WON" : "WINS"}
          </h1>
          <button
            onClick={resetBoard}
            className="text-[1rem] leading-[1.3rem] font-[700] text-[#FFF] px-[1.4rem] py-[0.65rem] bg-[#5C2DD5] rounded-full"
          >
            PLAY AGAIN
          </button>
        </div>
      )}
      <div
        className={clsx(
          winner === "red" && "bg-[#FD6687]",
          winner === "yellow" && "bg-[#FFCE67]",
          winner === null && "bg-[#5C2DD5]",
          "lg:h-[35%] md:h-[30%] absolute bottom-0 w-full h-[40%] rounded-t-[4rem]"
        )}
      ></div>
      <InGameMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        resetGame={resetGame}
      />
    </div>
  );
}
export default GameContent;
