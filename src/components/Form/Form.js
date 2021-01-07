import React from "react";
import Button from "../Button/Button";

function Form({
  name,
  className,
  children,
  onSubmit,
  isDisabled,
  isSaving,
  isBlack,
  buttonText,
}) {
  return (
    <form
      className={`form ${className}`}
      name={name}
      method="GET"
      noValidate
      onSubmit={onSubmit}
    >
      {children}
      <Button
        className={`${className}__button`}
        text={buttonText}
        isDisabled={isDisabled}
        isSaving={isSaving}
        isBlack={isBlack}
      />
    </form>
  );
}

export default Form;
