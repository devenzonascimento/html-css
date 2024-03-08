import React from "react";

import DecodeUnit from "./DecodeUnit/DecodeUnit";

import Pc from "./Registers/Pc";
import Mar from "./Registers/Mar";
import Acc from "./Registers/Acc";
import Mdr from "./Registers/Mdr";
import Cir from "./Registers/Cir";
import Alu from "./Registers/Alu";

import "../../styles/Cpu.scss";

const Cpu = () => {
  return (
    <>
      <div className="cpu-container">
        <h1>CPU</h1>
        < Pc />
        < Mar />
        < Acc />
        < Mdr />
        < Cir />
        < Alu />
        < DecodeUnit />
      </div>
    </>
  );
};

export default Cpu;
