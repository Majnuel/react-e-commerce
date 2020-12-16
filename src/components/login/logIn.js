import React, { useState } from "react";
import "./login.css";
import { ReactComponent as UserIcon } from "../../assets/user-icon.svg";
import { useUserContext } from "../../context/userContext";

export default function Login() {
  const { login } = useUserContext();
  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
    login(name, phone, email);
    return false;
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="wrapper fadeInDown">
        <div id="formContent">
          {/* <!-- Tabs Titles --> */}

          {/* <!-- Icon --> */}
          <div className="fadeIn first">
            <UserIcon alt="User Icon" width="100" />
          </div>

          {/* <!-- Login Form --> */}
          <form onSubmit={submitLogin}>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              placeholder="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              id="phone"
              className="fadeIn third"
              placeholder="phone"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              id="email"
              className="fadeIn third"
              placeholder="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>

          {/* <!-- Remind Passowrd --> */}
          {/* <div id="formFooter">
            <a className="underlineHover" href="www.google.com">
              Forgot Password?
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
