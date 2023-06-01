import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import "../../../style/FoodPageStyle/DominosStyle/DominosPizzaStyle.scss";
import Popup from "../../PopUp";
import CrudOpration from "../../LandingPage/CrudOpration";
import { getDatabase, ref, set, child, onValue, push } from "firebase/database";
import db from "../../../Backend/Firebase";
import Loading from "../../Loading";

const SelectedDessertData = (props) => {
  const style = props.style;
  const menuStyle = props.menuStyle;

  const [showPopup, setShowPopup] = useState(false);
  const [data, setGetData] = useState([]);
  const [dbName, setDbName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const btnClick = () => {
    togglePopup();
  };

  const dbGetData = async () => {
    try {
      setIsLoading(true);

      const dataRef = ref(db, "dominos/" + "Dessert");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        const reversedObject = Object.fromEntries(
          Object.entries(data).reverse()
        );
        console.log(reversedObject);
        setGetData(reversedObject);
        console.warn("Dessert feching data" + reversedObject);
        setDbName("dominos/Dessert");
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Something bad happened");
      console.error(error);
    }
  };

  useEffect(() => {
    dbGetData();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ display: style }}>
          <div className="dominosSeletedItemDataBody">
            {Object.keys(data).map((id, index) => {
              return (
                <>
                  {showPopup && (
                    <Popup
                      content=<CrudOpration data={id} dbname={dbName} />
                      handleClose={togglePopup}
                    />
                  )}
                  <div className="dominosSeletedItemData">
                    <div className="dominosSeletedItemDataInnerBody">
                      <div className="menuDiv" style={{ display: menuStyle }}>
                        <FontAwesomeIcon
                          // onClick={togglePopup}
                          onClick={btnClick}
                          id="menu"
                          icon={faBars}
                        />
                      </div>
                      <img src={data[id].img} />
                      <h1>{data[id].name}</h1>
                      <p>{data[id].about}</p>
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
                        <h5>${data[id].price}</h5>
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
      )}
    </>
  );
};

export default SelectedDessertData;