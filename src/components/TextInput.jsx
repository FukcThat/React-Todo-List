import React from "react";

export default function TextInput({
  type,
  value,
  onChange,
  label = "",
  isForm = false,
}) {
  return isForm ? (
    <div className="todo-form--input-group">
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  ) : (
    <input type={type} value={value} onChange={onChange} />
  );
}
