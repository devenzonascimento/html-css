import React, { useState } from "react";

const Input = ({ name, value, updateValue }) => {
    
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (event) => {
    let newInputValue = event.target.value
    setInputValue(newInputValue = newInputValue.replace(/[^0-9]/g, ''));
    updateValue(newInputValue)
  };

  return (
      <input
        className={`${name}-input`}
        maxLength={8}
        type="text"
        value={value}
        onChange={handleInputChange}
      />
  );
};

export default Input;
