import React, { useEffect, useState } from "react";
import Swiper from "../javascript_files/Swiper";
import database from "../Backend/Firebase";
import FirebasePostData from "../Backend/FirebasePostData";

import {
  ReviewOutterBody,
  ReviewInnerBody,
  H1ReviewsText,
  ReviewsCardBody,
  CreateRating,
} from "../style/ReviewsStyle";

import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../style/StarRatingStyle";

// import database from "./";

const Reviews = () => {
  const [addInfo, setAddInfo] = useState({
    ratingNumber: "",
    ratingText: "",
  });

  const [getData, setGetData] = useState([]);

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

  useEffect(() => {
    dbGetData();
  }, []);

  return (
    <>
      <ReviewOutterBody>
        <ReviewInnerBody>
          <H1ReviewsText>Customer reviews</H1ReviewsText>
          <ReviewsCardBody>
            <Swiper data={getData} style="22" />
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
