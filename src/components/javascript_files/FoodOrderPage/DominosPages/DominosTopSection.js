import React, { useState } from "react";
import "../../../style/FoodPageStyle/DominosStyle/DominosTopSectionStyle.scss";

const DominosTopSection = () => {
  const [title, setTitle] = useState(" Domino's Pizza");
  const [selectedTitle, setSelectedTitle] = useState("Pizza");

  return (
    <>
      <div className="navAndTitleOutterBodyMainDiv">
        <div className="navAndTitleOutterBody">
          <div className="navAndTitleInnerBody">
            <div className="dominorsNavbar">
              <ul>
                <li>
                  <p>
                    <img src="#" />
                    Home >
                  </p>
                </li>
                <li>
                  <p> Resturants > </p>
                </li>
                <li>{title}</li>
              </ul>
            </div>
            <div className="dominorsTitle">
              <h1>{title}</h1>
            </div>
          </div>
        </div>
        <div className="DominosUpperAndSearchBar">
          <div className="DominosUpperAndSearchBarInnerBody">
            <ul>
              <li>
                <img src="#" />
              </li>
              <li>Pizza</li>
              <li>Sides</li>
              <li>Drinks</li>
              <li>Dessert</li>
            </ul>
          </div>
        </div>
        <div className="DominosSeletedItem">
          <h1>{selectedTitle}</h1>
          <div className="dominosSeletedItemData">{}</div>
        </div>
      </div>
    </>
  );
};

export default DominosTopSection;
