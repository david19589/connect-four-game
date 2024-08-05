import clsx from "clsx";
import Check from "/src/assets/icon-check.svg";

function Rules(props: {
  showRules: boolean;
  setShowRules: (status: boolean) => void;
}) {
  return (
    <div
      className={clsx(
        props.showRules ? "opacity-1 z-10 top-0 w-full" : "opacity-0",
        "flex items-center justify-center min-h-screen bg-[#7945FF] p-[1.5rem] fixed transition-all duration-200"
      )}
    >
      <div className="flex flex-col items-center justify-center max-w-[30rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl p-[1.9rem] relative mb-[1rem]">
        <h1 className="text-[3.5rem] leading-[4.5rem] font-[700] text-[#000] mb-[1.9rem]">
          RULES
        </h1>
        <div>
          <div className="mb-[2rem]">
            <h2 className="text-[1.3rem] leading-[1.6rem] font-[700] text-[#7945FF] mb-[1rem]">
              OBJECTIVE
            </h2>
            <p className="text-[1rem] leading-[1.3rem] font-[500] text-[#000]">
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </div>
          <div>
            <h2 className="text-[1.3rem] leading-[1.6rem] font-[700] text-[#7945FF] mb-[1rem]">
              HOW TO PLAY
            </h2>
            <div className="flex flex-row gap-[1.2rem] mb-[0.7rem]">
              <span className="text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
                1
              </span>
              <p className="text-[1rem] leading-[1.3rem] font-[500] text-[#000]">
                Red goes first in the first game.
              </p>
            </div>
            <div className="flex flex-row gap-[1.2rem] mb-[0.7rem]">
              <span className="text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
                2
              </span>
              <p className="text-[1rem] leading-[1.3rem] font-[500] text-[#000]">
                Players must alternate turns, and only one disc can be dropped
                in each turn.
              </p>
            </div>
            <div className="flex flex-row gap-[1.2rem] mb-[0.7rem]">
              <span className="text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
                3
              </span>
              <p className="text-[1rem] leading-[1.3rem] font-[500] text-[#000]">
                The game ends when there is a 4-in-a-row or a stalemate.
              </p>
            </div>
            <div className="flex flex-row gap-[1.2rem] mb-[1.9rem]">
              <span className="text-[1rem] leading-[1.3rem] font-[700] text-[#000]">
                4
              </span>
              <p className="text-[1rem] leading-[1.3rem] font-[500] text-[#000]">
                The starter of the previous game goes second on the next game.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            props.setShowRules(false);
          }}
        >
          <img
            className="w-[4rem] h-[4rem] absolute translate-y-0 translate-x-[-2rem] bg-[#FD6687] border-[0.2rem] border-[#000] rounded-full shadow-custom-shadow hover:border-[#5C2DD5] hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] transition-all duration-200"
            src={Check}
            alt="Check"
          />
        </button>
      </div>
    </div>
  );
}

export default Rules;
