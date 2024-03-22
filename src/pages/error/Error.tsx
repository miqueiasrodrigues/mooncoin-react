import React from "react";
import "./Error.css";

interface ErrorProps {

}

const Error: React.FC<ErrorProps> = (props) => {
  return <React.Fragment>
    <div className="error-page">
        <h1>Página não encontrada.</h1>
    </div>
  </React.Fragment>;
};

export default Error;
