import { useState } from "react";
import GameBoard from "../game-board";
import Logo from "/src/assets/logo.svg";
import Player from "/src/assets/you.svg";
import Cpu from "/src/assets/cpu.svg";
import TurnBackgroundRed from "/src/assets/turn-background-red.svg";
import TurnBackgroundYellow from "/src/assets/turn-background-yellow.svg";

function PlayerVsCpu() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [timer, setTimer] = useState(30);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#7945FF] p-[1.5rem]">
      <div className="flex items-center justify-between max-w-[39rem] w-full mb-[3.2rem]">
        <button className="text-[1rem] leading-[1.3rem] font-[700] px-5 py-3 text-[#FFF] bg-[#5C2DD5] rounded-full">
          Menu
        </button>
        <img src={Logo} alt="Logo" />
        <button className="text-[1rem] leading-[1.3rem] font-[700] px-5 py-3 text-[#FFF] bg-[#5C2DD5] rounded-full">
          Restart
        </button>
      </div>
      <div className="flex justify-between max-w-[35rem] w-full mb-[3.2rem]">
        <div className="md:max-w-[15rem] flex items-center justify-center relative max-w-[7rem] sm:max-w-[9rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl px-[3.4rem] py-[0.6rem]">
          <img
            className="md:translate-x-[-7rem] absolute translate-x-[-3rem] sm:translate-x-[-4rem]"
            src={Player}
            alt="Player"
          />
          <div className="md:flex-row md:gap-[2rem] flex flex-col items-center">
            <h2 className="md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
              YOU
            </h2>
            <span className="md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700] text-[#000]">
              {playerScore}
            </span>
          </div>
        </div>
        <div className="md:max-w-[15rem] flex items-center justify-center relative max-w-[7rem] sm:max-w-[9rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl px-[3.4rem] py-[0.6rem]">
          <div className="md:flex-row-reverse md:gap-[2rem] flex flex-col items-center">
            <h2 className="md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
              CPU
            </h2>
            <span className="md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700] text-[#000]">
              {cpuScore}
            </span>
          </div>
          <img
            className="md:translate-x-[7rem] absolute translate-x-[3rem] sm:translate-x-[4rem]"
            src={Cpu}
            alt="Cpu"
          />
        </div>
      </div>
      <GameBoard />
      <div className="relative z-10 translate-y-[-1.5rem]">
        <img src={TurnBackgroundRed} alt="TurnBackgroundRed" />
        <div className="flex flex-col items-center absolute translate-y-[-7rem] translate-x-[2.5rem]">
          <h2 className="md:text-[1.3rem] md:leading-[1.6rem] text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
            YOUR TURN
          </h2>
          <h1 className="md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700] text-[#000]">
            {timer}s
          </h1>
        </div>
      </div>
    </div>
  );
}
export default PlayerVsCpu;
