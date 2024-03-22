import React from "react";
import "./Button.css";

type ButtonType = "button" | "textButton";

interface ButtonProps {
  text?: string;
  className?: string;
  type?: ButtonType;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className={
        props.type && props.type === "textButton" ? "text-button" : "button"
      }
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};

export default Button;
