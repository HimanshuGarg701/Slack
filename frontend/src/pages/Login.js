// 3rd party imports
import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// My imports
import { login } from "../redux/actions/index";

const Login = props => {
  return (
    <div>
      {props.isUser ? <Redirect to="/home" /> : null}
      Login
      <button
        onClick={() =>
          props.login({
            name: "somename",
            someotherthing: "willbegiventouserobject"
          })
        }
      >
        login
      </button>
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
