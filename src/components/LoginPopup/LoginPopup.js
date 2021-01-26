import React, { useEffect } from "react";
import Label from "../Label/Label";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginPopup({
  onClose,
  onLogin,
  onRegisterClick,
  isSaving,
  validation,
}) {
  const { values, handleChange, errors, isValid, resetForm } = validation;

  useEffect(() => {
    resetForm();
    return () => {
      resetForm();
    };
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({
      email: values.email || "",
      password: values.password || "",
    });
  }

  return (
    <PopupWithForm
      title="Вход"
      name="popup-form"
      buttonText="Войти"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSaving={isSaving}
      isDisabled={!isValid}
      onLinkButtonClick={onRegisterClick}
      linkButtonText="Зарегистрироваться"
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
              placeholder="Введите почту"
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
              placeholder="Введите пароль"
              labelText="Пароль"
              isBlack
              type="password"
              required
              minLength="4"
              maxLength="16"
              autoComplete="current-password"
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

export default LoginPopup;
