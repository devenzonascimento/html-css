import React from "react";

import RamValue from "./RamValue";
import RamAdress from "./RamAdress";

const RamRow = ({ ramTableRow }) => {
  return (
    <>
      <tr>
        <RamAdress ramAdress={ramTableRow.adress} />
        <RamValue ramValue={ramTableRow.value} />
      </tr>
    </>
  );
};

export default RamRow;
