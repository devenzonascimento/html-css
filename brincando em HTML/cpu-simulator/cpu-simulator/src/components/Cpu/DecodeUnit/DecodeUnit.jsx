import React from "react";

import DecodeRow from "./DecodeRow";

const DecodeUnit = () => {
  const decodeTableRow = [
    {
      opcode: "0000",
      operand: "0000",
      instruction: "End",
    },
    {
      opcode: "0001",
      operand: "adress",
      instruction: "Add",
    },
    {
      opcode: "0010",
      operand: "adress",
      instruction: "Subtract",
    },
    {
      opcode: "0011",
      operand: "adress",
      instruction: "Store",
    },
    {
      opcode: "0101",
      operand: "adress",
      instruction: "Load",
    },
    {
      opcode: "0110",
      operand: "adress",
      instruction: "Branch Always",
    },
    {
      opcode: "0111",
      operand: "adress",
      instruction: "Branch if ACC = 0",
    },
    {
      opcode: "1000",
      operand: "adress",
      instruction: "Branch if ACC >= 0",
    },
    {
      opcode: "1001",
      operand: "0001",
      instruction: "Input",
    },
    {
      opcode: "0010",
      operand: "adress",
      instruction: "Output",
    },
  ];

  return (
    <>
      <div className="decode-container">
        <caption className="decode-caption">DECODIFICADOR</caption>
        <table className="decode-table">
          <tr className="decode-table-header">
            <th>Codigo OP.</th>
            <th>Operando</th>
            <th>Instrução</th>
          </tr>

          {decodeTableRow.map((row) => (
            <DecodeRow decodeTableRow={row} />
          ))}
        </table>
      </div>
    </>
  );
};

export default DecodeUnit;
