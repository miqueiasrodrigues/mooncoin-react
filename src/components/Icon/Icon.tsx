import React from "react";
import "./Icon.css";

interface IconProps {
  backgroundImage: string;
  height?: number;
  width?: number;
  className?: string;
  backgroundSize?: number;
}

const Icon: React.FC<IconProps> = (props) => {
  const style: React.CSSProperties = {
    backgroundImage: `url(${props.backgroundImage})`,
    height: `${props.height}px`,
    width: `${props.width}px`,
    backgroundSize: `${props.backgroundSize}%`,
  };
  return <div className={`icon ${props.className || ""}`} style={style}></div>;
};

export default Icon;