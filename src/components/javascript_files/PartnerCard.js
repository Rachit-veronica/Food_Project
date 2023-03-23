import React from "react";
import "../style/partnerCard.scss";
import deliveryImg from "../img/partner/courierImg.png";
import partnerImg from "../img/partner/partnerImg.png";

const PartnerCard = () => {
  return (
    <>
      <div className="parterOutterBody">
        <div className="parterInnerBody">
          <div className="deliveryCard">
            <div className="deliveryCardText">
              <h1>Become a Courier</h1>
              <p>
                Earn competitive salary as delivery courier working flexible
                schedule.
              </p>
              <button>Start Earning</button>
            </div>
            <div className="deliveryCardImg">
              <img src={deliveryImg} />
            </div>
          </div>
          <div className="partnerCard">
            <div className="partnerCardText">
              <h1>Become a Partner</h1>
              <p>Grow your business by reaching new customers.</p>
              <button>Partner with us</button>
            </div>
            <div className="partnerCardImg">
              <img src={partnerImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerCard;
