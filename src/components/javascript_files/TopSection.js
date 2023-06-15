import React from "react";
import "../style/topSection.scss";

const TopSection = ({ selecterData }) => {
  return (
    <div>
      <div className="topSectionOutterBody">
        <div className="topSectionInnerBody">
          <div className="text">
            <div className="textItem">
              <p>#1 Food Delivery Service since 2010</p>
              <h1>
                We deliver your favorite food fresh & fast in {selecterData}
              </h1>
              <button>What do you want to eat?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
