import React from "react";
import "./style.css";
function InputComponent({ type, state, setState, forValue, required, labelText }) {
  return (
    <>
      <label className="custom-label" htmlFor={forValue}>{labelText}</label>
      <br />
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Marry Doe"
        required={required}
        className="custom-input"
        id={forValue}


      />
    </>
  );
}

export default InputComponent;
