import React from "react";
import "./Button.css";

function Button({ className, text, type, onClick, ...props }) {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
