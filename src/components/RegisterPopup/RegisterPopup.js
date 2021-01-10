import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import Label from "../Label/Label";

function RegisterPopup({ onClose, onAddPlace, isSaving, validation, refs }) {
  const { values, handleChange, errors, isValid, resetForm } = validation;

  React.useEffect(() => {
    resetForm();
    return () => {
      resetForm();
    };
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: values.name || "",
      link: values.link || "",
    });
  }

  return (
    <PopupWithForm
      title="Регистрация"
      name="popup-form"
      buttonText="Зарегистрироваться"
      onClose={onClose}
      onSubmit={handleSubmit}
      isSaving={isSaving}
      isDisabled={!isValid}
      // refs={refs}
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
          <Label
            values={values}
            onChange={handleChange}
            errors={errors}
            className="popup-form"
            name="name"
            placeholder="Введите своё имя"
            labelText="Имя"
            type="text"
            required
            minLength="2"
            maxLength="40"
            pattern="[a-zA-Zа-яА-Я -]{1,}"
          />
        </fieldset>
      }
    />
  );
}

export default RegisterPopup;
