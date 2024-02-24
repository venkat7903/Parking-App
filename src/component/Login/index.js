import { Component } from "react";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <form className="form-container">
          <h1 className="login-title">Login</h1>
          <div className="input-container">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input type="text" id="username" className="input" />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input type="password" id="password" className="input" />
          </div>
          <button type="button" className='login-btn'>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
