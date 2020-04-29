// 3rd party imports
import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

// My imports
import { logout } from "../redux/actions/index";

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
    <div className="App">
      {!props.isUser ? <Redirect to="/login" /> : null}
      <button onClick={() => props.logout()}>LOGOUT</button>
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
