import styled from "styled-components";

export const NavbarStyle = {
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
      
      @media screen and (max-width: 990px) {
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
        display: none;
      }

    `,

    NavTopCenter: styled.span`
      text-align: center;
      
      @media screen and (max-width: 375px) {
        font-size: 12px;
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
        display: none;
      }
    `,
}