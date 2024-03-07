import React, { useState } from "react";

const RamValue = ({ ramValue }) => {
    
  const [inputValue, setInputValue] = useState(ramValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <td className="ram-cell-value">
      <input
        className="ram-input"
        maxLength={8}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        //onKeyDown={console.log("click")}
      />
    </td>
  );
};

export default RamValue;

