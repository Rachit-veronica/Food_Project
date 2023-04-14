import React from "react";
import "../style/orderFood.scss";
import orderPeopleImg from "../img/orderFoodImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons";

const OrderFood = () => {
  return (
    <div>
      <div className="orderFoodoutter">
        <div className="orderFoodInner">
          <div className="orderFoodText">
            <h1>Order food on the go with Cartzilla App</h1>
            <p>
              Pay with in app wallet, collect loyalty points, track your orders
              in real time and much more.
            </p>
            <div className="orderFoodBtn">
              <button  >
                <FontAwesomeIcon id="downloadBtnicon" icon={faAppStore} />
                <span>
                  <p>Download on the</p>
                  <h3>App Store</h3>
                </span>
              </button>
              <button id="downloadBtn">
                <FontAwesomeIcon id="downloadBtnicon" icon={faGooglePlay} />
                <span>
                  <p>Download on the</p>
                  <h3>Google Play</h3>
                </span>
              </button>
            </div>
          </div>
          <div className="orderFoodImg">
            <img src={orderPeopleImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
