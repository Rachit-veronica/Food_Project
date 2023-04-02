import React from "react";
import FoodSelectorCard from "../FoodSelectorCard";
import OrderFood from "../OrderFood";
import PartnerCard from "../PartnerCard";
import RestaurantsCards from "../RestaurantsCards";
import Reviews from "../Reviews";
import TopSection from "../TopSection";

const LandingPage = () => {
  return (
    <>
      <TopSection />
      <FoodSelectorCard />
      <OrderFood />
      <PartnerCard />
      <RestaurantsCards />
      <Reviews />
    </>
  );
};

export default LandingPage;
