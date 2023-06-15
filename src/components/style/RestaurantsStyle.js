import styled from "styled-components";

export const OutterBody = styled.div`
  width: 100%;
  margin-top: 5%;
  height: min-content;
`;

export const InnerBody = styled.div`
  max-width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
`;
export const Card = styled.div`
  max-width: 100%;
  margin-top: 2%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  @media (max-width: 860px) {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }
  @media (max-width: 550px) {
    grid-template-columns: 50% 50%;
  }
`;

export const Img = styled.img`
  width: 80%;
  margin-bottom: 5%;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 520px) {
    width: 90%;
  }
`;
export const CardDiv = styled.div`
  justify-content: space-around;
  justify-content: space-between;
`;
export const H1Text = styled.h1`
  color: #33373e;
`;
export const PText = styled.p`
  color: gray;
  margin-bottom: 5%;
  margin-top: 2%;
`;
