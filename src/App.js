import "./App.css";
import Navbar from "./components/javascript_files/Navbar";
import LandingPage from "./components/javascript_files/LandingPage/LandingPage";
import Footer from "./components/javascript_files/Footer";
import { Routes, Route } from "react-router-dom";
import Dominos from "./components/javascript_files/FoodOrderPage/Dominos";
import Error from "./components/javascript_files/Error";
import { useState } from "react";
import SelectedPizzaData from "./components/javascript_files/FoodOrderPage/DominosPages/SelectedPizzaData";
import SelectedSidesData from "./components/javascript_files/FoodOrderPage/DominosPages/SelectedSidesData";
import DominosTopSection from "./components/javascript_files/FoodOrderPage/DominosPages/DominosTopSection";
import SelectedDrinksData from "./components/javascript_files/FoodOrderPage/DominosPages/SelectedDrinksData";
import SelectedDessertData from "./components/javascript_files/FoodOrderPage/DominosPages/SelectedDessertData";

function App() {
  const [data, setData] = useState("");
  const [childEditStylePass, setChildEditStylePass] = useState("");
  const [childMenuStylePass, setChildMenuStylePass] = useState("none");

  const handleData = (dataFromChild) => {
    setData(dataFromChild);
  };

  const [valueBack, setValueBack] = useState("");

  const valueBackHandleData = (dataFromChild) => {
    setValueBack(dataFromChild);
  };
  const childEditStyle = (data) => {
    console.log(data);
    setChildEditStylePass(data);
  };
  const childMenuStyle = (data) => {
    console.log(data);
    setChildMenuStylePass(data);
  };

  return (
    <>
      <Navbar style={data} valueBack={valueBackHandleData} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage info={handleData} selecterData={valueBack} />}
        />
        <Route
          path="Order"
          element={
            <DominosTopSection
              styleEDitData={childEditStyle}
              styleMenuData={childMenuStyle}
            />
          }
        >
          <Route
            index
            element={
              <SelectedPizzaData
                style={childEditStylePass}
                menuStyle={childMenuStylePass}
              />
            }
          />
          <Route
            path="Pizza"
            element={
              <SelectedPizzaData
                style={childEditStylePass}
                menuStyle={childMenuStylePass}
              />
            }
          />
          <Route
            path="Sides"
            element={
              <SelectedSidesData
                style={childEditStylePass}
                menuStyle={childMenuStylePass}
              />
            }
          />
          <Route
            path="Drinks"
            element={
              <SelectedDrinksData
                style={childEditStylePass}
                menuStyle={childMenuStylePass}
              />
            }
          />
          <Route
            path="Dessert"
            element={
              <SelectedDessertData
                style={childEditStylePass}
                menuStyle={childMenuStylePass}
              />
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
