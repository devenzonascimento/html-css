import React, { useState } from "react";
import Header from "./Header"
import Body from "./Body"

import "../../styles/Ram.scss";

const Table = () => {

const [dataTable, setdataTable] = useState({
    caption: "Memoria RAM", 
    header: ["Endereço", "Dado"],
    body: [
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
    ]
})

  return (
    <>
      <div className="table-container">
        <caption className="table-caption">{dataTable.caption}</caption>
        <table className="table">
            <Header dataHeader={dataTable.header}/>
            <Body dataBody={dataTable.body}/>
        </table>
      </div>
    </>
  );
};
export default Table;