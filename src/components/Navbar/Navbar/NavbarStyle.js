import styled from "styled-components";

export const NavbarStyle = {
    Navbar: styled.div`
      width: 100%;
      margin: 10px 0 20px 0;
      height: 70px;
      z-index: 999;
    `,

    NavbarItems: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
    `,

    Burger: styled.div`
      margin-right: 20px;
      font-size: 20px;
      color: grey;
      position: relative;
      top: 3px;
      cursor: pointer;
      display: none;
      @media screen and (max-width: 820px) {
        display: block;
      }
      @media screen and (max-width: 520px) {
        margin-right: 12px;
        top: 1px;
      }
    `,

    Logo: styled.h1`
      font-size: 28px;
      color: var(--color-blue);
      @media screen and (max-width: 520px) {
        font-size: 22px;
      }
    `,

    SearchBar: styled.div`
      display: flex;
      align-items: center;
      width: 50%;
      @media screen and (max-width: 820px) {
        position: absolute;
        bottom: -50px;
        width: 100%;
      }
    `,

    CategoryButton: styled.button`
      display: inline-flex;
      border: none;
      cursor: pointer;
      justify-content: space-around;
      align-items: center;
      transition: all .2s;
      font-size: .875rem;
      font-weight: 500;
      text-decoration: none;
      border-radius: 4px;
      background-color: rgba(49, 49, 196, 0.1);
      color: var(--color-blue);
      height: 40px;
      width: 160px;
      margin-right: 7px;
      position: relative;

      &:hover {
        background-color: rgba(49, 49, 196, 0.13);
      }

      @media screen and (max-width: 990px) {
        position: relative;
        right: 20px;
      }

      @media screen and (max-width: 820px) {
        display: none;
      }
    `,

    CategoryIcon: styled.div`
      position: relative;
      top: -11px;
      left: 7px;
    `,

    CategoryBtnRect: styled.div`
      transition: all .11s .11s ease-out, transform .11s .001ms ease-out;
      position: absolute;
      width: 18px;
      height: 12px;
      border: 2px solid var(--color-blue);
      border-radius: 2px;
      background: var(--color-blue);
      box-sizing: border-box;
      transform: translate(-50%, 0);
      top: 9px;
      left: 50%;

      & div {
        transition: all .11s .11s ease-out;
        background-color: #e5e5ff;
        width: 100%;
        height: 100%;
        border-radius: 1px;
        margin: auto;
      }
    `,

    CategoryBtnTop: styled.div`
      transition: all .11s .11s ease-out, opacity .001ms .11s;
      position: absolute;
      width: 13.991999999999999px;
      height: 0;
      border-top: 2px solid var(--color-blue);
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      top: 3px;
      transform: translate(-50%, 0);
      left: 50%;
    `,

    CategoryButtonText: styled.div`
      height: 100%;
      display: flex;
      align-items: center;
    `,

    CategoryBtnBottom: styled.div`
      transition: all .11s .11s ease-out, transform .11s .001ms ease-out;
      position: absolute;
      width: 15.984000000000002px;
      height: 0;
      background: var(--color-blue);
      border-top: 2px solid var(--color-blue);
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      top: 6px;
      transform: translate(-50%, 0);
      left: 50%;
    `,


    NavbarRight: styled.div`
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 22%;

      & a {
        padding: 8px 10px;
        border-radius: 4px;
        color: black !important;

        &:hover {
          background-color: #f4f5f5;
        }
      }

      & span {
        font-weight: 600;
        font-size: 15px;
        padding-left: 6px;
        color: (--color-black) !important;
        @media screen and (max-width: 1030px) {
          display: none;
        }

        & i {
          padding-right: 8px;
        }
      }

      @media screen and (max-width: 1167px) {
        width: 25% !important;
      }

      @media screen and (max-width: 1030px) {
        width: 20% !important;
      }

      @media screen and (max-width: 520px) {
        width: 33% !important;
      }
    `,
}