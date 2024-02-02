import React from "react";

const Input = ({ id, type, label, disabled }) => (
  <input
    className="form-group__input w-full px-3 py-2 mb-4 border rounded bg-opacity-25 bg-white border-gray-300 focus:outline-none focus:border-blue-500"
    type={type}
    id={id}
    placeholder={label}
    disabled={disabled}
  />
);

export default Input;
