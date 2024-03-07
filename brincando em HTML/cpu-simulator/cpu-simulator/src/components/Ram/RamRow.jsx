import React from "react";

import RamValue from "./RamValue";
import RamAdress from "./RamAdress";

const RamRow = ({ ramTableRow }) => {
        return (
            <>
            <tr>
                <RamAdress ramAdress={ramTableRow.adress}/>
                <RamValue ramValue={ramTableRow.value}/>
            </tr>
            </>
        )
    /*
    console.log(ramRow)
    return (
  );
  */
};

export default RamRow;
