import React from "react";

import Input from "./Input";

import "./styles.scss"

const Register = ({ name, value, updateValue }) => {
  return (
    <>
    <div className={`register-container ${name}`}>
      <h2>{name}</h2>
      <div className="input-field">
        <Input name={name} value={value} updateValue={updateValue}/>
      </div>
    </div>
    </>
  );
};

export default Register;
