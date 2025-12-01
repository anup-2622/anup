import { useState } from "react";

import "./App.css";
import Portfolio from "./portfolio";
import Chat from "./chat";

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <Portfolio />
      {/* <Chat /> */}
    </div>
  );
}

export default App;
