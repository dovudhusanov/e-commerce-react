import styled from "styled-components";

export const NavTopStyle = {
    NavbarTop: styled.div`
      width: 100%;
      height: 32px;
      background-color: #f4f5f5;
      color: #212121;
      font-size: 0.875rem;
    `,

    NavbarTopItems: styled.div`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 30px;
      @media screen and (max-width: 820px) {
        justify-content: center;
      }
    `,

    NavTopLocation: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 280px;
      width: 280px;
      
      & span {
        & span{
          text-decoration: underline;
          cursor: pointer;
        }
        &:nth-child(2) {
          font-weight: 600;
          cursor: pointer;
        }
        & i{
          padding-right: 5px;
        }
      }
      
      @media screen and (max-width: 990px) {
        width: 250px;        
        
        & span {
          font-size: 12px;
        }
      }
      
      @media screen and (max-width: 820px) {
        display: none;
      }

    `,

    NavTopCenter: styled.span`
      text-align: center;


      @media screen and (max-width: 990px) {
        font-size: 13px;
      }
      @media screen and (max-width: 820px) {
        font-size: 14px!important;
      }
      @media screen and (max-width: 520px) {
        font-size: 12px !important;
      }
    `,

    NavTopRight: styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 280px;
      width: 280px;
      
      & span{
        display: flex;
        align-items: center;
        font-weight: 500;
        
        :hover{
          cursor: pointer;
        }
      }
      
      & img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 8px;
      }

      @media screen and (max-width: 990px) {
        width: 200px;
        & span {
          font-size: 12px;
        }
      }
      @media screen and (max-width: 820px) {
        display: none;
      }
    `,
}