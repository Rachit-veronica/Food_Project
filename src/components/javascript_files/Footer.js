import React from "react";
import {
  AppleBtnH1,
  AppleBtnLogo,
  AppleBtnP,
  AppleBtnText,
  AppleStoreDownlaodBtn,
  DownloadBtn,
  DownloadSelectionText,
  DownloadTextH2,
  FollowUsH1,
  FollowUsHeadLine,
  FollowUsSeletor,
  FollowUsSeletorLi,
  FollowUsSeletorUl,
  FooterDownloadSelection,
  FooterFollowUs,
  FooterHelpUs,
  FooterInnerBody,
  FooterJoinUs,
  FooterLogo,
  FooterOutterBody,
  GoogleBtnH1,
  GoogleBtnP,
  GoogleBtnText,
  GooglePlayDownlaodBtn,
  GooleBtnLogo,
  HelpUsH1,
  HelpUsHeadLine,
  HelpUsSeletor,
  HelpUsSeletorLi,
  HelpUsSeletorUl,
  JOinUSH1,
  JoinUsHeadLine,
  JoinUsSeletor,
  JoinUsSeletorLi,
  JoinUsSeletorUl,
  LogoH1,
  LogoP,
  Logoption,
  LogoSelect,
  LogoText,
  TextP,
} from "../style/FooterStyle";

const Footer = () => {
  return (
    <FooterOutterBody>
      <FooterInnerBody>
        <FooterLogo>
          <LogoText>
            <LogoP>TM</LogoP>
            <LogoH1>Cartzilla</LogoH1>
          </LogoText>
          <LogoSelect>
            <Logoption>India</Logoption>
            <Logoption>Pak</Logoption>
            <Logoption>Napal</Logoption>
          </LogoSelect>
        </FooterLogo>
        {/* ---------------- */}
        <FooterJoinUs>
          <JoinUsHeadLine>
            <JOinUSH1>Join Us</JOinUSH1>
          </JoinUsHeadLine>
          <JoinUsSeletor>
            <JoinUsSeletorUl>
              <JoinUsSeletorLi>
                <TextP>Careers</TextP>
              </JoinUsSeletorLi>
              <JoinUsSeletorLi>
                <TextP>Restaurants</TextP>
              </JoinUsSeletorLi>
              <JoinUsSeletorLi>
                <TextP>Become a Courier</TextP>
              </JoinUsSeletorLi>
              <JoinUsSeletorLi>
                <TextP>About</TextP>
              </JoinUsSeletorLi>
            </JoinUsSeletorUl>
          </JoinUsSeletor>
        </FooterJoinUs>
        {/* ---------------- */}
        <FooterHelpUs>
          <HelpUsHeadLine>
            <HelpUsH1>Let us help you</HelpUsH1>
          </HelpUsHeadLine>
          <HelpUsSeletor>
            <HelpUsSeletorUl>
              <HelpUsSeletorLi>
                <TextP>Help Center</TextP>
              </HelpUsSeletorLi>
              <HelpUsSeletorLi>
                <TextP>Support</TextP>
              </HelpUsSeletorLi>
              <HelpUsSeletorLi>
                <TextP>Contacts</TextP>
              </HelpUsSeletorLi>
            </HelpUsSeletorUl>
          </HelpUsSeletor>
        </FooterHelpUs>
        {/* --------------------------- */}
        <FooterFollowUs>
          <FollowUsHeadLine>
            <FollowUsH1>Download our app</FollowUsH1>
          </FollowUsHeadLine>
          <FollowUsSeletor>
            <FollowUsSeletorUl>
              <FollowUsSeletorLi>
                <TextP>Facebook</TextP>
              </FollowUsSeletorLi>
              <FollowUsSeletorLi>
                <TextP>Twitter</TextP>
              </FollowUsSeletorLi>
              <FollowUsSeletorLi>
                <TextP>Instagram</TextP>
              </FollowUsSeletorLi>
            </FollowUsSeletorUl>
          </FollowUsSeletor>
        </FooterFollowUs>
        {/* ------------------------- */}
        <FooterDownloadSelection>
          <DownloadSelectionText>
            <DownloadTextH2>Download our app</DownloadTextH2>
          </DownloadSelectionText>
          <DownloadBtn>
            <AppleStoreDownlaodBtn>
              <AppleBtnLogo src="#" />
              <AppleBtnText>
                <AppleBtnP>Download on the</AppleBtnP>
                <AppleBtnH1>App Store</AppleBtnH1>
              </AppleBtnText>
            </AppleStoreDownlaodBtn>
            <GooglePlayDownlaodBtn>
              <GooleBtnLogo src="#" />
              <GoogleBtnText>
                <GoogleBtnP>Download on the</GoogleBtnP>
                <GoogleBtnH1>Google Play</GoogleBtnH1>
              </GoogleBtnText>
            </GooglePlayDownlaodBtn>
          </DownloadBtn>
        </FooterDownloadSelection>
      </FooterInnerBody>
    </FooterOutterBody>
  );
};

export default Footer;
