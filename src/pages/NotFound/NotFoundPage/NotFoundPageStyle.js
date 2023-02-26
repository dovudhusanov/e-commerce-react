import styled from "styled-components";

export const NotFoundPageStyle = {
    NotFound: styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      height: 260px;
      align-items: center;
      flex-direction: column;
      margin-top: 150px;
      background-color: white;
      position: absolute;
      top: 0;
      left: 0;

      & h1 {
        font-size: 38px;
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