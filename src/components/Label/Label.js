import React from "react";
import "./Label.css";

function Label({
  className,
  name,
  labelText,
  placeholder,
  isBlack,
  values,
  errors,
  ...props
}) {
  return (
    <label className={`label ${className}__label`}>
      <span className={`label__placeholder ${className}__placeholder`}>
        {labelText}
      </span>
      <input
        name={name}
        className={`label__input ${className}__input`}
        value={values[name] || ""}
        placeholder={placeholder}
        {...props}
      />
      <span
        className={`label__error ${className}__error ${
          errors[name] ? `${className}__error_active` : ""
        }`}
      >
        {errors[name] || ""}
      </span>
    </label>
  );
}

export default Label;
