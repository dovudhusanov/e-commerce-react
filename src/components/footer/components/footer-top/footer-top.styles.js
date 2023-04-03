import styled from "styled-components";

export const FooterTopBar = styled.div`
  background: #121212;
  padding: 20px 0;
`;

export const FooterBarItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 460px) {
    flex-direction: column;
  }
`;

export const FooterBarTitle = styled.h1`
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .6px;
  text-transform: uppercase;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const FooterTopContact = styled.div`
  position: relative;
  left: -30px;

  @media screen and (max-width: 768px) {
    left: 0;
    padding: 0 10px;
  }

  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;

export const FooterTopContactInput = styled.input`
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 0 10px 20px;
  background: #414141;
  width: 400px;
  margin-right: 10px;

  &::placeholder {
    color: #8D8D8D;
  }

  @media screen and (max-width: 940px) {
    width: 60%;
  }
`;

export const FooterTopContactButton = styled.button`
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .6px;
  opacity: 90%;
  padding: 8px 20px;
  background: transparent;
  text-transform: uppercase;
  transition: 0.3s ease;

  &:hover {
    background: #ffffff;
    color: #121212;
    cursor: pointer;
  }
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 460px) {
    margin-top: 15px;
    width: 80%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export const FooterSocialIcon = styled.i`
  color: #ffffff;
  padding-left: 10px;
  cursor: pointer;
  font-size: 16px;
`;