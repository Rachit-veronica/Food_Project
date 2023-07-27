import React, { useState, useEffect } from "react";
import "../../../style/FoodPageStyle/DominosStyle/DominosTopSectionStyle.scss";
import { getDatabase, ref, set, child, onValue, push } from "firebase/database";
import db from "../../../Backend/Firebase";
import { Link, Outlet, useParams } from "react-router-dom";
import logo from "../../../img/dominos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const DominosTopSection = ({ styleEDitData, styleMenuData }) => {
  const [title, setTitle] = useState("Pizza");
  const [sendData, setSendData] = useState({
    name: "",
    about: "",
    img: "",
    price: "",
  });
  const [insertBar, setInsertBar] = useState("none");
  const [menuBar, setMenuBar] = useState("none");
  const [fileStyle, setFileStyle] = useState({
    pizzaFileStyle: "block",
    sidesFileStyle: "none",
    dessertFileStyle: "none",
    drinksFileStyle: "none",
  });
  const [pizzaFileStyle, setPizzaFileStyle] = useState("block");
  const [sidesFileStyle, setsidesFileStyle] = useState("none");
  const [EditBtn, setEditBtn] = useState("Edit");

  const sendDataHandle = (e) => {
    const { name, value } = e.target;
    setSendData({ ...sendData, [name]: value });
  };
  const sendDataFunction = async (Event) => {
    Event.preventDefault();
    const { name, about, img, price } = sendData;
    try {
      if (name && about && img && price) {
        const dataRef = ref(db, `dominos/${title}`);
        const database = getDatabase();

        const newEntryRef = push(dataRef); // Generate a unique ID for the new entry

        // const childRef = child(newEntryRef, "child-node"); // Specify the child node

        set(newEntryRef, sendData)
          .then(() => {
            // Data sent successfully
            alert("data entered seccess");
            setSendData({
              ...sendData,
              name: "",
              about: "",
              img: null,
              price: "",
            });
            setInsertBar("none");
          })
          .catch((error) => {
            // Handle error
            alert("error");
          });
      }
    } catch (error) {
      console.error("Something bad happened");
      console.error(error);
    }
  };

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      const imageUrl = event.target.result;
      setSendData({ ...sendData, img: imageUrl });
    };
    reader.readAsDataURL(file);
  }
  const insertDataBtn = (Event) => {
    Event.preventDefault();
    if (insertBar == "none") {
      setInsertBar("block");
    } else {
      setInsertBar("none");
    }
  };

  const formCencelbtn = (Event) => {
    Event.preventDefault();
    if (insertBar == "block") {
      setInsertBar("none");
    }
  };

  const editDataBtn = () => {
    if (menuBar == "none") {
      setMenuBar("block");
      setEditBtn("Back");
      styleMenuData("block");
      styleEDitData("Back");
    } else {
      setMenuBar("none");
      setEditBtn("Edit");
      styleMenuData("none");
      styleEDitData("Edit");
    }
  };
  const pizzaBtn = (Event) => {
    Event.preventDefault();
    setTitle("Pizza");
  };
  const sidesBtn = (Event) => {
    Event.preventDefault();
    setTitle("Sides");
  };

  const drinksBtn = (Event) => {
    Event.preventDefault();
    setTitle("Drinks");
  };

  const dessertBtn = (Event) => {
    Event.preventDefault();
    setTitle("Dessert");
  };

  return (
    <>
      <div className="navAndTitleOutterBodyMainDiv">
        <div className="navAndTitleOutterBody">
          <div className="navAndTitleInnerBody">
            <div className="dominorsNavbar">
              <ul>
                <li>
                  <p>
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <FontAwesomeIcon
                        icon={faHouse}
                        style={{ marginRight: "6px", marginBottom: "2px" }}
                      />
                      Home >
                    </Link>
                  </p>
                </li>
                <li style={{ marginLeft: "4px", cursor: "pointer" }}>
                  {title}
                </li>
              </ul>
            </div>
            <div className="dominorsTitle">
              <h1>Domino's {title}</h1>
            </div>
          </div>
        </div>
        <div className="DominosUpperAndSearchBar">
          <div className="DominosUpperAndSearchBarInnerBody">
            <img src={logo} />
            <ul>
              <li onClick={pizzaBtn}>
                <Link to={"Pizza"} id="DominosTopSectionA">
                  Pizza
                </Link>
              </li>
              <li onClick={sidesBtn}>
                <Link to={"Sides"} id="DominosTopSectionA">
                  Sides
                </Link>
              </li>
              <li onClick={drinksBtn}>
                <Link to={"Drinks"} id="DominosTopSectionA">
                  Drinks
                </Link>
              </li>
              <li onClick={dessertBtn}>
                <Link to={"Dessert"} id="DominosTopSectionA">
                  Dessert
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="DominosSeletedItemBody">
          <h1>{title}</h1>
          <div className="insertAndEditBtn">
            <button onClick={insertDataBtn}>Insert</button>
            <button onClick={editDataBtn}>{EditBtn}</button>
          </div>
          <div className="sendData" style={{ display: insertBar }}>
            <form>
              <div className="formData">
                <span>
                  <label>Name :- </label>
                  <br />
                  <input
                    typeof="text"
                    name="name"
                    value={sendData.name}
                    onChange={sendDataHandle}
                  />
                </span>
                <span>
                  <label>Img :- </label>
                  <br />
                  <input type="file" onChange={handleImageUpload} />
                </span>
                <span>
                  <label>About :- </label>
                  <br />
                  <textarea
                    type="text"
                    name="about"
                    value={sendData.about}
                    onChange={sendDataHandle}
                  ></textarea>
                </span>
                <span>
                  <label>Price :- </label>
                  <input
                    type="number"
                    name="price"
                    value={sendData.price}
                    onChange={sendDataHandle}
                  />
                </span>
              </div>
              <button onClick={formCencelbtn}>Cancel</button>
              <button onClick={sendDataFunction}>Submit</button>
            </form>
          </div>
          <div className="SelectedFileDiv">
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default DominosTopSection;
