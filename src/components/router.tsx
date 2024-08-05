import { Route, Routes } from "react-router-dom";
import PlayerVsCpu from "./player-vs-cpu";

function PageRoutes() {
  return (
    <Routes>
      <Route path="player-vs-cpu" element={<PlayerVsCpu />} />
    </Routes>
  );
}

export default PageRoutes;
