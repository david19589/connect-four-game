import { Route, Routes } from "react-router-dom";
import PlayerVsCpu from "./game-started/components/player-vs-cpu";
import MainMenu from "./main-menu";
import PlayerVsPlayer from "./game-started/components/player-vs-player";

function PageRoutes(props: { setShowRules: (status: boolean) => void }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainMenu setShowRules={props.setShowRules} />}
      />
      <Route path="player-vs-cpu" element={<PlayerVsCpu />} />
      <Route path="player-vs-player" element={<PlayerVsPlayer />} />
    </Routes>
  );
}

export default PageRoutes;
