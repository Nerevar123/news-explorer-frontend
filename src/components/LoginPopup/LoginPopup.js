import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Label from "../Label/Label";

function LoginPopup({ onClose, onLogin, onRegisterClick, isSaving, validation, refs }) {
  const { values, handleChange, errors, isValid, resetForm } = validation;

  React.useEffect(() => {
    resetForm();
    return () => {
      resetForm();
    };
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    // onAddPlace({
    //   name: values.name || "",
    //   link: values.link || "",
    // });
    onLogin();
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
      refs={refs}
      children={
        <fieldset className="form__fields">
          <Label
            values={values}
            onChange={handleChange}
            errors={errors}
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
      }
    />
  );
}

export default LoginPopup;
