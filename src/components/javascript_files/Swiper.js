import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperSlideOutterBody,
  RatingStarBody,
  SwiperSlideInnerBody,
  RatingStarPoint,
  RatingText,
  RatingBox,
  ThreeDotIcon,
} from "../style/Swiper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import StarPrint from "./LandingPage/StarPrint";

export default function App(props) {
  const data = props.data;
  console.log(data.key);
  const styledInfo = props.style;
  console.log(styledInfo);

  const callBack = (id) => {
    // Event.preventDefault();
    props.back(id);
    console.log(id);
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        style={{ border: "2px solid black", position: "unset" }}
      >
        {Object.keys(data).map((id, index) => {
          return (
            <>
              <SwiperSlide>
                <SwiperSlideOutterBody>
                  <SwiperSlideInnerBody>
                    <RatingStarBody>
                      <RatingBox style={{ marginBottom: `${styledInfo}%` }}>
                        <ThreeDotIcon>
                          <FontAwesomeIcon
                            icon={faEllipsisVertical}
                            // onClick={togglePopup}
                            id="threeDot"
                            onClick={() => callBack(data[id])}
                          />
                        </ThreeDotIcon>
                        <RatingStarPoint>
                          <StarPrint data={data[id].ratingNumber} />
                        </RatingStarPoint>
                        <RatingText>{data[id].ratingText}</RatingText>
                      </RatingBox>
                    </RatingStarBody>
                  </SwiperSlideInnerBody>
                </SwiperSlideOutterBody>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
