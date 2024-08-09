import clsx from "clsx";
import { Link } from "react-router-dom";

function InGameMenu(props: {
  showMenu: boolean;
  setShowMenu: (status: boolean) => void;
  resetGame: () => void;
}) {
  return (
    <div
      className={clsx(
        props.showMenu ? "flex z-20 top-0 right-0 w-full" : "hidden ",
        "flex items-center justify-center min-h-screen bg-[#0000008a] p-[1.5rem] fixed transition-all duration-200"
      )}
    >
      <div className="flex flex-col items-center justify-center max-w-[30rem] w-full gap-[1.9rem] bg-[#7945FF] border-[0.2rem] border-[#000] shadow-custom-shadow rounded-3xl p-[1.9rem] relative mb-[1rem]">
        <h1 className="text-[3.5rem] leading-[4.5rem] font-[700] text-[#FFF]">
          PAUSE
        </h1>
        <div className="flex flex-col items-center gap-[1.9rem] w-full">
          <button
            onClick={() => {
              props.setShowMenu(false);
            }}
            className="text-[1.5rem] leading-[1.9rem] font-[700] max-w-[25rem] w-full px-[1.3rem] py-[1rem] text-[#000] bg-[#FFF] border-[0.2rem] border-[#000] hover:border-[#5C2DD5] shadow-custom-shadow hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] rounded-3xl transition-all duration-200"
          >
            CONTINUE GAME
          </button>
          <button
            onClick={props.resetGame}
            className="text-[1.5rem] leading-[1.9rem] font-[700] max-w-[25rem] w-full px-[1.3rem] py-[1rem] text-[#000] bg-[#FFF] border-[0.2rem] border-[#000] hover:border-[#5C2DD5] shadow-custom-shadow hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] rounded-3xl transition-all duration-200"
          >
            RESTART
          </button>
          <Link to="/" className="max-w-[25rem] w-full">
            <button
              onClick={props.resetGame}
              className="text-[1.5rem] leading-[1.9rem] font-[700] max-w-[25rem] w-full px-[1.3rem] py-[1rem] text-[#FFF] bg-[#FD6687] border-[0.2rem] border-[#000] hover:border-[#5C2DD5] shadow-custom-shadow hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] rounded-3xl transition-all duration-200"
            >
              QUIT GAME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InGameMenu;
