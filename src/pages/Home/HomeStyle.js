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

      @media screen and (max-width: 430px) {
        justify-content: space-between;
      }

      @media screen and (max-width: 380px) {
        justify-content: center!important;
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

      @media screen and (max-width: 490px) {
        max-width: 180px;
      }

      @media screen and (max-width: 400px) {
        max-width: 170px;
      }
      
      @media screen and (max-width: 380px) {
        max-width: 100% !important;
      }
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

      @media screen and (max-width: 490px) {
        height: 160px;
      }

      @media screen and (max-width: 380px) {
        height: 200px!important;
      }
    }

    @media screen and (max-width: 620px) {
      & button {
        font-size: 11px !important;
        padding: 6px 10px;
      }
    }

    @media screen and (max-width: 400px) {
      & button {
        font-size: 10px!important;
        padding: 6px 6px !important;
        width: 80px!important;
      }

      @media screen and (max-width: 380px) {
       & button {
         font-size: 12.8px !important;
         padding: 8px 10px!important;
         width: 100px!important;
       }
      }
    }

    & > div {

    `,

    ProductInfo: styled.div`
      padding: 10px 20px;
      height: 127px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      @media screen and (max-width: 490px) {
        padding: 5px 13px;
      }

      & > div {
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: auto;

        @media screen and (max-width: 450px) {
          padding: 7px 0;
        }

        & i {
          margin-right: 15px;
          cursor: pointer;
          color: var(--color-blue);
          font-size: 14px;
          
          
          @media screen and (max-width: 400px) {
            margin-right: 5px!important;
          }

          @media screen and (max-width: 380px) {
            margin-right: 10px!important;
          }
        }
      }
    }

    & span {
      font-weight: 400;
      color: black;
      font-size: 12.8px;
      line-height: 15.36px;
      max-height: 43px;
      margin-top: 15px;

      @media screen and (max-width: 620px) {
        font-size: 12px;
      }

      @media screen and (max-width: 400px) {
        font-size: 11px;
      }

      @media screen and (max-width: 380px) {
        font-size: 12.8px;
      }
    }

    {`,

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


      @media screen and (max-width: 490px) {
        top: 150px;
      }

      @media screen and (max-width: 380px) {
       top: 189px;
      }
    `
}