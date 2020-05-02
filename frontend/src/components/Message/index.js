import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

const useStyles = makeStyles({
  self: { backgroundColor: "#4caf50" },
  other: { backgroundColor: "#03a9f4" }
});

const Message = props => {
  const classes = useStyles();
  return (
    // align-self: flex-end;
    <div className={("Message-root", classes.self)}>
      {props.body ? props.body : "message"}
    </div>
  );
};

export default Message;
