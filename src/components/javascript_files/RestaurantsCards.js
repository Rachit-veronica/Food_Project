import React from "react";
import {
  OutterBody,
  InnerBody,
  Card,
  Img,
  CardDiv,
  PText,
  H1Text,
} from "../style/RestaurantsStyle";
import img1 from "../img/restaurants/p1.png";
import img2 from "../img/restaurants/p2.png";
import img3 from "../img/restaurants/p3.png";
import img4 from "../img/restaurants/p4.png";
import img5 from "../img/restaurants/p5.png";
import img6 from "../img/restaurants/p6.png";
import img7 from "../img/restaurants/p7.png";
import img8 from "../img/restaurants/p8.png";
import { Link } from "react-router-dom";

const RestaurantsCards = ({ onData }) => {
  const restaurantCardData = [
    {
      img: img1,
      name: "Domino's",
      url: "/Order",
    },
    {
      img: img2,
      name: "Domino's",
      url: "/Order",
    },
    {
      img: img3,
      name: "Domino's",
      url: "/Order",
    },
    {
      img: img4,
      name: "Domino's",
      url: "/Order",
    },
    {
      img: img5,
      name: "Domino's",
      url: "/Order/Pizza",
    },
    {
      img: img6,
      name: "Domino's",
      url: "/Order/Pizza",
    },
    {
      img: img7,
      name: "Domino's",
      url: "/Order/Pizza",
    },
    {
      img: img8,
      name: "Domino's",
      url: "/Order/Pizza",
    },
  ];
  const restaurantBtn = () => {
    const dataFromChild = "block";
    onData(dataFromChild);
  };
  return (
    <>
      <OutterBody>
        <InnerBody>
          <H1Text>Popular restaurants in your city</H1Text>
          <PText>Check the best restaurants near you</PText>
          <Card>
            {restaurantCardData.map((data) => {
              return (
                <>
                  <CardDiv>
                    <Link to={data.url} id="CardId">
                      <Img src={data.img} onClick={restaurantBtn} />
                    </Link>
                  </CardDiv>
                </>
              );
            })}
          </Card>
        </InnerBody>
      </OutterBody>
    </>
  );
};

export default RestaurantsCards;
