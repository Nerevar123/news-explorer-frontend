import React from "react";
import "./Popup.css";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";

function Popup({
  onClose,
  onLogin,
  onRegister,
  onLoginClick,
  onRegisterClick,
  isRegisterPopupOpen,
  isLoginPopupOpen,
  isSaving,
  isSuccess,
  validation,
  refs,
}) {
  return (
    <section className="popup" ref={refs}>
      {isRegisterPopupOpen && (
        <RegisterPopup
          onClose={onClose}
          onRegister={onRegister}
          onLoginClick={onLoginClick}
          isSaving={isSaving}
          isSuccess={isSuccess}
          validation={validation}
        />
      )}
      {isLoginPopupOpen && (
        <LoginPopup
          onClose={onClose}
          onLogin={onLogin}
          onRegisterClick={onRegisterClick}
          isSaving={isSaving}
          validation={validation}
        />
      )}
    </section>
  );
}

export default Popup;
