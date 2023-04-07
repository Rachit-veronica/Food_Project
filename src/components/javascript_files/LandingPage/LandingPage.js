import React, { useState } from "react";
import FoodSelectorCard from "../FoodSelectorCard";
import OrderFood from "../OrderFood";
import PartnerCard from "../PartnerCard";
import RestaurantsCards from "../RestaurantsCards";
import Reviews from "../Reviews";
import TopSection from "../TopSection";

const LandingPage = ({ info }) => {
  const [data, setData] = useState("");

  const handleData = (dataFromChild) => {
    setData(dataFromChild);
    info(dataFromChild);
    // console.log(dataFromChild);
  };
  return (
    <>
      <TopSection />
      <FoodSelectorCard />
      <OrderFood />
      <PartnerCard />
      <RestaurantsCards onData={handleData} />
      <Reviews />
    </>
  );
};

export default LandingPage;
