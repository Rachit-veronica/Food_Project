import React, { useEffect, useState } from "react";
import Swiper from "../javascript_files/Swiper";
import database from "../Backend/Firebase";

import {
  ReviewOutterBody,
  ReviewInnerBody,
  H1ReviewsText,
  ReviewsCardBody,
  CreateRating,
} from "../style/ReviewsStyle";
import PopUp from "./PopUp";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../style/StarRatingStyle";
import LoginPage from "./LoginPage";
import CrudOpration from "./LandingPage/CrudOpration";
import FetchData from "../Backend/FetchData";

// import database from "./";

const Reviews = () => {
  const [idPass, setIdPass] = useState("");

  const [addInfo, setAddInfo] = useState({
    ratingNumber: "",
    ratingText: "",
  });

  const [getData, setGetData] = useState([]);

  let setCallBack = "";
  const handlingdata = (e) => {
    const num = e.target.name;
    const value = e.target.value;
    setAddInfo({ ...addInfo, [num]: value });
  };

  const addText = async (Event) => {
    Event.preventDefault();
    const { ratingNumber, ratingText } = addInfo;
    if (ratingNumber && ratingText) {
      database.child("reviews").push(addInfo, (err) => {
        console.warn("error found", err);
        alert("data entered seccess");
        setAddInfo({ ...addInfo, ratingText: "", ratingNumber: "" });
      });
    } else {
      alert("enter all data filed ");
    }
  };

  const dbGetData = async () => {
    await database.child("reviews").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        const value = Object.values({ ...snapshot.val() });
        setGetData(value.reverse());
      } else {
        setGetData({});
      }
    });
  };

  // const trye = async () => {
  //   const reviews = () => {};

  //   const data = await (<FetchData dbname="reviews" info={reviews} />);
  //   setGetData(data);
  // };

  useEffect(() => {
    dbGetData();
    // trye();
  }, []);

  console.log(setCallBack);

  const callBackFunction = (data) => {
    setShowPopup(!showPopup);
    setIdPass(data);
  };
  const [showPopup, setShowPopup] = useState(false);

  // const togglePopup = () => {
  // };

  return (
    <>
      <ReviewOutterBody>
        <ReviewInnerBody>
          <H1ReviewsText>Customer reviews</H1ReviewsText>
          <ReviewsCardBody>
            <Swiper data={getData} style="22" back={callBackFunction} />
            {showPopup && (
              <PopUp
                content=<CrudOpration data={idPass} />
                handleClose={callBackFunction}
              />
            )}
            <CreateRating>
              <form onSubmit={addText}>
                <Container>
                  {[...Array(5)].map((item, index) => {
                    const givenRating = index + 1;
                    return (
                      <label>
                        <Radio
                          type="radio"
                          value={givenRating}
                          onClick={() => {
                            setAddInfo({
                              ...addInfo,
                              ratingNumber: givenRating,
                            });
                          }}
                        />
                        <Rating>
                          <FaStar
                            id="star"
                            color={
                              givenRating < addInfo.ratingNumber ||
                              givenRating === addInfo.ratingNumber
                                ? "000"
                                : "rgb(192,192,192)"
                            }
                          />
                        </Rating>
                      </label>
                    );
                  })}
                </Container>
                <br />
                <textarea
                  type="text"
                  name="ratingText"
                  placeholder="Enter Text"
                  autoComplete="off"
                  value={addInfo.ratingText}
                  onChange={handlingdata}
                  style={{ width: "90%", height: "70px" }}
                />
                <button type="submit">click here</button>
              </form>
            </CreateRating>
          </ReviewsCardBody>
        </ReviewInnerBody>
      </ReviewOutterBody>
    </>
  );
};

export default Reviews;
