import styled from "styled-components";

export const CartStyle = {
    CartMain: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;

      @media screen and (max-width: 1070px) {
        flex-direction: column;
        align-items: center;
        margin-top: 0;
      }
    `,

    Empty: styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & div {
        margin-top: 100px;

        & i {
          font-size: 60px;
          color: #a9a9a9;
        }

        & h1 {
          font-size: 38px;
          color: #a9a9a9;
          margin-top: 20px;
        }
      }

    `,

    CartProducts: styled.div`
      width: 70%;
      padding: 20px 30px 30px 0;

      @media screen and (max-width: 1070px) {
        width: 100%;
        padding: 20px 0;
      }

      & > div {
        :nth-child(2) {
          border-top: 2px solid rgba(128, 128, 128, 0.18);
          padding-top: 20px;
        }
      }
    `,

    Title: styled.div`
      display: flex;
      align-items: center;
      position: relative;
      top: 20px;

      & h1 {
        font-size: 22px;
        padding-right: 20px;
      }

      & span {
        position: relative;
        top: 1px;
      }
    `,

    ProductItems: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 40px 0;
      border-bottom: 2px solid rgba(128, 128, 128, 0.18);
      padding-bottom: 20px;

      @media screen and (max-width: 626px) {
        flex-direction: column;
        align-items: center;
      }

      @media screen and (max-width: 525px) {
        align-items: baseline;
      }
    `,

    ProductLeft: styled.div`
      display: flex;
      align-items: center;

      @media screen and (max-width: 626px) {
        flex-direction: row-reverse;
        align-items: start;
        justify-content: space-between;
        width: 70%;
      }

      @media screen and (max-width: 525px) {
        width: 100%;
      }

      & > div {
        display: flex;
        align-items: center;

        @media screen and (max-width: 626px) {
          flex-direction: column;
          align-items: baseline;
          max-width: 500px;
        }

        & h3 {
          font-size: 17px;
          color: #1a1a1a;
          @media screen and (max-width: 626px) {
            margin-top: 10px;
          }
        }

        & span {
          font-size: 14px;
          color: grey;
          padding: 20px 0;
        }

        & div {
          & div {
            margin-top: 20px;
          }
        }

        & button {
          background-color: rgba(255, 0, 0, 0.16);
          border: none;
          font-size: 13px;
          padding: 7px 16px;
          margin-right: 25px;
          border-radius: 8px;
          color: red;
          cursor: pointer;
          font-weight: 500;
          transition: 0.3s ease;

          &:hover {
            background-color: red;
            color: white;
          }

          & {
            i {
              padding-right: 5px;
            }
          }

          &:nth-child(1) {
            background-color: rgba(32, 145, 249, 0.16);
            color: var(--color-blue);

            ${(props) => {
              if(props.whishlist) {
                return `
                background-color: var(--color-blue);
                color: white;
                & i {
                   color: white !important;
                }
                &:hover {
                  background-color: var(--color-blue) !important;
                }
              `
              } else {
                return `
                background-color: rgb(32, 145, 249, 0.1);
                color: var(--color-blue);
              `
              }
            }}
            &:hover {
              background-color: rgba(32, 145, 249, 0.33);
            }

            & i {
              color: rgba(32, 145, 249, 0.42);
            }
          }
        }
      }

      & img {
        width: 100px;
        margin: 0 20px;

        @media screen and (max-width: 626px) {
          margin: 0;
          width: 120px;
        }
      }
    `,

    ProductRight: styled.div`
      position: relative;

      @media screen and (max-width: 626px) {
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
      }

      @media screen and (max-width: 525px) {
        width: 100%;
      }
    `,

    Counter: styled.div`
      border: 1px solid rgba(128, 128, 128, 0.29);
      border-radius: 2px;
      padding: 5px;
      display: flex;
      align-items: center;

      & button {
        border: none;
        background-color: transparent;
        font-size: 18px;
        color: #919191;
        margin: 0 20px 0 7px;
        cursor: pointer;

        &:last-child {
          margin: 0 7px 0 20px !important;
        }
      }
    `,

    Price: styled.h3`
      font-size: 18px;
      font-weight: 500;
      text-align: right;
      padding-top: 20px;
      position: relative;
      top: 10px;

      @media screen and (max-width: 626px) {
        top: 0;
        padding-top: 0;
      }
    `,


    CheckOut: styled.div`
      max-width: 400px;
      margin-top: 82px;

      @media screen and (max-width: 1070px) {
        margin-top: 0;
        margin-bottom: 20px;
      }

      & > div {
        border-radius: 8px;
        padding: 30px;
        background: rgb(255, 255, 255);
        box-shadow: rgb(0 0 0 / 7%) 0px 4px 20px;
      }
    `,

    Total: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
    `,

    CheckoutItems: styled.div`
      display: flex;
      flex-direction: column;

      & span {
        &:first-child {
          margin-top: 10px;
        }
      }
    `,
}