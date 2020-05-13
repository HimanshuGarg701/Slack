// 3rd party imports
import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// My imports
import { login } from "../redux/actions";
import TabPanel from "../components/TabPanel";

import Axios from "axios";

const Login = props => {
  const handleLogin = data => {
    console.log(data);
    props.login({
      username: data.username
    });
  };

  const handleSignup = data => {
    console.log(data);
    console.log(data);
    props.login({
      username: data.username
    });
  };
  return (
    <div>
      {props.isUser ? <Redirect to="/home" /> : null}
      <TabPanel handleLogin={handleLogin} handleSignup={handleSignup} />
    </div>
  );
};

const mapStateToProps = state => {
  return { isUser: state.isUser };
};
function mapDispatchToProps(dispatch) {
  return {
    login: userObj => dispatch(login(userObj))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
