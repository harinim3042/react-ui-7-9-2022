import React, { PureComponent } from "react";
import "./style";
import "./spacing";

class LoginForm extends PureComponent {
  constructor() {
    super();
    this.state = {
      users: null,
      emailValid: null,
      passwordValid: null,
      formValid: null
    };
  }
   handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        let validEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
          value
        );
        this.setState({ emailValid: validEmail });
        break;
      case "password":
        let passValid = /^(.*[A-Z].*)$/.test(value);
        this.setState({ passwordValid: passValid });
        break;
      default:
        return "";
    }
  };

  onSubmit = e => {
    e.preventDefault();
    let validForm = false,
    const email = this.refs.email.value
    const password = this.refs.password.value;
    let getuser = this.props.getLogin().user[0];
     if (getuser.email === email && password === getuser.password) {
      this.props.onSignIn(email, password);
      this.setState({ formValid: true });
    } else {     
      this.setState({ formValid: false });
      this.errorClass(false);
    }
  };

  errorClass = error => {
    if (error === null) return "";
    return error ? "" : "has-error";
  };

  render() {
    let chkEmail = this.state.emailValid;
    let chkPwd = this.state.passwordValid;
    let formValid = this.state.formValid;
    return (
      <div className="body-login-bg pb-14 pt-14 form-center ">
      <div className="container-bg pe-5 ps-5">
        <form
          autoComplete="off"
          onSubmit={this.onSubmit}
          id="loginForm"
          className={`${this.errorClass(formValid)}`}
        >
          {!this.state.formValid && (
            <span className="form-error">Email Or Password not matched</span>
          )}

          <div className={`form-group ${this.errorClass(chkEmail)}`}>
            <label htmlFor="email" className="mt-8 pb-1"> Email: </label>
            <input
              type="email"
              ref="email"
              name="email"
              onChange={this.handleChange}
              className="form-control"
              required
            />
            {!this.state.emailValid && (
              <span className="error-fields">
                email should be formatted( xxx@xxx.com )
              </span>
            )}
          </div>

          <div className={`form-group ${this.errorClass(chkPwd)}`}>
            <label htmlFor="password" className="mt-4 pb-1">Password: </label>
            <input
              type="password"
              ref="password"
              name="password"
              required
              className="form-control"
              onChange={this.handleChange}
            />
            {!this.state.passwordValid && (
              <span className="error-fields">
                Password Should contains one captital Letter and number
              </span>
            )}
          </div>
          <div className="form-group mb-6 mt-5 form-center">
            <input
              type="Submit"
              value="Login"
              className="btn btn-primary"
              onSubmit={this.onSubmit}
            />
          </div>
        </form>
      </div>
      </div>
    );
  }
}
 export default LoginForm;
