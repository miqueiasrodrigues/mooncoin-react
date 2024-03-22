import React from "react";
import "./ListView.css";
import { Link } from "react-router-dom";

interface ListViewProps {
  height: number;
  children?: React.ReactNode;
  to?: string;
}

const ListView: React.FC<ListViewProps> = (props) => {
  const style: React.CSSProperties = {
    height: `${props.height}%`,
  };

  return (
    <Link to={props.to || "#"}>
      <div className="list-view" style={style}>
        {props.children}
      </div>
    </Link>
  );
};

export default ListView;
