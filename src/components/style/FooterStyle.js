import styled from "styled-components";

export const FooterOutterBody = styled.div`
  width: 100%;
  height: min-content;
  margin-top: 5%;
  background-color: #2b3445;
`;
export const FooterInnerBody = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  justify-content: space-around;
  justify-content: space-between;
  margin-top: 2%;
  height: min-content;
  grid-gap: 2%;
  @media (max-width: 860px) {
    grid-template-columns: 47.5% 47.5%;
    grid-gap: 0%;
  }
`;
export const FooterLogo = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  @media (max-width: 860px) {
    margin-bottom: 0%;
  }
`;
export const LogoText = styled.div`
  width: min-content;
`;
export const LogoP = styled.p`
  float: right;
  font-size: small;
  color: white;
`;
export const LogoH1 = styled.h1`
  color: white;
`;
export const LogoSelect = styled.select`
  margin-top: 20%;
  width: 100%;
  height: 30px;
`;

export const Logoption = styled.option`
  font-size: medium;
`;

// ---------------

export const FooterJoinUs = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  @media (max-width: 860px) {
    margin-bottom: 0%;
    text-align: center;
    font-size: 13px;
  }
`;
export const JoinUsHeadLine = styled.div``;
export const JOinUSH1 = styled.h2`
  color: white;
`;
export const JoinUsSeletor = styled.div`
  @media (max-width: 860px) {
    font-size: 15px;
  }
`;
export const JoinUsSeletorUl = styled.ul``;
export const JoinUsSeletorLi = styled.li`
  display: block;
  justify-content: space-between;
  margin-top: 10%;
  cursor: pointer;
  color: #9d999c;
`;
export const TextP = styled.p`
  :hover {
    color: white;
  }
`;
// ----------------

export const FooterHelpUs = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  @media (max-width: 860px) {
    margin-bottom: 0%;
  }
`;
export const HelpUsHeadLine = styled.div`
  text-align: start;
  @media (max-width: 860px) {
    text-align: center;
    font-size: 13px;
  }
`;
export const HelpUsH1 = styled.h2`
  color: white;
`;
export const HelpUsSeletor = styled.div`
  text-align: start;
  @media (max-width: 860px) {
    text-align: center;
    font-size: 15px;
  }
`;
export const HelpUsSeletorUl = styled.ul``;
export const HelpUsSeletorLi = styled.li`
  display: block;
  justify-content: space-between;
  margin-top: 10%;
  cursor: pointer;
  color: #9d999c;
  :hover {
    color: white;
  }
`;
// --------------

export const FooterFollowUs = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  @media (max-width: 860px) {
    margin-bottom: 0%;
    text-align: center;
    font-size: 13px;
  }
`;
export const FollowUsHeadLine = styled.div``;
export const FollowUsH1 = styled.h2`
  color: white;
`;
export const FollowUsSeletor = styled.div`
  @media (max-width: 860px) {
    text-align: center;
    font-size: 15px;
  }
`;
export const FollowUsSeletorUl = styled.ul``;
export const FollowUsSeletorLi = styled.li`
  display: block;
  justify-content: space-between;
  margin-top: 10%;
  cursor: pointer;
  color: #9d999c;

  :hover {
    color: white;
  }
`;

// -------------

export const FooterDownloadSelection = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  @media (max-width: 860px) {
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
    margin-bottom: 0%;
    font-size: 13px;
  }
`;
export const DownloadSelectionText = styled.div``;
export const DownloadTextH2 = styled.h2`
  color: white;
`;
export const DownloadBtn = styled.div`
  margin-top: 20%;
  margin-bottom: 20%;
  display: grid;
  @media (max-width: 860px) {
    grid-template-columns: 50% 50%;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 10%;
  }
`;
// --------
export const AppleStoreDownlaodBtn = styled.button`
  margin-top: 5%;
  width: 90%;
  border-radius: 0px;
  :hover {
    border-radius: 15px;
    transition: 1s;
  }
  display: grid;
  grid-template-columns: 20% 80%;
  @media (max-width: 860px) {
    width: 94%;
    margin-left: 3%;
    margin-right: 3%;
    border-radius: 0px;
  }
`;
export const AppleBtnLogo = styled.div`
  margin-left: 40%;
  margin-top: 12%;
  @media (max-width: 860px) {
    margin-left: 20%;
  }
`;
export const AppleBtnP = styled.p``;
export const AppleBtnH1 = styled.h2``;
export const AppleBtnText = styled.div`
  width: fit-content;
  margin-left: 10%;
`;
// ------------
export const GooglePlayDownlaodBtn = styled.button`
  margin-top: 5%;
  width: 90%;
  border-radius: 0px;
  @media (max-width: 860px) {
    width: 94%;
    margin-left: 3%;
    margin-right: 3%;
    border-radius: 0px;
  }
  :hover {
    border-radius: 15px;
    transition: 1s;
  }
  display: grid;
  grid-template-columns: 20% 80%;
  text-align: center;
  justify-content: center;
`;
export const GooleBtnLogo = styled.div`
  margin-left: 40%;
  margin-top: 12%;
  @media (max-width: 860px) {
    margin-left: 20%;
  }
`;
export const GoogleBtnP = styled.p``;
export const GoogleBtnH1 = styled.h2``;
export const GoogleBtnText = styled.div`
  width: fit-content;
  margin-left: 10%;
`;
