import React from "react";
import { useState } from "react";
import {
  Button,
  ButtonOtterBody,
  ButtonInnerBody,
  ButtonDiv,
} from "../../style/LandingPageStyle/crudOprationStyle";
import database from "../../Backend/Firebase";

import { CreateRating } from "../../style/ReviewsStyle";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../../style/StarRatingStyle";
const CrudOpration = (props) => {
  const fatchData = props.data;
  console.log(fatchData);

  const path = `reviews/${fatchData}`; // Invalid path
  const encodedPath = encodeURIComponent(path);

  const [addInfo, setAddInfo] = useState({
    ratingNumber: "",
    ratingText: "",
  });

  const [displayStyleBtn, setDisplayStyleBtn] = useState("inline");

  const [displayStyleUpdate, setDiplayStyleUpdate] = useState("none");
  const updateBtnClicked = () => {
    setDisplayStyleBtn("none");
    setDiplayStyleUpdate("block");
  };

  const addText = async (Event) => {
    Event.preventDefault();
    const { ratingNumber, ratingText } = addInfo;
    if (ratingNumber && ratingText) {
      window.confirm("comfirm update ??");
      database.child(encodedPath).set(addInfo, (err) => {
        console.warn("error found", err);
        alert("update entered seccess");
      });
    } else {
      alert("enter all data filed ");
    }
  };
  const handlingdata = (e) => {
    const num = e.target.name;
    const value = e.target.value;
    setAddInfo({ ...addInfo, [num]: value });
  };

  const deleteBtnClicked = (fatchData) => {
    if (window.confirm("confirm ??")) {
      database.child(fatchData).remove((err) => {
        if (err) {
          console.log("deleting error", err);
        } else {
          console.log("successfuly data deleted");
        }
      });
    }
  };
  return (
    <>
      <ButtonOtterBody>
        <ButtonInnerBody>
          <Button
            onClick={updateBtnClicked}
            style={{ display: displayStyleBtn }}
          >
            UPDATE
          </Button>
          <Button
            onClick={() => deleteBtnClicked(fatchData)}
            style={{ display: displayStyleBtn }}
          >
            DELETE
          </Button>
          <CreateRating style={{ display: displayStyleUpdate }}>
            <form>
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
                style={{ width: "100%", height: "70px" }}
              />
              <ButtonDiv>
                <button
                  style={{
                    marginRight: "5%",
                    width: "30%",
                    height: "40px",
                  }}
                >
                  CANCEL
                </button>
                <button
                  onClick={addText}
                  style={{ width: "30%", height: "40px" }}
                >
                  UPDATE
                </button>
              </ButtonDiv>
            </form>
          </CreateRating>
        </ButtonInnerBody>
      </ButtonOtterBody>
    </>
  );
};

export default CrudOpration;
