import { Component } from "react";
import "./index.css";

class Login extends Component {
  state = {
    userInput: "",
    password: "",
    showErrorMsg: false,
    errorMsg: "",
  };

  onSubmitSuccess = () => {};

  onClickSubmit = (event) => {
    event.preventDefault();
    const { userInput, password } = this.state;

    if (
      userInput === "venkat" ||
      userInput === "santhosh" ||
      userInput === "ajay" ||
      userInput === "maha" ||
      userInput === "pavani"
    ) {
      if (
        password === "venkat7903" ||
        password === "santhosh" ||
        password === "ajay" ||
        password === "maha" ||
        password === "pavani"
      ) {
        const { history } = this.props;
        console.log(history);
        history.push("/");
      } else {
        this.setState({
          showErrorMsg: true,
          errorMsg: "Invalid Password",
        });
      }
    } else {
      this.setState({
        showErrorMsg: true,
        errorMsg: "Invalid Username",
      });
    }
  };

  onChangeUsername = (event) => {
    this.setState({ userInput: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { userInput, password, showErrorMsg, errorMsg } = this.state;

    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.onClickSubmit}>
          <h1 className="login-title">Park Vue</h1>
          <div className="input-container">
            <label htmlFor="username" className="input-label">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="input"
              value={userInput}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="input-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={this.onChangePassword}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {showErrorMsg && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    );
  }
}

export default Login;
