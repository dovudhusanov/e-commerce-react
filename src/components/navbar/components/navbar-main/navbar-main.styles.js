import styled from "styled-components";

export const NavbarMainStyles = {
    Navbar: styled.div`
      width: 100%;
      padding: 13px 0 50px 0;
      height: 50px;
      z-index: 4000;
      //border-top: 5px solid var(--color-blue);
      background: rgba(85, 170, 246, 0.01);
      border-bottom: 1px solid rgba(128, 128, 128, 0.23);
      
      @media screen and (max-width: 820px) {
        min-height: 120px;
        height: auto;
        
        & .auth-icon{
          display: none;
        }
      }
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
      font-size: 24px;
      color: var(--color-blue);
      @media screen and (max-width: 520px) {
        font-size: 22px;
      }
    `,

    SearchBar: styled.div`
      display: flex;
      align-items: center;
      width: 60%;
      height: 100%;

      @media screen and (max-width: 970px) {
        width: 40%;
      }
      
      @media screen and (max-width: 820px) {
        position: absolute;
        bottom: -50px;
        width: 100%;
      }
    `,

    NavbarRight: styled.div`
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 152px;

      & .profile-btn {
        display: flex;
        align-items: center;

        & img {
          width: 35px;
          object-fit: cover;
          height: 35px;
          border-radius: 50%;

          @media screen and (max-width: 590px) {
            width: 28px;
            height: 28px;
          }
        }
      }

      & .user-cart {
        position: relative;
        display: none;
        margin-left: 7px;

        & p {
          left: 20px;
          top: 2px;
        }

        @media screen and (max-width: 820px) {
          display: block;
        }

        @media screen and (max-width: 590px) {
          & p {
            top: 0;
            left: 15px;
            width: 14px;
            height: 14px;
          }
        }

        & i {
          padding-right: 0;
        }
      }

      ${(props) => {
        if (props.user) {
          return `
                 width: initial;
              `
        }
      }}
      & .icon-nav {
        position: relative;
        display: none;
        margin-left: 7px;

        &:hover {
          & p {
            background-color: white !important;
            color: var(--color-blue);
          }
        }

        & p {
          top: 1px;
          left: 20px;
        }

        & button {
          padding: 9px 10px;
        }

        & i {
          padding-right: 0;
        }
      }

      @media screen and (max-width: 820px) {
        //display: inline;
        width: auto;
        & .icon-nav {
          display: block;
        }

        ${(props) => {
          if (props.user) {
            return `
                 & .icon-nav {
                    display: none !important;
                   }
              `
          }
        }}
      }

      & button {
        padding: 10px 10px;
      }

      .active {
        & button {
          background-color: var(--color-blue);
          color: white;
        }

        & p {
          background-color: white !important;
          color: var(--color-blue);
        }
      }

      & a {
        & i {
          padding-right: 8px;
        }

        & span {
          position: static;
        }
      }

      @media screen and (max-width: 590px) {

        & button {
          padding: 5px 5px;
        }

        & a {
          & span {
            position: static;
            display: none;
          }
        }
      }
    `,
}