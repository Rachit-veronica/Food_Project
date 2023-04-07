import React, { useEffect, useState } from "react";
import "../style/navbar.scss";
import Search from "./Search";
import PopUp from "./PopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faLocationDot,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import LoginPage from "./LoginPage";

import logo from "../img/logo.png";

const Navbar = (props) => {
  const dataStyle = props.data;
  const [data, setdata] = useState("none");
  const search = () => {
    if (data == "none") {
      setdata("block");
    } else {
      setdata("none");
    }
  };

  const [itemNum, setItemNum] = useState("0");

  const [buysStyle, setBuysStyle] = useState("none");

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = (Event) => {
    Event.preventDefault();
    setShowPopup(!showPopup);
  };
  // useEffect(() => {
  // setBuysStyle(dataStyle);
  // });
  return (
    <>
      <div className="navbarOutterBody">
        <div className="navbarInnerBody">
          <div className="upperBody">
            <div className="liftSide">
              <img src={logo} />
              <div className="navbarLocation">
                <div className="imgText">
                  <FontAwesomeIcon id="icon" icon={faLocationDot} />
                  <select>
                    <option>Kanpur</option>
                    <option>Lucknow</option>
                    <option>Pune</option>
                    <option>Bangalore</option>
                  </select>
                </div>
              </div>
              <div className="line"></div>
              <p>Cuisine</p>
              <p id="back">Back to main demo</p>
            </div>
            <div className="rightSide">
              <FontAwesomeIcon
                id="icon"
                icon={faMagnifyingGlass}
                onClick={search}
              />
              <FontAwesomeIcon id="icon" icon={faUser} onClick={togglePopup} />
              <span style={{ display: buysStyle }}>
                <FontAwesomeIcon id="icon" icon={faBagShopping} />
                <p>{itemNum}</p>
              </span>
            </div>
          </div>
          <Search style={data} />
          {showPopup && (
            <PopUp content=<LoginPage /> handleClose={togglePopup} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
