// 3rd party imports
import React, { useState, useEffect } from "react";

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

const ws = new WebSocket("ws://localhost:1235/ws");

const Home = props => {
  // const [totalUsers, setTotalUsers] = React.useState(0);
  const [msgObjs, setMsgObjs] = React.useState([
    { body: "heyy", username: "jainamshah", id: "1", likesCount: 0, likes: [] },
    {
      body: "yo",
      username: "blahha",
      id: "2",
      likesCount: 2,
      likes: [{ username: "jainamshah" }, { username: "blahha" }]
    },
    {
      body: "whatsup",
      username: "blahha",
      id: "3",
      likesCount: 2,
      likes: [{ username: "jainamshah" }, { username: "blahha" }]
    },
    {
      body: "Im playing PUBG!!!",
      username: "jainamshah",
      id: "4",
      likesCount: 1,
      likes: [{ username: "jainamshah" }]
    }
  ]);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const addMsgObj = msgObj => {
    setMsgObjs(msgObjs.concat([msgObj]));
  };

  useEffect(() => {
    document.getElementById("Home-body").scrollIntoView({ block: "end" });
    // scrollIntoView
    // request backend for initial messages
    Axios.get("/getMessages").then(res => {
      // success, payload;

      if (res.success) {
        setMsgObjs(res.payload);
      } else {
      }
    });
    // make a socket connection to add notes as we go on
    // msgObj - {body-string, username-string,id-id of the message}
    ws.addEventListener("message", async msgObj => {
      addMsgObj(msgObj);
    });
  }, []);

  const sendMessage = () => {
    let msgBody = document.getElementById("message-input");
    if (msgBody.value.length > 0) {
      // send a socket notif to bakend
      // {body-string, id-idOFtheuser}
      ws.send({ id: props.userObj.id, body: msgBody.value });

      setMsgObjs(
        msgObjs.concat({
          body: msgBody.value,
          username: props.userObj.username,
          id: toString(msgObjs.length + 100),
          likesCount: 0,
          likes: []
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
          if (msgObjs[i].likes[j].username === props.userObj.username) {
            liked = true;
            break;
          }
        }
        //
        //
        if (liked) {
          // unlike
          msgObjs[i].likes.splice(j, 1);
          setMsgObjs([...msgObjs]);
        } else {
          // like
          msgObjs[i].likes.push({ username: props.userObj.username });
          setMsgObjs([...msgObjs]);
        }
        break;
      }
    }
  };

  return (
    <div id="Home-root">
      {/* {!props.isUser ? <Redirect to="/login" /> : null} */}

      <SwipeableDrawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        hello
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
        {msgObjs.map(msgObj => {
          var self = false;
          if (msgObj.username === props.userObj.username) {
            self = true;
          }
          return (
            <Message
              body={msgObj.body}
              name={msgObj.username}
              self={self}
              likesCount={msgObj.likes.length}
              likeAction={() => likeMessage(msgObj.id)}
            />
          );
        })}
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
    // userObj: state.userObj
    userObj: { id: "248324", username: "jainamshah" }
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
