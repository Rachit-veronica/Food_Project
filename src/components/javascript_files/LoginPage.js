import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { getDatabase, ref, set, child, onValue, push } from "firebase/database";
import db from "../Backend/Firebase";
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
  const [getData, setGetData] = useState([]);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setUsername({ ...username, [name]: value });
  };
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUp({ ...signUp, [name]: value });
  };

  // const addText = async (Event) => {
  //   Event.preventDefault();
  //   const { username, password } = username;
  //   if (username && password) {
  //     database.child("login").push(username, (err) => {
  //       console.warn("error found", err);
  //       alert("infomation send seccess");
  //       setUsername({ ...username, username: "", password: "" });
  //     });
  //   } else {
  //     alert("enter all data filed ");
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.username && username.password) {
      const arr = Object.values(getData);

      // ------------ login condition check ---------------

      const filterConditionCheck = arr.filter(
        (data) =>
          data.email == username.username && data.password == username.password
      );

      if (filterConditionCheck.length > 0) {
        alert(`Successful login, Hello ${filterConditionCheck[0].name}`);
      } else {
        alert("Invalid login, please SIGNUP");
        setLoginBtnStyle("none");
        setSignUpFillingPage("block");
      }
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

  // ----------------------- send information -----------------

  const SignupBtn = () => {
    const { name, email, password, confirmPassword } = signUp;
    if ((name && email && password, confirmPassword)) {
      if (!email.includes("@") || !email.includes(".")) {
        alert("invalid, Please enter Valid Email Id ( johndoe@example.com )");
      } else if (password == confirmPassword) {
        // ------------- convert object to Array --------------
        const arr = Object.values(getData);
        // ------

        // ----------- filter to check email id exist or not -------------
        const filterConditionCheck = arr.filter((data) => data.email == email);
        if (filterConditionCheck.length > 0) {
          alert("email id already exist");
          // ------------------
        } else {
          const dataRef = ref(db, "signUp");
          const newEntryRef = push(dataRef);
          set(newEntryRef, signUp)
            .then(() => {
              // Data sent successfully
              alert("data entered seccess");
              setSignUp({
                ...signUp,
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
              setLoginBtnStyle("block");
              setSignUpFillingPage("none");
              // setInsertBar("none");
            })
            .catch((error) => {
              // Handle error
              alert("error");
            });
        }
      } else {
        alert("confirm password invaid");
      }
    } else {
      alert("please fill all the data");
    }
  };

  // ------------------------- fetch data -----------------

  const fetchData = async () => {
    const dataRef = ref(db, "signUp");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      // Do something with data
      setGetData(data);
      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                required
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
                type="name"
                name="name"
                placeholder="JOhn Doe"
                value={signUp.name}
                onChange={handleSignUpChange}
                autoComplete="on"
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                value={signUp.email}
                onChange={handleSignUpChange}
                autoComplete="on"
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
