import React from "react";
import "./Card.css";

interface CardProps {
  height?: number;
  width?: number;
  backgroundColor?: string;
  children?: React.ReactNode;
  className?: string;
  borderRadius?: number;
  
}

const Card: React.FC<CardProps> = (props) => {
  const style: React.CSSProperties = {
    height: `${props.height}%`,
    width: `${props.width}%`,
    backgroundColor: props.backgroundColor,
    borderRadius: `${props.borderRadius}px`,
  };

  return (
    <div className={`card ${props.className || ""}`} style={style}>
      {props.children}
    </div>
  );
};

export default Card;
