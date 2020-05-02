import React from "react";

import ButtonBase from "@material-ui/core/ButtonBase";

import "./styles.css";

const Message = props => {
  return (
    // align-self: flex-end;
    <div
      className="Message-root"
      style={{
        float: props.self ? "right" : "left"
      }}
    >
      <div
        className="Message-touchable-container"
        style={{ flexDirection: props.self ? "row-reverse" : "row" }}
      >
        <ButtonBase
          className="Message-touchable"
          onDoubleClick={() => {
            console.log("like");
          }}
          style={{
            backgroundColor: props.self ? "#a9f403" : "#03a9f4",
            alignSelf: props.self ? "flex-end" : "flex-start"
          }}
        >
          {props.body ? props.body : "message"}
        </ButtonBase>
      </div>
    </div>
  );
};

export default Message;
