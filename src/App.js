import "./App.css";
import Navbar from "./components/javascript_files/Navbar";
import LandingPage from "./components/javascript_files/LandingPage/LandingPage";
import Footer from "./components/javascript_files/Footer";
import { Routes, Route } from "react-router-dom";
import Dominos from "./components/javascript_files/FoodOrderPage/Dominos";
import Error from "./components/javascript_files/Error";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleData = (dataFromChild) => {
    setData(dataFromChild);
  };

  const [valueBack, setValueBack] = useState("");

  const valueBackHandleData = (dataFromChild) => {
    setValueBack(dataFromChild);
  };


  return (
    <>
      <Navbar style={data} valueBack={valueBackHandleData}/>
      <Routes>
        <Route path="/" element={<LandingPage info={handleData} selecterData={valueBack} />} />
        <Route path="Order" element={<Dominos />} />
        <Route Component={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
