import React from "react";
import "./input2.scss";

const Input = ({ value, setValue, label, type }) => {
  return (
    <>
      <div className="label_input">
        <input
        className='input'
          value={value}
          className="input"
          onChange={setValue}
          type={type}
          id={label}
          required
          autoComplete="off"
        />
        <label className="label" htmlFor="label" className='label'>
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
