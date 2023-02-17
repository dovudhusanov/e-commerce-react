import styled from "styled-components";

export const ProductStyle = {
    Products: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 50px;

      @media screen and (max-width: 1189px) {
        justify-content: space-evenly;
      }

      @media screen and (max-width: 500px) {
        justify-content: space-between;
      }

      @media screen and (max-width: 620px) {
        justify-content: space-evenly;
      }

      @media screen and (max-width: 390px) {
        justify-content: space-between !important;
      }
    `,

    ProdcutCard: styled.div`
      max-width: 250px;
      width: 250px;
      border-radius: 8px;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      margin: 20px;
      position: relative;
      transition: 0.3s ease;

      @media screen and (max-width: 620px) {
        max-width: 200px;
        margin: 20px 0;
      }

      @media screen and (max-width: 450px) {
        max-width: 160px;
        margin: 20px 0;
      }

      @media screen and (max-width: 364px) {
        max-width: 140px;
      }

      &:hover {
        transform: scale(1.02);
      }

      & img {
        width: 100%;
        height: 230px;
        object-fit: cover;
        border-radius: 8px 8px 0 0;

        @media screen and (max-width: 620px) {
          height: 180px;
        }

        @media screen and (max-width: 450px) {
          height: 130px;
        }

        @media screen and (max-width: 364px) {
          height: 110px;
          object-fit: scale-down;
        }
      }

      @media screen and (max-width: 620px) {
        & button {
          font-size: 10px !important;
          padding: 6px 10px;
        }
      }

      @media screen and (max-width: 450px) {
        & button {
          font-size: 8px !important;
          padding: 4px 8px;
        }
      }

      & > div {
        padding: 10px 20px;

        @media screen and (max-width: 450px) {
          padding: 5px 13px;
        }

        & > div {
          padding: 15px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;

          @media screen and (max-width: 450px) {
            padding: 7px 0;
          }

          & i {
            margin-right: 15px;
            cursor: pointer;
            color: var(--color-blue);
            font-size: 17px;

            @media screen and (max-width: 620px) {
              font-size: 12px;
            }
            @media screen and (max-width: 450px) {
              margin-right: 10px;
              font-size: 10px !important;
            }
          }
        }
      }

      & h1 {
        font-size: 18px;
        color: #383838;
        padding: 20px 0 5px 0;

        @media screen and (max-width: 620px) {
          font-size: 14px;
          padding: 5px 0;
        }

        @media screen and (max-width: 500px) {
          font-size: 12px;
        }

        @media screen and (max-width: 450px) {
          font-size: 9px;
        }
      }

      & span {
        font-size: 13px;

        @media screen and (max-width: 620px) {
          font-size: 10px;
        }

        @media screen and (max-width: 450px) {
          font-size: 7px;
        }
      }
    `,

    Price: styled.div`
      position: absolute;
      top: 213px;
      color: white;
      left: 20px;
      padding: 7px 13px !important;
      border-radius: 5px;
      background: linear-gradient(146deg, rgba(101, 188, 255, 1) 0%, rgba(67, 157, 255, 1) 100%);
      font-size: 14px;
      font-weight: 500;

      @media screen and (max-width: 620px) {
        font-size: 10px;
        padding: 5px 10px !important;
        top: 169px;
      }

      @media screen and (max-width: 450px) {
        font-size: 7px;
        padding: 4px 8px;
        top: 118px;
        left: 13px;
      }

      @media screen and (max-width: 364px) {
        top: 99px;
      }

    `
}