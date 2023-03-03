import styled from "styled-components";

export const ProductStyle = {

    Product: styled.div`
      display: flex;
      flex-grow: 1;
      flex-basis: 20%;
      max-width: 20%;
      height: 100%;

      @media screen and (max-width: 1159px) {
        flex-basis: 25%;
        max-width: 25%;
      }
      
      @media screen and (max-width: 1045px) {
        flex-basis: 33%;
        max-width: 33%;
      }

      @media screen and (max-width: 625px) {
        flex-basis: 50%;
        max-width: 50%;
      }
    `,

    Products: styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 50px;

      @media screen and (max-width: 375px) {
        justify-content: center;
      }
    `,

    ProdcutCard: styled.div`
      width: 100%;
      height: 100%;
      border-radius: 8px;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      margin: 6px;
      position: relative;
      transition: 0.3s ease;
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
        height: 130px !important;
      }

    }

    @media screen and (max-width: 715px) {
      & button {
        font-size: 11px !important;
        padding: 10px 8px;
      }
    }

    @media screen and (max-width: 363px) {
      & button {
        padding: 8px 6px;
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

      @media screen and (max-width: 380px) {
        height: 130px;
        padding: 5px 13px 15px 13px !important;
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
          color: var(--color-blue);
          font-size: 16px;
          display: inline;

          :nth-child(1) {
            margin-right: 15px;
          }
          
          & i {
            cursor: pointer;
          }

          @media screen and (max-width: 490px) {
            font-size: 14px;
          }
          
          @media screen and (max-width: 400px) {
            :nth-child(1) {
              margin-right: 5px!important;
            }
            font-size: 14px!important;
          }
        }
      }
    }

    & span {
      font-weight: 500;
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
        left: 12.7px;
        font-size: 13px;
      }

      @media screen and (max-width: 380px) {
        top: 117px !important;
      }
    `
}