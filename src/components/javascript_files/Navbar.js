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
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import LoginPage from "./LoginPage";

import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ style, valueBack }) => {
  const [responseData, setResponseData] = useState("");
  const [line3Style, setLine3Style] = useState("none");
  const [popupwidth, setPopupwidth] = useState("fit-content");

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
    setPopupwidth("25%");
    setShowPopup(!showPopup);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const size = () => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  };

  const indo = () => {
    if (screenWidth <= 860) {
      setResponseData("none");
      setLine3Style("");
      setPopupwidth("50%");
    } else {
      setline3BarStyle("none");
      setResponseData("grid");
      setLine3Style("none");
      setPopupwidth("25%");
    }
  };
  const [line3BarStyle, setline3BarStyle] = useState("none");

  const response3lineClick = () => {
    if (line3BarStyle == "none") {
      setline3BarStyle("block");
    } else {
      setline3BarStyle("none");
    }
  };
  useEffect(() => {
    size();
    indo();
  });

  const [selectedValue, setSelectedValue] = useState("Kanpur");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    valueBack(event.target.value);
  };
  useEffect(() => {
    valueBack(selectedValue);
  }, []);
  return (
    <>
      <div className="navbarOutterBody">
        <div className="navbarInnerBody">
          <div className="upperBody">
            <Link to="/">
              <img src={logo} />
            </Link>
            <div className="responviseDiv" style={{ display: responseData }}>
              <div className="liftSide">
                <div className="navbarLocation">
                  <div className="imgText">
                    <FontAwesomeIcon id="icon" icon={faLocationDot} />
                    <select value={selectedValue} onChange={handleChange}>
                      <option value="Kanpur">Kanpur</option>
                      <option value="Lucknow">Lucknow</option>
                      <option value="Pune">Pune</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                  </div>
                </div>
                {/* <div className="line"></div>
                <p>Cuisine</p> */}
              </div>
              <div className="rightSide">
                <FontAwesomeIcon
                  id="icon"
                  icon={faMagnifyingGlass}
                  onClick={search}
                />
                <FontAwesomeIcon
                  id="icon"
                  icon={faUser}
                  onClick={togglePopup}
                />
                <span style={{ display: buysStyle }}>
                  <FontAwesomeIcon id="icon" icon={faBagShopping} />
                  <p>{itemNum}</p>
                </span>
              </div>
            </div>
            <div className="line3" style={{ display: line3Style }}>
              <FontAwesomeIcon
                id="responsiveIcon"
                icon={faBars}
                onClick={response3lineClick}
              />
              <FontAwesomeIcon
                id="responsiveIcon"
                icon={faUser}
                onClick={togglePopup}
              />
            </div>
          </div>
          <div
            className="response3lineClickDiv"
            style={{ display: line3BarStyle }}
          >
            <Search />
            <div className="imgText">
              <FontAwesomeIcon id="icon" icon={faLocationDot} />
              <select value={selectedValue} onChange={handleChange}>
                <option value="Kanpur">Kanpur</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Pune">Pune</option>
                <option value="Bangalore">Bangalore</option>
              </select>
            </div>
          </div>
          <Search style={data} />
          {showPopup && (
            <PopUp
              content=<LoginPage />
              handleClose={togglePopup}
              widthStyle={popupwidth}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
