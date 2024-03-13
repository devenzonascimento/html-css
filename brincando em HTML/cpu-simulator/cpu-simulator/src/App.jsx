import React, { useState, useEffect } from "react";

import DecodeUnit from "./components/Simulator/DecodeUnit/DecodeUnit";
import Ram from "./components/Simulator/Ram/Ram";
import Settings from "./components/Settings/Settings";
import DebugWindow from "./components/DebugWindow/DebugWindow";
import Alu from "./components/Simulator/Registers/Alu";
import Register from "./components/Simulator/Registers/Register";


const App = () => {
  
  const [memoryValue, setMemoryValue] = useState(memory);
  
  const [pcValue, setPcValue] = useState("00000000");
  const [marValue, setMarValue] = useState("00000000");
  const [mdrValue, setMdrValue] = useState("00000000");
  const [accValue, setAccValue] = useState("00000000");
  const [cirValue, setCirValue] = useState("00000000");
  const [currentStep, setcurrentStep] = useState(0);
  

  const handleUpdatePc = (newValue) => {
    setPcValue(newValue);
  };
  const handleUpdateMar = (newValue) => {
    setMarValue(newValue);
  };
  const handleUpdateMdr = (newValue) => {
    setMdrValue(newValue);
  };
  const handleUpdateAcc = (newValue) => {
    setAccValue(newValue);
  };
  const handleUpdateCir = (newValue) => {
    setCirValue(newValue);
  };

  const handleUpdateMemory = (newMemory) => {
    setMemoryValue({ ...newMemory });
  };



  const updateAllRegisters = () => {
    setPcValue(pc);
    setMarValue(mar);
    setMdrValue(mdr);
    setAccValue(acc);
    setCirValue(cir);
    setMemoryValue({...memory})
    // console.log(`att: ${pcValue}`);
    // console.log(`att: ${marValue}`);
    // console.log(`att: ${mdrValue}`);
    // console.log(`att: ${accValue}`);
    // console.log(`att: ${cirValue}`);
  }

  const executeNextStep = () => {
    if (currentStep < main.length) {
      console.log(main[currentStep])
      main[currentStep]();
      setcurrentStep((prev) => prev + 1)
      updateAllRegisters()
      // console.log(`att: ${pcValue}`);
      // console.log(`att: ${marValue}`);
      // console.log(`att: ${mdrValue}`);
      // console.log(`att: ${accValue}`);
      // console.log(`att: ${cirValue}`);
    }
  };

  return (
    <>
      <div className="container">
        <Settings />
        <DebugWindow executeNextStep={executeNextStep} />
        <div className="simulator-container">
          <Ram memory={memoryValue} onAtualizarMemory={handleUpdateMemory} />
          <div className="registers-container">
          {/*
          <p>PC: {pcValue}</p>
          <p>MAR: {marValue}</p>
          <p>MDR: {mdrValue}</p>
          <p>ACC: {accValue}</p>
          <p>CIR: {cirValue}</p>
          {Object.entries(memory).map((row) => (
            <pre>{row}</pre>
          ))}
          */}
            <Register
              name={"pc"}
              value={pcValue}
              updateValue={handleUpdatePc}
            />
            <Register
              name={"mar"}
              value={marValue}
              updateValue={handleUpdateMar}
            />
            <Register
              name={"acc"}
              value={accValue}
              updateValue={handleUpdateAcc}
            />
            <Alu />
            <Register
              name={"mdr"}
              value={mdrValue}
              updateValue={handleUpdateMdr}
            />
          </div>
          <div className="decode-cir-container">
            <Register
              name={"cir"}
              value={cirValue}
              updateValue={handleUpdateCir}
            />
            <DecodeUnit />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

let memory = {
  "00000000": "10010001",
  "00000001": "00111111",
  "00000010": "10010001",
  "00000011": "00011111",
  "00000100": "10010010",
  "00000101": "00000000",
  "00000110": "00000000",
  "00000111": "00000000",
  "00001000": "00000000",
  "00001001": "00000000",
  "00001010": "00000000",
  "00001011": "00000000",
  "00001100": "00000000",
  "00001101": "00000000",
  "00001110": "00000000",
  "00001111": "00000000",
}
let pc = 0
let mar = 0
let mdr = 0
let acc = 0
let cir = 0
let contador = 0;
let opcode = "";
let operand = "";

const search = [
  () => (pc = toBinary(contador)),
  () => (mar = pc),
  () => (mdr = memory[mar]),
  () => (cir = mdr),
  () => (pc = toBinary((contador += 1))),
  () => decode(cir),
];
function instructionExecute(array) {
  main = main.concat(array);
}
let main = [() => instructionExecute(search)];

function decode(cir) {
  opcode = cir.substring(0, 4);
  operand = cir.substring(4, 8);

  switch (opcode) {
    case "0000":
      return false;

    case "0001":
      instructionExecute(addInstruction);
      break;

    case "0010":
      instructionExecute(subInstruction);
      break;
    case "0011":
      instructionExecute(storeInstruction);
      break;
    case "0101":
      instructionExecute(loadInstruction);
      break;
    case "1001":
      operand === "0001" ? instructionExecute(inputInstruction) : false;
      operand === "0010" ? instructionExecute(outputInstruction) : false;

    default:
      return true;
  }
}

const addInstruction = [
  () => (mar = operand.padStart(8, "0")),
  () => (mdr = memory[mar]),
  () => (acc = toBinary(toDecimal(acc) + toDecimal(mdr))),
  () => instructionExecute(search),
];

const subInstruction = [
  () => (mar = operand.padStart(8, "0")),
  () => (mdr = memory[mar]),
  () => (acc = toBinary(toDecimal(acc) - toDecimal(mdr))),
  () => instructionExecute(search),
];

const storeInstruction = [
  () => (mar = operand.padStart(8, "0")),
  () => (memory[mar] = acc),
  () => instructionExecute(search),
];

const loadInstruction = [
  () => (mar = operand.padStart(8, "0")),
  () => (mdr = memory[mar]),
  () => (acc = mdr),
  () => instructionExecute(search),
];

const inputInstruction = [
  () => (acc = toBinary(prompt("Informe um valor"))),
  () => instructionExecute(search),
];

const outputInstruction = [
  () => alert(acc),
  () => instructionExecute(search),
];

function toBinary(num) {
  return Number(num).toString(2).padStart(8, "0");
}
function toDecimal(num) {
  return parseInt(num, 2);
}


// DE ACORDO COM MEUS TESTES OS STATES ESTÃO SENDO ATUALIZADOS, POREM OS COMPONENTES NÃO ESTÃO RECEBENDO OS VALORES
