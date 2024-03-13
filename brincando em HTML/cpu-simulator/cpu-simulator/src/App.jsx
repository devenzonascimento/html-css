import React, { useState } from "react";

import DecodeUnit from "./components/Simulator/DecodeUnit/DecodeUnit";
import Ram from "./components/Simulator/Ram/Ram";
import Settings from "./components/Settings/Settings";
import DebugWindow from "./components/DebugWindow/DebugWindow";
import Alu from "./components/Simulator/Registers/Alu";
import Register from "./components/Simulator/Registers/Register";

import * as Cpu from "./script/cpuScript"

const App = () => {
  
  const [memoryValue, setMemoryValue] = useState(Cpu.memory);
  const [pcValue, setPcValue] = useState("00000000");
  const [marValue, setMarValue] = useState("00000000");
  const [mdrValue, setMdrValue] = useState("00000000");
  const [accValue, setAccValue] = useState("00000000");
  const [cirValue, setCirValue] = useState("00000000");

  const handleUpdateMemory = (newMemory) => {
    setMemoryValue({ ...newMemory });
    Cpu.memory = newMemory
  };

  const updateValues = () => {
    setPcValue(Cpu.pc);
    setMarValue(Cpu.mar);
    setMdrValue(Cpu.mdr);
    setAccValue(Cpu.acc);
    setCirValue(Cpu.cir);
    setMemoryValue(Cpu.memory);
  } 

  return (
      <div className="container">
        <Settings />
        <DebugWindow updateValues={updateValues} executeNextStep={Cpu.executeNextStep} />
        <div className="simulator-container">
          <Ram memory={memoryValue} onAtualizarMemory={handleUpdateMemory} />
          <div className="registers-container">
            <Register
              name={"pc"}
              value={pcValue}
            />
            <Register
              name={"mar"}
              value={marValue}
            />
              <Register
                name={"mdr"}
                value={mdrValue}
              />
              <Alu />
            <Register
              name={"acc"}
              value={accValue}
            />
          </div>
          <div className="decode-cir-container">
            <Register
              name={"cir"}
              value={cirValue}
            />
            <DecodeUnit />
          </div>
        </div>
      </div>
  );
};

export default App;