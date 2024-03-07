import React, { useState } from "react";
import RamRow from "./RamRow";

import "../../styles/Ram.scss";

const Ram = () => {
  const [ramTableRow, setRamTableRow] = useState([
    {
      adress: "00000000",
      value: "00000000",
    },
    {
      adress: "00000001",
      value: "00000000",
    },
    {
      adress: "00000010",
      value: "00000000",
    },
    {
      adress: "00000011",
      value: "00000000",
    },
    {
      adress: "00000100",
      value: "00000000",
    },
    {
      adress: "00000101",
      value: "00000000",
    },
    {
      adress: "00000110",
      value: "00000000",
    },
    {
      adress: "00000111",
      value: "00000000",
    },
    {
      adress: "00001000",
      value: "00000000",
    },
    {
      adress: "00001001",
      value: "00000000",
    },
    {
      adress: "00001010",
      value: "00000000",
    },
    {
      adress: "00001011",
      value: "00000000",
    },
    {
      adress: "00001100",
      value: "00000000",
    },
    {
      adress: "00001101",
      value: "00000000",
    },
    {
      adress: "00001110",
      value: "00000000",
    },
    {
      adress: "00001111",
      value: "00000000",
    },
  ]);

  return (
    <>
      <div className="ram-container">
        <caption className="ram-caption">RAM</caption>
        <table className="ram-table">
          <tr className="ram-table-header">
            <th>Endereço</th>
            <th>Dado</th>
          </tr>

          {ramTableRow.map((row) => (
            <RamRow ramTableRow={row} />
          ))}
        </table>
      </div>
    </>
  );
};

export default Ram;
