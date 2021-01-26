import React, { useEffect } from "react";
import Form from "../Form/Form";
import Label from "../Label/Label";
import "./SearchForm.css";

function SearchForm({ onSearch, validation, isSaving }) {
  const { values, handleChange, errors, resetForm, isValid } = validation;

  useEffect(() => {
    resetForm();
    return () => {
      resetForm();
    };
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(values.search || "");
  }

  return (
    <section className="search">
      <h1 className="search__title">Что творится в мире?</h1>
      <p className="search__subtitle">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <Form
        name="search-form"
        onSubmit={handleSubmit}
        isDisabled={!values.search || !isValid}
        buttonText="Искать"
        children={
          <Label
            values={values}
            onChange={handleChange}
            errors={errors}
            isSaving={isSaving}
            className="search-form"
            placeholder="Введите тему новости"
            name="search"
            type="text"
            required
            minLength="2"
            autoComplete="off"
            autoFocus
          />
        }
      />
    </section>
  );
}

export default SearchForm;
