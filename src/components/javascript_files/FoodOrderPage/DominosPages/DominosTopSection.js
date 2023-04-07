import React, { useState, useEffect } from "react";
import "../../../style/FoodPageStyle/DominosStyle/DominosTopSectionStyle.scss";

import database from "../../../Backend/Firebase";
import SelectedPizzaData from "./SelectedPizzaData";
import SelectedSidesData from "./SelectedSidesData";
import { Link } from "react-router-dom";

const DominosTopSection = () => {
  const [title, setTitle] = useState("Pizza");

  const [getData, setGetData] = useState([]);

  const [sendData, setSendData] = useState({
    name: "",
    about: "",
    img: "",
    price: "",
  });
  const [insertBar, setInsertBar] = useState("none");
  const [menuBar, setMenuBar] = useState("none");
  const [pizzaFileStyle, setPizzaFileStyle] = useState("block");
  const [sidesFileStyle, setsidesFileStyle] = useState("none");
  const [EditBtn, setEditBtn] = useState("Edit");

  const sendDataHandle = (e) => {
    const { name, value } = e.target;
    setSendData({ ...sendData, [name]: value });
  };

  const dbGetData = async () => {
    try {
      await database.child("dominos").on("value", (snapshot) => {
        if (snapshot.val() !== null) {
          const value = Object.values({ ...snapshot.val() });
          setGetData(value.reverse());
          console.log(value);
        } else {
          setGetData({});
        }
      });
    } catch (error) {
      console.error("Something bad happened");
      console.error(error);
    }
  };

  const sendDataFunction = async (Event) => {
    Event.preventDefault();
    const { name, about, img, price } = sendData;
    try {
      if (name && about && img && price) {
        database.child("dominos").push(sendData, (err) => {
          console.warn("error found", err);
          alert("data entered seccess");
          setSendData({
            ...sendData,
            name: "",
            about: "",
            img: null,
            price: "",
          });
          setInsertBar("none");
        });
      } else {
        alert("enter all data filed ");
      }
    } catch (error) {
      console.error("Something bad happened");
      console.error(error);
    }
  };

  useEffect(() => {
    dbGetData();
  }, []);

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
    } else {
      setMenuBar("none");
      setEditBtn("Edit");
    }
  };
  const pizzaBtn = (Event) => {
    Event.preventDefault();
    if (pizzaFileStyle == "block") {
      setsidesFileStyle("none");
    } else {
      setPizzaFileStyle("block");
      setTitle(" Pizza");
      setsidesFileStyle("none");
    }
  };
  const sidesBtn = (Event) => {
    Event.preventDefault();
    if (pizzaFileStyle == "block") {
      setPizzaFileStyle("none");
      setsidesFileStyle("block");
      setTitle(" Sides");
    }
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
                    <img src="#" />
                    Home >
                  </p>
                </li>
                <li>{title}</li>
              </ul>
            </div>
            <div className="dominorsTitle">
              <h1>Domino's {title}</h1>
            </div>
          </div>
        </div>
        <div className="DominosUpperAndSearchBar">
          <div className="DominosUpperAndSearchBarInnerBody">
            <ul>
              <li>
                <img src="#" />
              </li>
              <li onClick={pizzaBtn}>Pizza</li>
              <li onClick={sidesBtn}>Sides</li>
              <li>Drinks</li>
              <li>Dessert</li>
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
              <button onClick={formCencelbtn}>Cencel</button>
              <button onClick={sendDataFunction}>Submit</button>
            </form>
          </div>
          <div className="SelectedFileDiv">
            <SelectedPizzaData
              data={getData}
              style={pizzaFileStyle}
              menuStyle={menuBar}
            />
            <SelectedSidesData style={sidesFileStyle} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DominosTopSection;
