import styled from "styled-components";

export const NotFoundPageStyles = {
    NotFound: styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      height: 260px;
      align-items: center;
      flex-direction: column;
      margin-top: 150px;
      background-color: white;
      
      & img{
        width: 300px;
      }

      & h1 {
        font-size: 20px;
        margin-top: 15px;
        color: #a9a9a9;

        @media screen and (max-width: 425px) {
          font-size: 30px;
        }
      }

      & button {
        margin-top: 20px;
      }
    `
}