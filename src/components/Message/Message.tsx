import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Message.css";
import { IResponse } from "../../models/interfaces/Response";
import { setResponse } from "../../redux/appReducer";

interface MessageProps {
  height: number;
  response: IResponse;
}

const Message: React.FC<MessageProps> = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(setResponse({ ...props.response, message: "" }));
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [props.response.message, dispatch]);

  const style: React.CSSProperties = {
    backgroundColor: props.response.status === "success" ? "var(--dark-green)" : "var(--crimson)",
    height: `${props.height}%`,
  };

  return (
    <div className="message" style={style}>
      {props.response.message}
    </div>
  );
};

export default Message;
