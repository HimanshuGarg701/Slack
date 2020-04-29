// 3rd party imports
import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// My imports
import { login } from "../redux/actions/index";
import TabPanel from '../components/TabPanel'

const Login = props => {
  const dummySubmit = (data) => {
    console.log(data)
    props.login({
      name: "somename",
      someotherthing: "willbegiventouserobject"
    })
  }
  return (
    <div>
      {props.isUser ? <Redirect to="/home" /> : null}
      <TabPanel submit={dummySubmit}/>
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
