import React from "react";
import { connect } from "react-redux";
import { logIn } from "../redux/actions/loginActions";
import "styles/login.css";

class LoginScreen extends React.Component {
  handleLogIn = (e) => {
    e.preventDefault();
    this.props.logIn();
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={(e) => this.handleLogIn(e)}>
          <div className="formElement">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="formElement">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required />
          </div>
          <button className="btn">login</button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return;
// };

const mapDispatchToProps = (dispatch) => {
  return {
    logIn: () => {
      dispatch(logIn());
    },
  };
};

export default connect("", mapDispatchToProps)(LoginScreen);
