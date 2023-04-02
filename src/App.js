import "./App.css";
import Navbar from "./components/javascript_files/Navbar";
import LandingPage from "./components/javascript_files/LandingPage/LandingPage";
import Footer from "./components/javascript_files/Footer";
import { Routes, Route } from "react-router-dom";
import Dominos from "./components/javascript_files/FoodOrderPage/Dominos";
import Error from "./components/javascript_files/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="Order" element={<Dominos />} />
        <Route Component={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
