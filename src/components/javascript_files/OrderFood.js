import React from "react";
import "../style/orderFood.scss";
import orderPeopleImg from "../img/orderFoodImg.png";

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
              <button>
                <img src="#" />
                <span>
                  <p>Download on the</p>
                  <p>App Store</p>
                </span>
              </button>
              <button>
                <img src="#" />
                <span>
                  <p>Download on the</p>
                  <p>Google Play</p>
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
