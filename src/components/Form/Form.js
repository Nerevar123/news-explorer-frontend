import React from "react";
import "./Form.css";
import Button from "../Button/Button";

function Form({ name, onSubmit, isDisabled, buttonText, children }) {
  return (
    <form
      className={`form ${name}`}
      name={name}
      method="GET"
      noValidate
      onSubmit={onSubmit}
    >
      {children}
      <Button
        className={`${name}__button ${
          isDisabled ? `${name}__button_disabled` : ""
        }`}
        text={buttonText}
        type="submit"
        disabled={isDisabled}
      />
    </form>
  );
}

export default Form;
