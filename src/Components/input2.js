import React from "react";
import "./input2.scss";

const Input = ({ value, setValue, label, type, read, defaultValue }) => {
  return (
    <>
      <div className="label_input">
        <input
        className='input'
          value={value}
          onChange={setValue}

          type={type}
          id={label}
          required
          autoComplete="off"
          readOnly={read}
          defaultValue={defaultValue}
        />
        <label className="label" htmlFor="label" >
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
