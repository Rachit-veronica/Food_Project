// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   SwiperSlideOutterBody,
//   RatingStarBody,
//   SwiperSlideInnerBody,
//   RatingStarPoint,
//   RatingText,
//   RatingBox,
//   ThreeDotIcon,
// } from "../style/Swiper";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import { FreeMode, Pagination } from "swiper";

// export default function App(props) {
//   const data = props.data;
//   console.log(data.key);
//   const styledInfo = props.style;
//   console.log(styledInfo);

//   const callBack = (id) => {
//     // Event.preventDefault();
//     props.back(id);
//     console.log(id);
//   };

//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//   const [screenSizeStyle, setScereenSizeStyle] = useState("3");
//   const size = () => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   };

//   const indo = () => {
//     if (screenWidth <= 860) {
//       setScereenSizeStyle(2);
//     } else {
//     }
//   };
//   useEffect(() => {
//     size();
//     indo();
//   }, []);

//   return (
//     <>
//       <Swiper
//         slidesPerView={screenSizeStyle}
//         spaceBetween={30}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//         style={{
//           border: "1px solid #ccc",
//           boxShadow: " 0 0 5px rgba(0, 0, 0, 0.3)",
//           position: "unset",
//           borderRadius: "10px 0px 0px 10px",
//           ...(window.innerWidth <= 860 && {
//             borderRadius: "10px 10px 10px 10px",
//           }),
//         }}
//       >
//         {Object.keys(data).map((id, index) => {
//           return (
//             <>
//               <SwiperSlide>
//                 <SwiperSlideOutterBody>
//                   <SwiperSlideInnerBody>
//                     <RatingStarBody>
//                       <RatingBox style={{ marginBottom: `${styledInfo}%` }}>
//                         <ThreeDotIcon>
//                           <FontAwesomeIcon
//                             icon={faEllipsisVertical}
//                             // onClick={togglePopup}
//                             id="threeDot"
//                             onClick={() => callBack(data[id])}
//                           />
//                         </ThreeDotIcon>
//                         <RatingStarPoint>
//                           <StarPrint data={data[id].ratingNumber} />
//                         </RatingStarPoint>
//                         <RatingText>{data[id].ratingText}</RatingText>
//                       </RatingBox>
//                     </RatingStarBody>
//                   </SwiperSlideInnerBody>
//                 </SwiperSlideOutterBody>
//               </SwiperSlide>
//             </>
//           );
//         })}
//       </Swiper>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarPrint from "./LandingPage/StarPrint";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../style/swiper.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import styled from "styled-components";

export default function App(props) {
  const data = props.data;
  const reversedObject = Object.fromEntries(Object.entries(data).reverse());
  console.warn(window.innerWidth);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenSizeStyle, setScereenSizeStyle] = useState("3");
  const size = () => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  };

  const indo = () => {
    if (screenWidth <= 860) {
      setScereenSizeStyle(2);
    }
  };
  useEffect(() => {
    size();
    indo();
  }, []);

  const SwiperGrid = styled.div`
    display: grid;
  `;
  const SwiperText = styled.h4`
    margin-top: 5%;
  `;

  return (
    <>
      <Swiper
        slidesPerView={screenSizeStyle}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {Object.keys(reversedObject).map((id, index) => {
          return (
            <SwiperSlide>
              <SwiperGrid>
                <StarPrint data={reversedObject[id].ratingNumber} />
                <SwiperText>{reversedObject[id].ratingText}</SwiperText>
              </SwiperGrid>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
