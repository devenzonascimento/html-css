import React, { useState } from "react";

const RamInput = ({ ramValue }) => {
    
  const [inputValue, setInputValue] = useState(ramValue);

  const handleInputChange = (event) => {
    setInputValue(event.target.value = event.target.value.replace(/[^0-9]/g, ''));
  };

  return (
    <td className="ram-cell-value">
      <input
        className="ram-input"
        maxLength={8}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </td>
  );
};

export default RamInput;

