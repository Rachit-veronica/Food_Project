import React, { useState } from "react";
import "../style/navbar.scss";
import Search from "./Search";

const Navbar = () => {
  const [data, setdata] = useState("none");
  const search = () => {
    if (data == "none") {
      setdata("block");
    } else {
      setdata("none");
    }
  };
  return (
    <>
      <div className="navbarOutterBody">
        <div className="navbarInnerBody">
          <div className="upperBody">
            <div className="liftSide">
              <div className="logo">
                <img src="#" />
                <p>text</p>
              </div>
              <div className="navbarLocation">
                <div className="imgText">
                  <img src="#" />
                  <select>
                    <option>Kanpur</option>
                    <option>Lucknow</option>
                    <option>Pune</option>
                    <option>Bangalore</option>
                  </select>
                </div>
              </div>
              <div id="line"></div>
              <p>Cuisine</p>
              <p>Back to main demo</p>
            </div>
            <div className="rightSide">
              <img src="#" onClick={search} /> {/* search img or icon*/}
              <img src="#" /> {/* login img or icon*/}
            </div>
          </div>
          <Search style={data} />
          {/* <div className="searchBar" style={{ display: `${data}` }}>
            <input placeholder="Search" /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
