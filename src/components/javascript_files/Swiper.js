import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperSlideOutterBody,
  RatingStarBody,
  SwiperSlideInnerBody,
  RatingStarPoint,
  RatingText,
  RatingBox,
} from "../style/Swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import StarRating from "./StarRating";
import StarPrint from "./LandingPage/StarPrint";

export default function App(props) {
  const data = props.data;
  const styledInfo = props.style;
  console.log(styledInfo);

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
        style={{ border: "2px solid black" }}
      >
        {data.map((information) => {
          return (
            <>
              <SwiperSlide>
                <SwiperSlideOutterBody>
                  <SwiperSlideInnerBody>
                    <RatingStarBody>
                      <RatingBox style={{ marginBottom: `${styledInfo}%` }}>
                        <RatingStarPoint>
                          <StarPrint data={information.ratingNumber} />
                        </RatingStarPoint>
                        <RatingText>{information.ratingText}</RatingText>
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
