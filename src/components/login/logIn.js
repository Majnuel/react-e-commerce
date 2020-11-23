import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}

          {/* <!-- Icon --> */}
          <div className="fadeIn first">
            <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            />
          </div>

          {/* <!-- Login Form --> */}
          <form>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="login"
              placeholder="login"
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="login"
              placeholder="password"
            />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          {/* <!-- Remind Passowrd --> */}
          <div id="formFooter">
            <a className="underlineHover" href="www.google.com">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}