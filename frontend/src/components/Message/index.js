import React from "react";

import ButtonBase from "@material-ui/core/ButtonBase";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
        className="Message-name-container"
        style={{
          flexDirection: props.self ? "row-reverse" : "row",
          marginRight: props.self ? "15px" : "0px",
          marginLeft: props.self ? "0px" : "15px"
        }}
      >
        {props.name ? props.name : "name"}
      </div>
      <div
        className="Message-touchable-container"
        style={{ flexDirection: props.self ? "row-reverse" : "row" }}
      >
        <ButtonBase
          className="Message-touchable"
          onDoubleClick={props.likeAction}
          style={{
            backgroundColor: props.self ? "#a9f403" : "#03a9f4",
            alignSelf: props.self ? "flex-end" : "flex-start"
          }}
        >
          {props.body ? props.body : "message"}
        </ButtonBase>
        {props.likesCount > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              paddingLeft: "3px",
              paddingRight: "3px"
            }}
          >
            <FavoriteIcon
              style={{
                alignSelf: props.self ? "flex-end" : "flex-start",
                color: "#f74e6e"
              }}
            />
            {props.likesCount > 1 ? props.likesCount : ""}
          </div>
        ) : null}
      </div>
      <div
        className="Message-date"
        style={{
          flexDirection: props.self ? "row-reverse" : "row",
          marginRight: props.self ? "10px" : "0px",
          marginLeft: props.self ? "0px" : "10px"
        }}
      >
        {props.date ? props.date : "date"}
      </div>
    </div>
  );
};

export default Message;
