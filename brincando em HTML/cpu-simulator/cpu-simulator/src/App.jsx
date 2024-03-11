import React from "react";

import DecodeUnit from "./components/Simulator/DecodeUnit/DecodeUnit";
import Ram from "./components/Simulator/Ram/Ram";
import Settings from "./components/Settings/Settings";
import DebugWindow from "./components/DebugWindow/DebugWindow";

import Alu from "./components/Simulator/Registers/Alu";
import Register from "./components/Simulator/Registers/Register";

const App = () => {
  return (
    <>
      <div className="container">
        <Settings />
        <DebugWindow />
        <div className="simulator-container">
          <Ram />
          <div className="registers-container">
            <Register name={"pc"} />
            <Register name={"mar"} />
            <Register name={"acc"} />
            <Alu />
            <Register name={"mdr"} />
          </div>
          <div className="decode-cir-container">
            <Register name={"cir"} />
            <DecodeUnit />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
