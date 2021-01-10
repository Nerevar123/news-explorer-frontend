import React from "react";
import Button from "../Button/Button";
import './Form.css';

function Form({
  name,
  children,
  onSubmit,
  isDisabled,
  isSaving,
  isBlack,
  buttonText,
}) {
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
        className={`${name}__button`}
        text={buttonText}
        isDisabled={isDisabled}
        isSaving={isSaving}
        isBlack={isBlack}
      />
    </form>
  );
}

export default Form;
