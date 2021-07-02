import React from "react";
import "styles/login.css";

const LoginScreen = ({ logger }) => {
  return (
    <div className="login">
      <form onSubmit={() => logger(true)}>
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
};

export default LoginScreen;
