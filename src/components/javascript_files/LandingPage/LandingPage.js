import React, { useState } from "react";
import FoodSelectorCard from "../FoodSelectorCard";
import OrderFood from "../OrderFood";
import PartnerCard from "../PartnerCard";
import RestaurantsCards from "../RestaurantsCards";
import Reviews from "../Reviews";
import TopSection from "../TopSection";

const LandingPage = ({ info , selecterData}) => {
  const [data, setData] = useState("");

  const handleData = (dataFromChild) => {
    setData(dataFromChild);
    info(dataFromChild);
  };
  return (
    <>
      <TopSection selecterData={selecterData} />
      <FoodSelectorCard />
      <OrderFood />
      <PartnerCard />
      <RestaurantsCards onData={handleData} />
      <Reviews />
    </>
  );
};

export default LandingPage;
