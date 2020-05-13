// 3rd party imports
import React, { useState, useEffect, useRef } from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

// My imports
import { logout } from "../../redux/actions/index";
import Message from "../../components/Message/index";
import "./styles.css";
import Axios from "axios";
import CurrentActiveUsers from "../../components/CurrentActiveUsers";

const ws = new WebSocket("ws://localhost:1235/ws");

const Home = props => {
  // const [totalUsers, setTotalUsers] = React.useState(0);
  const [msgObjs, setMsgObjs] = React.useState([]);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const addMsgObj = msgObj => {
    msgObjs.push(msgObj);
    setMsgObjs([...msgObjs]);
    // console.log(msgObjs);
  };

  useEffect(() => {
    // request backend for initial messages
    Axios.get("/getMessages").then(res => {
      // success, payload;
      if (res.data.success) {
        for (let i = 0; i < res.data.payload.length; i++) {
          addMsgObj(res.data.payload[i]);
        }
      } else {
        alert("Please reload the page");
      }
    });
    // make a socket connection to add notes as we go on

    ws.addEventListener("message", async msgObj => {
      let parsedData = JSON.parse(msgObj.data); 
      if (parsedData.typeOfMessage == "MESSAGE") {
        //
        addMsgObj(parsedData.payload);
        //
      } else if (parsedData.typeOfMessage == "LIKE") {
        //
        for (let i = 0; i < msgObjs.length; i++) {
          if (parsedData.payload.id == msgObjs[i].id) {
            // change that object to this new object
            msgObjs[i].likes = parsedData.payload.likes;
            msgObjs[i].likeCount = parsedData.payload.likeCount;
            setMsgObjs([...msgObjs]);
            break;
          }
        }
        //
      }
    });
  }, []);

  useEffect(() => {
    var messageContainer = document.getElementById("Home-body");
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }, [msgObjs.length]);

  const sendMessage = () => {
    let msgBody = document.getElementById("message-input");
    if (msgBody.value.length > 0) {
      ws.send(
        JSON.stringify({
          username: props.userObj.username,
          body: msgBody.value
        })
      );

      msgBody.value = "";
    }
  };

  const likeMessage = messageId => {
    var i = 0;
    var j = 0;
    var liked = false;
    for (i = 0; i < msgObjs.length; i++) {
      if (msgObjs[i].id == messageId) {
        //
        //
        for (j = 0; j < msgObjs[i].likes.length; j++) {
          if (msgObjs[i].likes[j] === props.userObj.username) {
            liked = true;
            break;
          }
        }
        //
        //
        if (liked) {
          // unlike
          ws.send(
            JSON.stringify({
              likeFlag: -1,
              id: messageId,
              username: props.userObj.username
            })
          );

          // test: remove after
          // msgObjs[i].likes.splice(j, 1);
          // setMsgObjs([...msgObjs]);
          // end
        } else {
          // like
          ws.send(
            JSON.stringify({
              likeFlag: 1,
              id: messageId,
              username: props.userObj.username
            })
          );

          // test: remove after
          // msgObjs[i].likes.push(props.userObj.username);
          // setMsgObjs([...msgObjs]);
          // end
        }
        break;
      }
    }
  };

  return (
    <div id="Home-root">
      {!props.isUser || props.userObj == null ? <Redirect to="/login" /> : null}

      <SwipeableDrawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <CurrentActiveUsers setDrawerOpen={setDrawerOpen} />
      </SwipeableDrawer>

      <div id="Home-header">
        <Button
          className="Home-header-button"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => props.logout()}
        >
          LOGOUT
        </Button>

        <IconButton
          aria-label="users"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <AccountCircleIcon color="primary" style={{ fontSize: 45 }} />
        </IconButton>
      </div>
      <div id="Home-body">
        {msgObjs != null
          ? msgObjs.map((msgObj, i) => {
              var self = false;
              if (msgObj.username === props.userObj.username) {
                self = true;
              }
              return (
                <Message
                  body={msgObj.body}
                  name={msgObj.username}
                  self={self}
                  date={msgObj.date}
                  likeCount={msgObj.likes.length}
                  likeAction={() => likeMessage(msgObj.id)}
                />
              );
            })
          : null}
      </div>

      <div id="Home-footer">
        <TextField
          id="message-input"
          style={{ width: "80%" }}
          label=""
          defaultValue=""
          variant="outlined"
        />
        <IconButton
          aria-label="send"
          onClick={() => {
            sendMessage();
          }}
        >
          <SendIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isUser: state.isUser,
    userObj: state.userObj
    // userObj: { id: "248324", username: "jainamshah" }
  };
};
function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// STYLING
