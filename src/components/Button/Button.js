import React from "react";
import './Button.css';

function Button({ className, text, type, onClick }) {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

export default Button;
