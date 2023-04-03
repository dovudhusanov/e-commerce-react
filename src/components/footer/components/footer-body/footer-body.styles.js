import styled from "styled-components";

export const FooterUsefulLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  background: #ffffff;
  flex-wrap: wrap;
`;

export const FooterLinksList = styled.ul`
  line-height: 35px;
  margin: 20px 15px;
  
  & li {
    font-size: 12px;
    font-weight: 400;
    opacity: 80%;
    color: #121212;
    
    & a{
      color: #121212;
      position: relative;
      transition: 0.3s ease;
      padding-bottom: 5px;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        background: var(--color-blue);
        width: 0;
        height: 2px;
        transition: 0.3s ease;
      }

      &:hover::before {
        width: 100%;
      }
    }

    &:nth-child(1) {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .6px;
      text-transform: uppercase;
    }
  }
`;