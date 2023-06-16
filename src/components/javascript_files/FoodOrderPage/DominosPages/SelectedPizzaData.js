import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import "../../../style/FoodPageStyle/DominosStyle/DominosPizzaStyle.scss";
import Popup from "../../PopUp";
import CrudOpration from "../../LandingPage/CrudOpration";
import { ref, onValue } from "firebase/database";
import db from "../../../Backend/Firebase";
import Loading from "../../Loading";

const SelectedPizzaData = (props) => {
  const style = props.style;
  const menuStyle = props.menuStyle;

  const [showPopup, setShowPopup] = useState(false);
  const [data, setGetData] = useState([]);
  const [dbName, setDbName] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const btnClick = () => {
    togglePopup();
  };

  const dbGetData = async () => {
    try {
      setIsLoading(true);

      const dataRef = ref(db, "dominos/" + "Pizza");
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        const reversedObject = Object.fromEntries(
          Object.entries(data).reverse()
        );
        console.log(reversedObject);
        setGetData(reversedObject);
        console.warn("Pizza feching data" + reversedObject);
        setDbName("dominos/Pizza");
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

  // -------------------

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // --------------------error in color changement -----------

  // const [sizebtnWorking, setSizeBtnWorking] = useState({
  //   smallBtnStyle: "",
  //   mediumBtnStyle: "",
  //   largeBtnStyle: "",
  // });
  // const smallBtn = (e) => {
  //   e.preventDefault();
  //   setSizeBtnWorking({ ...sizebtnWorking, smallBtnStyle: "red" });
  // };
  // const mediumBtn = (e) => {
  //   e.preventDefault();
  // };

  // const largeBtn = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div>
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
                          <button
                            name="size"
                            // style={{ color: sizebtnWorking.smallBtnStyle }}
                            // onClick={smallBtn}
                          >
                            Small
                          </button>
                          <button
                            name="size"
                            // style={{ color: sizebtnWorking.mediumBtnStyle }}
                            // onClick={mediumBtn}
                          >
                            Medium
                          </button>
                          <button
                            name="size"
                            // style={{ color: sizebtnWorking.largeBtnStyle }}
                            // onClick={largeBtn}
                          >
                            Large
                          </button>
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
      </div>
    </>
  );
};

export default SelectedPizzaData;
