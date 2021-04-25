import React, { useEffect } from "react";
import Label from "../Label/Label";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { TranslationContext } from "../../contexts/TranslationContext";

function RegisterPopup({
  onClose,
  onRegister,
  isSaving,
  isSuccess,
  validation,
  onLoginClick,
}) {
  const { values, handleChange, errors, isValid, resetForm } = validation;
  const translation = React.useContext(TranslationContext);

  useEffect(() => {
    resetForm();
    return () => {
      resetForm();
    };
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onRegister({
      email: values.email || "",
      password: values.password || "",
      name: values.name || "",
    });
  }

  return (
    <PopupWithForm
      title={translation.register}
      name="popup-form"
      buttonText={translation.registerButton}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSaving={isSaving}
      isSuccess={isSuccess}
      isDisabled={!isValid}
      onLinkButtonClick={onLoginClick}
      linkButtonText={translation.loginButton}
      children={
        <>
          <fieldset className="form__fields">
            <Label
              values={values}
              onChange={handleChange}
              errors={errors}
              isSaving={isSaving}
              className="popup-form"
              name="email"
              placeholder={translation.emailPlaceholder}
              labelText="Email"
              type="email"
              required
              autoComplete="username"
            />
            <Label
              values={values}
              onChange={handleChange}
              errors={errors}
              isSaving={isSaving}
              className="popup-form"
              name="password"
              placeholder={translation.passwordPlaceholder}
              labelText={translation.password}
              isBlack
              type="password"
              required
              minLength="4"
              maxLength="16"
              autoComplete="current-password"
            />
            <Label
              values={values}
              onChange={handleChange}
              errors={errors}
              isSaving={isSaving}
              className="popup-form"
              name="name"
              placeholder={translation.namePlaceholder}
              labelText={translation.username}
              type="text"
              required
              minLength="2"
              maxLength="40"
              pattern="[a-zA-Zа-яА-Я -]{1,}"
            />
          </fieldset>
          <span
            className={`form__error ${
              errors.submit ? "form__error_active" : ""
            }`}
          >
            {errors.submit || ""}
          </span>
        </>
      }
    />
  );
}

export default RegisterPopup;
