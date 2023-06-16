import React from "react";
import cards1 from "../img/cards1.jpg";
import cards2 from "../img/cards2.jpg";
import cards3 from "../img/cards3.jpg";
import cards4 from "../img/cards4.jpg";
import cards5 from "../img/cards5.jpg";
import cards6 from "../img/cards6.jpg";
import "../style/foodSelectorCard.scss";
import { Link } from "react-router-dom";

const FoodSelectorCard = () => {
  const data = [
    {
      name: "Burgers & Fries",
      img: `${cards1}`,
      url: "/Order/Pizza",
    },
    {
      name: "Noodles",
      img: `${cards2}`,
      url: "/Order/Sides",
    },
    {
      name: "Sushi & Rolls",
      img: `${cards3}`,
      url: "/Order/Sides",
    },
    {
      name: "Pizza & Pasta",
      img: `${cards4}`,
      url: "/Order/Pizza",
    },
    {
      name: "Coffee & Desserts",
      img: `${cards5}`,
      url: "/Order/Dessert",
    },
    {
      name: "Healthy & Food",
      img: `${cards6}`,
      url: "/Order/Drinks",
    },
  ];
  return (
    <>
      <div className="foodSelectorCardOutterBody">
        <div className="foodSelectorCardInnerBody">
          <h1>Trending food in your city</h1>
          <p>Choose what you want and we dilever it to you</p>
          <div className="foodCardoutter">
            <div className="foodCardinner">
              {data.map((item) => {
                return (
                  <>
                    <a>
                      <div className="foodCardsItem">
                        <div className="responvisefoodCardsItem">
                          <img src={item.img} />
                          <Link
                            to={item.url}
                            style={{ textDecoration: "none" }}
                          >
                            <h2>{item.name}</h2>
                          </Link>
                        </div>
                      </div>
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSelectorCard;
