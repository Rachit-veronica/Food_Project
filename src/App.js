import "./App.css";
import FoodSelectorCard from "./components/javascript_files/FoodSelectorCard";
import Navbar from "./components/javascript_files/Navbar";
import OrderFood from "./components/javascript_files/OrderFood";
import TopSection from "./components/javascript_files/TopSection";
import PartnerCard from "./components/javascript_files/PartnerCard";
import RestaurantsCards from "./components/javascript_files/RestaurantsCards";
import Reviews from "./components/javascript_files/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <TopSection />
      <FoodSelectorCard />
      <OrderFood />
      <PartnerCard />
      <RestaurantsCards />
      <Reviews />
    </>
  );
}

export default App;
