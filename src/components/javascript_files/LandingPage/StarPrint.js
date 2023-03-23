import React, { useState } from "react";

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
      stars.push(<i className="fa fa-star" key={i}  style={{ color: "gray" }}></i>);
    }
  }

  return <>{stars}</>;
};

export default StarPrint;
