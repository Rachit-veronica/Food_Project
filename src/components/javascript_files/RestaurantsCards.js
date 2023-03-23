import React from "react";
import {
  OutterBody,
  InnerBody,
  Card,
  Img,
  CardDiv,
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
import img9 from "../img/restaurants/p9.png";

const RestaurantsCards = () => {
  const restaurantCardData = [
    {
      img: img1,
      name: "Domino's",
    },
    {
      img: img2,
      name: "Domino's",
    },
    {
      img: img3,
      name: "Domino's",
    },
    {
      img: img4,
      name: "Domino's",
    },
    {
      img: img5,
      name: "Domino's",
    },
    {
      img: img6,
      name: "Domino's",
    },
    {
      img: img7,
      name: "Domino's",
    },
    {
      img: img8,
      name: "Domino's",
    },
    {
      img: img9,
      name: "Domino's",
    },
  ];
  return (
    <>
      <OutterBody>
        <InnerBody>
          <H1Text>Popular restaurants in your city</H1Text>
          <p>Check the best restaurants near you</p>
          <Card>
            {restaurantCardData.map((data) => {
              return (
                <>
                  <CardDiv>
                    <Img src={data.img} />
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
