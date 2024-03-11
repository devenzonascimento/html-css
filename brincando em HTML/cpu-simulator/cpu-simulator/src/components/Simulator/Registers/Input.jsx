import React, { useState } from "react";

const Input = ({ name }) => {
    
  const [inputValue, setInputValue] = useState("00000000");

  const handleInputChange = (event) => {
    setInputValue(event.target.value = event.target.value.replace(/[^0-9]/g, ''));
  };

  return (
      <input
        id={name}
        //className={`${name}-input`}
        maxLength={8}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
  );
};

export default Input;
