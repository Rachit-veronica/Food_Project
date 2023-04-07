import React, { useEffect, useState } from "react";
import database from "../Backend/Firebase";

const LoginPage = () => {
  const [username, setUsername] = useState({
    username: "",
    password: "",
  });
  const [getData, setGetData] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setUsername({ ...username, [name]: value });
    // setUsername({ ...username, username })(e.target.value);
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

  return (
    <>
      <div className="loginPageOutterBody">
        <div className="loginPageInnerBody">
          <div className="loginAndSignUpBtn">
            <button name="loginAndSignUpBtn">
              <img src="#" />
              Login
            </button>
            <button name="loginAndSignUpBtn">
              <img src="#" />
              SignUP
            </button>
          </div>
          <div className="loginFillingPage">
            <form>
              <label>Email Address</label>
              <input
                type="email"
                name="username"
                value={username.username}
                onChange={handlePasswordChange}
                autoComplete="off"
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={username.password}
                onChange={handlePasswordChange}
                autoComplete="off"
              />
            </form>
          </div>
          <div className="radioAndForgotPassword">
            <label>
              <input type="radio" />
              Remember Me
            </label>
            <p>Forgot Password?</p>
          </div>
          <button onClick={handleSubmit}>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
