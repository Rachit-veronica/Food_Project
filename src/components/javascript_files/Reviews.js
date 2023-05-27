import React, { useEffect, useState } from "react";
import Swiper from "../javascript_files/Swiper";
import db from "../Backend/Firebase";
import { getDatabase, ref, set, child, onValue, push } from "firebase/database";
import {
  ReviewOutterBody,
  ReviewInnerBody,
  H1ReviewsText,
  ReviewsCardBody,
  CreateRating,
  Button,
} from "../style/ReviewsStyle";
import PopUp from "./PopUp";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../style/StarRatingStyle";
import CrudOpration from "./LandingPage/CrudOpration";

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

  // --------------- create -----------------

  const addText = async (e) => {
    e.preventDefault();
    const ratingNumber = addInfo.ratingNumber;
    const ratingText = addInfo.ratingText;
    if (ratingNumber && ratingText) {
      const dataRef = ref(db, "reviews");
      const database = getDatabase();
      // const dataRef = ref(database, "your-data-location");

      const newEntryRef = push(dataRef); // Generate a unique ID for the new entry

      // const childRef = child(newEntryRef, "child-node"); // Specify the child node

      set(newEntryRef, addInfo)
        .then(() => {
          // Data sent successfully
          alert("data entered seccess");
          setAddInfo({ ...addInfo, ratingText: "", ratingNumber: "" });
        })
        .catch((error) => {
          // Handle error
          alert("error");
        });
    }
  };

  // ----------------------  read ------------------------

  const fetchData = async () => {
    const dataRef = ref(db, "reviews");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const reversedObject = Object.fromEntries(Object.entries(data).reverse());
      // Do something with data
      setGetData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(setCallBack);

  const callBackFunction = (data) => {
    setShowPopup(!showPopup);
    setIdPass(data);
  };
  const [showPopup, setShowPopup] = useState(false);

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
                <Button type="submit">Submit</Button>
              </form>
            </CreateRating>
          </ReviewsCardBody>
        </ReviewInnerBody>
      </ReviewOutterBody>
    </>
  );
};

export default Reviews;
