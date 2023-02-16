import styled from "styled-components";

export const NavbarBottomStyle = {
    NavbarBottom: styled.ul`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      @media screen and (max-width: 1135px) {
        & li:nth-child(10) {
          display: none!important;
        }
      }
      
      @media screen and (max-width: 1050px) {
        & li:nth-child(9) {
          display: none!important;
        }
      }
      
      @media screen and (max-width: 950px) {
        & li:nth-child(8) {
          display: none!important;
        }
      }

      @media screen and (max-width: 850px) {
        & li:nth-child(7) {
          display: none!important;
        }
      }
      
      @media screen and (max-width: 820px) {
        & li{
          display: none;
        }
      }
      
      & li {
        font-size: 0.875rem;
        & a {
          font-size: 0.875rem;
          letter-spacing: -.4px;
          color: #444444;
          position: relative;
          padding-bottom: 10px;

          ::before {
            background-color: var(--color-blue);
            bottom: 0;
            content: "";
            height: 2px;
            left: 50%;
            position: absolute;
            transform: translateX(-50%);
            transition: .4s ease;
            width: 0;
          }

          :hover::before {
            width: 100%;
          }
        }
      }

      & span {
        color: #818181;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
      }
    `
}