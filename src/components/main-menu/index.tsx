import Logo from "/src/assets/logo.svg";
import PvsCpu from "/src/assets/player-vs-cpu.svg";
import PvsP from "/src/assets/player-vs-player.svg";

function MainMenu(props: {
  setShowRules: (status: boolean) => void;
  setVsCPU: (status: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[5rem] min-h-screen bg-[#7945FF] px-[1rem]">
      <img src={Logo} alt="Logo" />
      <div className="flex flex-col items-center gap-[1.9rem] w-full">
        <button className="flex items-center justify-between max-w-[25rem] w-full bg-[#FD6687] border-[0.2rem] border-[#000] hover:border-[#5C2DD5] shadow-custom-shadow hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] px-[1.3rem] py-[1rem] rounded-3xl text-[1.5rem] leading-[1.9rem] font-[700] text-[#FFF] transition-all duration-200">
          PLAY VS CPU
          <img src={PvsCpu} alt="PvsCpu" />
        </button>
        <button className="flex items-center justify-between max-w-[25rem] w-full bg-[#FFCE67] border-[0.2rem] border-[#000] hover:border-[#5C2DD5] shadow-custom-shadow hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] px-[1.3rem] py-[1rem] rounded-3xl text-[1.5rem] leading-[1.9rem] font-[700] text-[#000] transition-all duration-200">
          PLAY VS PLAYER
          <img src={PvsP} alt="PvsP" />
        </button>
        <button
          onClick={() => {
            props.setShowRules(true);
          }}
          className="flex items-center justify-between max-w-[25rem] w-full bg-[#FFF] border-[0.2rem] border-[#000] hover:border-[#5C2DD5] shadow-custom-shadow hover:shadow-custom-shadow-hover hover:translate-y-[0.1rem] px-[1.3rem] py-[1rem] rounded-3xl text-[1.5rem] leading-[2.875rem] font-[700] text-[#000] transition-all duration-200"
        >
          GAME RULES
        </button>
      </div>
    </div>
  );
}
export default MainMenu;
