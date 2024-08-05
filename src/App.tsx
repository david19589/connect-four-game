import { useState } from "react";
import MainMenu from "./components/main-menu";
import Rules from "./components/rules";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/router";

function App() {
  const [showRules, setShowRules] = useState(false);
  const [VsCPU, setVsCPU] = useState(false);

  return (
    <>
      <MainMenu setShowRules={setShowRules} setVsCPU={setVsCPU} />
      <Rules setShowRules={setShowRules} showRules={showRules} />
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
