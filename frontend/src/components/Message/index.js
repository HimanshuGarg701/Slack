import React from "react";

const Message = props => {
  return <div>{props.message ? props.message : "message"}</div>;
};

export default Message;
