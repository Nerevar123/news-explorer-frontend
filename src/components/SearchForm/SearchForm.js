import React from "react";
import './SearchForm.css';
import Form from "../Form/Form";
import Label from "../Label/Label";

// function SearchForm() {
//   return (
//     <form className="search-form">
//       {/* <label htmlFor="">
//         <input className="search-form__input" type="text" />
//       </label> */}

//       <Button text="Искать" />
//     </form>
//   );
// }

function SearchForm({ onSubmit, validation }) {
  const { values, handleChange, errors, isValid, resetForm } = validation;
  // React.useEffect(() => {
  //   resetForm();
  //   return () => {
  //     resetForm();
  //   };
  // }, [resetForm]);

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   onAddPlace({
  //     name: values.name || "",
  //     link: values.link || "",
  //   });
  // }

  return (
    <section className="search">
    <h1 className="search__title">Что творится в мире?</h1>
    <p className="search__subtitle">
      Находите самые свежие статьи на любую тему и сохраняйте в своём личном
      кабинете.
    </p>
    <Form
    name="search-form"
    onSubmit={onSubmit}
    buttonText="Искать"
    children={
        <Label
          values={values}
          onChange={handleChange}
          errors={errors}
          className="search-form"
          placeholder="Введите тему новости"
          name="name"
          type="text"
          required
          minLength="2"
          maxLength="30"
        />
    }
    />
  </section>
  );
}

export default SearchForm;
