import React, { useState } from "react";
import styled from "styled-components";

const StarPrint = (props) => {
  console.log(props.data);
  const value = props.data;
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(
        <i className="fa fa-star" key={i} style={{ color: "yellow" }}></i>
      );
    } else {
      stars.push(
        <i className="fa fa-star" key={i} style={{ color: "gray" }}></i>
      );
    }
  }



  return (
    <>
      <h1 id="starsSize">{stars}</h1>
    </>
  );
};

export default StarPrint;
