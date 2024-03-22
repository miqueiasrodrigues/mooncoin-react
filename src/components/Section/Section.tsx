import React from "react";
import "./Section.css";

interface SectionProps {
  height: number;
  backgroundColor?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const style: React.CSSProperties = {
    height: `${props.height}%`,
    backgroundColor: props.backgroundColor,
  };

  return (
    <section className="section" style={style}>
      {props.children}
    </section>
  );
};

export default Section;
