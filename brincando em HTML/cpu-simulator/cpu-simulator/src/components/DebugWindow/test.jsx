//Começando a alterar aqui ii ii ii ii
// iii
// iii

import React, { useState } from "react";

import DecodeUnit from "./components/Simulator/DecodeUnit/DecodeUnit";
import Ram from "./components/Simulator/Ram/Ram";
import Settings from "./components/Settings/Settings";
import DebugWindow from "./components/DebugWindow/DebugWindow";
import Alu from "./components/Simulator/Registers/Alu";
import Register from "./components/Simulator/Registers/Register";

const App = () => {

const [memory, setMemory] = useState({
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
});

const [pcValue, setPcValue] = useState("00000000");
const [marValue, setMarValue] = useState("00000000");
const [mdrValue, setMdrValue] = useState("00000000");
const [accValue, setAccValue] = useState("00000000");
const [cirValue, setCirValue] = useState("00000000");


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
  setMemory({ ...newMemory });
};

let currentStep = 0
const executeNextStep = () => {
  //console.log(`att: ${pcValue}`);
  //console.log(`att: ${marValue}`);
  //console.log(`att: ${mdrValue}`);
  //console.log(`att: ${accValue}`);
  //console.log(`att: ${cirValue}`);
  if (currentStep < main.length) {
    console.log(main[currentStep])
    main[currentStep]();
    currentStep++;
  }
};

return (
  <>
    <div className="container">
      <Settings />
      <DebugWindow executeNextStep={executeNextStep} />
      <div className="simulator-container">
        <Ram memory={memory} onAtualizarMemory={handleUpdateMemory} />
        <div className="registers-container">
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

let opcode = "";
let operand = "";

const search = [
  () => setPcValue(toBinary(contador)),
  () => setMarValue(pcValue),
  () => setMdrValue(memory[marValue]),
  () => setCirValue(mdrValue),
  () => setPcValue(toBinary(contador += 1)),
  () => decode(cirValue),
];

function instructionExecute(array) {
  main = main.concat(array);
}

let main = [() => instructionExecute(search)];

function decode(cirValue) {
  opcode = cirValue.substring(0, 4);
  operand = cirValue.substring(4, 8);

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
  () => setMarValue(marValue = operand.padStart(8, "0")),
  () => setMdrValue(mdrValue = memory[marValue]),
  () => setAccValue(accValue = toBinary(toDecimal(accValue) + toDecimal(mdrValue))),
  () => instructionExecute(search),
];

const subInstruction = [
  () => setMarValue(marValue = operand.padStart(8, "0")),
  () => setMdrValue(mdrValue = memory[marValue]),
  () => setAccValue(accValue = toBinary(toDecimal(accValue) - toDecimal(mdrValue))),
  () => instructionExecute(search),
];

const storeInstruction = [
  () => setMarValue(marValue = operand.padStart(8, "0")),
  () => setMemory(memory[marValue] = accValue),
  () => instructionExecute(search),
];

const loadInstruction = [
  () => setMarValue(marValue = operand.padStart(8, "0")),
  () => setMdrValue(mdrValue = memory[marValue]),
  () => setAccValue(accValue = mdrValue),
  () => instructionExecute(search),
];

const inputInstruction = [
  () => setAccValue(accValue = toBinary(prompt("Informe um valor"))),
  () => instructionExecute(search),
];

const outputInstruction = [
  () => alert(accValue),
  () => instructionExecute(search),
];

function toBinary(num) {
  return Number(num).toString(2).padStart(8, "0");
}

function toDecimal(num) {
  return parseInt(num, 2);
}

export default App;
