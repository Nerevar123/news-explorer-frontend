import React, { useEffect } from "react";
import Form from "../Form/Form";
import Label from "../Label/Label";
import { TranslationContext } from "../../contexts/TranslationContext";
import "./SearchForm.css";

function SearchForm({ onSearch, validation, isSaving }) {
  const { values, handleChange, errors, resetForm, isValid } = validation;
  const translation = React.useContext(TranslationContext);

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
      <h1 className="search__title">{translation.title}</h1>
      <p className="search__subtitle">{translation.subtitle}</p>
      <Form
        name="search-form"
        onSubmit={handleSubmit}
        isDisabled={!values.search || !isValid}
        buttonText={translation.searchButton}
        children={
          <Label
            values={values}
            onChange={handleChange}
            errors={errors}
            isSaving={isSaving}
            className="search-form"
            placeholder={translation.searchPlaceholder}
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
