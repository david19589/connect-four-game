import { useState } from "react";
import Rules from "./components/rules";
import { BrowserRouter } from "react-router-dom";
import PageRoutes from "./components/router";

function App() {
  const [showRules, setShowRules] = useState(false);

  return (
    <BrowserRouter>
      <PageRoutes setShowRules={setShowRules} />
      <Rules setShowRules={setShowRules} showRules={showRules} />
    </BrowserRouter>
  );
}

export default App;
