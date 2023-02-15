import styled from "styled-components";

export const NavbarBottomStyle = {
    NavbarBottom: styled.ul`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      & li a {
        font-size: 0.875rem;
        letter-spacing: -.4px;
        color: #444444;
      }

      & span {
        color: #818181;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
      }
    `
}