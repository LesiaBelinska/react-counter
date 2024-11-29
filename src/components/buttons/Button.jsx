import React from "react";
import "./Button.css";

const Button = ({ onClick, className, buttonText }) => (
  <button onClick={onClick} className={className}>
    {buttonText}
  </button>
);

export default Button;