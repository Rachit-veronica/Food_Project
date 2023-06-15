import styled from "styled-components";

export const ReviewOutterBody = styled.div`
  margin-top: 5%;
  width: 100%;
  height: min-content;
`;
export const ReviewInnerBody = styled.div`
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
`;

export const H1ReviewsText = styled.h1`
  margin-top: 5%;
  color: #33373e;
`;

export const ReviewsCardBody = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  display: grid;
  grid-template-columns: 80% 20%;
  @media (max-width: 860px) {
    grid-template-columns: 100%;
  }
`;
export const CreateRating = styled.div`
  /* border: 2px solid black;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 0px 10px 10px 0px; */
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 860px) {
    margin-top: 5%;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    border-radius: 0px 0px 0px 0px;
  }
  @media (max-width: 520px) {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`;
export const Button = styled.button`
  margin-top: 5%;
  margin-bottom: 5%;
  width: 50%;
  height: 30px;
  border-radius: 7px;
  background-color: rgb(196, 20, 20);
  color: white;
  :hover {
    transition: 1s;
    background-color: red;
  }
`;
