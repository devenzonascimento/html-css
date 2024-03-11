import { useState } from "react";

import Ram from "./components/Ram/Ram";
import Cpu from "./components/Cpu/Cpu";
import Table from "./components/Ram/Table";
import Settings from "./components/Settings/Settings";

const App = () => {

  return (
    <>
      <div className="container">
        <Settings />
        <div className="simulator-container">
          <Cpu />
          <Table />
          <Ram />
        </div>
      </div>
    </>
  );
};

export default App;
