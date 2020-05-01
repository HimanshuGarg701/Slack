// 3rd party imports
import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import SendIcon from "@material-ui/icons/Send";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

// My imports
import { logout } from "../../redux/actions/index";
import "./styles.css";

const Home = props => {
  const [totalUsers, setTotalUsers] = React.useState(0);
  const [notes, setNotes] = React.useState(["test"]);
  const [note, setNote] = React.useState("");

  const handleSubmit = () => {
    console.log(note);
    setNote("");
  };

  React.useEffect(() => {}, []);

  return (
    <div id="Home-root">
      {/* {!props.isUser ? <Redirect to="/login" /> : null} */}
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
        <Button
          className="Home-header-button"
          variant="contained"
          color="primary"
          size="large"
          startIcon={<AccountCircleIcon />}
          onClick={() => props.logout()}
        >
          Profile
        </Button>
      </div>
      <div id="Home-footer">
        <TextField
          style={{ width: "80%" }}
          label=""
          defaultValue=""
          variant="outlined"
        />
        <IconButton aria-label="delete">
          <SendIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { isUser: state.isUser, userObj: state.userObj };
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
