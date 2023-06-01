import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  ButtonOtterBody,
  ButtonInnerBody,
  ButtonDiv,
} from "../../style/LandingPageStyle/crudOprationStyle";

import { CreateRating } from "../../style/ReviewsStyle";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "../../style/StarRatingStyle";

import { getDatabase, ref, child, remove } from "firebase/database";
import db from "../../Backend/Firebase";

const CrudOpration = (props) => {
  const id = props.data;
  console.log(id);
  const dbName = props.dbname;

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
  };
  const handlingdata = (e) => {
    const num = e.target.name;
    const value = e.target.value;
    setAddInfo({ ...addInfo, [num]: value });
  };

  const deleteBtnClicked = () => {
    // const [deleting, setDeleting] = useState(false);

    if (window.confirm("confirm ??")) {
      const dataRef = ref(db, `${dbName}/${id}`);
      console.log(dataRef);
      remove(dataRef)
        .then(() => {
          console.log("Data deleted successfully");
        })
        .catch((error) => {
          console.error("Error deleting data:", error);
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
            onClick={deleteBtnClicked}
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
