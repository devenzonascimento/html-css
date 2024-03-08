import { useState } from "react";

import Ram from "./components/Ram/Ram";
import Cpu from "./components/Cpu/Cpu";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <>
      <div className="container">
        <Settings />
        <div className="simulator-container">
          <Cpu />
          <Ram />
        </div>
      </div>
    </>
  );
};

export default App;
