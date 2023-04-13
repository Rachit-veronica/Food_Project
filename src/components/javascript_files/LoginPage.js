import React, { useEffect, useState } from "react";
import database from "../Backend/Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock, faUserPlus } from "@fortawesome/free-solid-svg-icons";

import "../style/LandingPageStyle/LoginAndSignUp.scss";

const LoginPage = () => {
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [getData, setGetData] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setUsername({ ...username, [name]: value });
  };
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  const dbGetData = async () => {
    await database.child("login").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        const value = Object.values({ ...snapshot.val() });
        setGetData(value.reverse());
      } else {
        setGetData({});
      }
    });
  };

  const addText = async (Event) => {
    Event.preventDefault();
    const { username, password } = username;
    if (username && password) {
      database.child("login").push(username, (err) => {
        console.warn("error found", err);
        alert("data entered seccess");
        setUsername({ ...username, username: "", password: "" });
      });
    } else {
      alert("enter all data filed ");
    }
  };

  useEffect(() => {
    dbGetData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.username && username.password) {
      setUsername({ ...username, username: "", password: "" });
    } else {
      alert("fill all the data ");
    }
  };
  const [loginBtnStyle, setLoginBtnStyle] = useState("block");
  const [signUpFillingPage, setSignUpFillingPage] = useState("none");

  const SignUpBtnClick = () => {
    if (loginBtnStyle == "block") {
      setLoginBtnStyle("none");
      setSignUpFillingPage("block");
    }
  };

  const LoginBtnClick = () => {
    if (loginBtnStyle == "none") {
      setLoginBtnStyle("block");
      setSignUpFillingPage("none");
    }
  };
  const SignupBtn = () => {
    const { name, email, password, confirmPassword } = signUp;
    if ((name && email && password, confirmPassword)) {
      if (password == confirmPassword) {
        alert("password confirm");
      } else {
        alert("confirm password invaid");
      }
      console.log(signUp);
    } else {
      alert("please fill all the data");
    }
  };
  return (
    <>
      <div className="loginPageOutterBody">
        <div className="loginPageInnerBody">
          <div className="loginAndSignUpBtn">
            <button name="loginBtn" onClick={LoginBtnClick}>
              <FontAwesomeIcon icon={faUnlock} /> Login
            </button>
            <button name="SignUpBtn" onClick={SignUpBtnClick}>
              <FontAwesomeIcon icon={faUserPlus} />
              SignUp
            </button>
          </div>
          <div className="loginFillingPage" style={{ display: loginBtnStyle }}>
            <form>
              <label>Email Address</label>
              <input
                type="email"
                name="username"
                placeholder="Email"
                value={username.username}
                onChange={handlePasswordChange}
                autoComplete="off"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={username.password}
                onChange={handlePasswordChange}
                autoComplete="off"
              />
            </form>
            <div className="radioAndForgotPassword">
              <label>
                <input type="radio" />
                Remember Me
              </label>
              <p>Forgot Password?</p>
            </div>
            <br />
            <button onClick={handleSubmit}>Sign In</button>
          </div>
          <div
            className="signUpFillingPage"
            style={{ display: signUpFillingPage }}
          >
            <form>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="JOhn Doe"
                value={signUp.name}
                onChange={handleSignUpChange}
                autoComplete="off"
              />
              <label>Email</label>
              <input
                type="Email"
                name="email"
                placeholder="johndoe@example.com"
                value={signUp.email}
                onChange={handleSignUpChange}
                autoComplete="off"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signUp.password}
                onChange={handleSignUpChange}
                autoComplete="off"
              />
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={signUp.confirmPassword}
                onChange={handleSignUpChange}
                autoComplete="off"
              />
            </form>
            <button onClick={SignupBtn}>Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
