import { Route, Routes } from "react-router-dom";
import PlayerVsCpu from "./player-vs-cpu";
import MainMenu from "./main-menu";

function PageRoutes(props: { setShowRules: (status: boolean) => void }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainMenu setShowRules={props.setShowRules} />}
      />
      <Route path="player-vs-cpu" element={<PlayerVsCpu />} />
    </Routes>
  );
}

export default PageRoutes;
