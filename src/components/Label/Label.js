import React from "react";

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
    <label className="label">
      <span className="label__placeholder">{labelText}</span>
      <input
        name={name}
        className={`label__input ${
          errors[name] && "label__input_type_error"
        } ${className}`}
        value={values[name] || ""}
        placeholder={placeholder}
        {...props}
      />
      <span className={`label__error ${errors[name] && "label__error_active"}`}>
        {errors[name] || ""}
      </span>
    </label>
  );
}

export default Label;
