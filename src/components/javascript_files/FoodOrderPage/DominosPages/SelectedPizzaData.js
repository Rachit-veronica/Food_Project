import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import "../../../style/FoodPageStyle/DominosStyle/DominosPizzaStyle.scss";
import Popup from "../../PopUp";
import CrudOpration from "../../LandingPage/CrudOpration";

const SelectedPizzaData = (props) => {
  const getData = props.data;
  const style = props.style;
  const menuStyle = props.menuStyle;

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      <div style={{ display: style }}>
        {showPopup && (
          <Popup content=<CrudOpration /> handleClose={togglePopup} />
        )}
        <div className="dominosSeletedItemDataBody">
          {getData.map((data) => {
            return (
              <>
                <div className="dominosSeletedItemData">
                  <div className="dominosSeletedItemDataInnerBody">
                    <div className="menuDiv" style={{ display: menuStyle }}>
                      <FontAwesomeIcon
                        onClick={togglePopup}
                        id="menu"
                        icon={faBars}
                      />
                    </div>
                    <img src={data.img} />
                    <h1>{data.name}</h1>
                    <p>{data.about}</p>
                    <div className="itemSize">
                      <button name="size">Small</button>
                      <button name="size">Medium</button>
                      <button name="size">Large</button>
                    </div>
                    <div className="itemHight">
                      <button name="itemHight">Standard</button>
                      <button name="itemHight">Thin</button>
                    </div>
                    <div className="itemPriceAndAddBtn">
                      <h5>${data.price}</h5>
                      <div className="buyNowBtn">
                        <button>
                          <FontAwesomeIcon icon={faCartPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectedPizzaData;
