import clsx from "clsx";
import { useEffect, useState } from "react";

function Timer(props: {
  currentPlayer: string;
  handleTimeUp: () => void;
  resetTrigger: boolean;
  showMenu: boolean;
}) {
  const [time, setTime] = useState(30);

  useEffect(() => {
    if (props.showMenu) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 1) {
          props.handleTimeUp();
          clearInterval(timer);
        }
        return prevTime > 0 ? prevTime - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [props]);

  useEffect(() => {
    setTime(30);
  }, [props.resetTrigger]);

  return (
    <div>
      <h1
        className={clsx(
          props.currentPlayer === "red" ? "text-[#FFF]" : "text-[#000]",
          "md:text-[3.5rem] md:leading-[4.5rem] text-[2rem] leading-[2.5rem] font-[700]"
        )}
      >
        {time}s
      </h1>
    </div>
  );
}
export default Timer;
