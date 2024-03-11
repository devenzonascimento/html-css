import React from "react";

import RamInput from "./RamInput";

const RamRow = ({ ramTableRow }) => {
  return (
    <>
      <tr>
        <td>{ramTableRow.adress}</td>
        <RamInput ramValue={ramTableRow.value} />
      </tr>
    </>
  );
};

export default RamRow;
