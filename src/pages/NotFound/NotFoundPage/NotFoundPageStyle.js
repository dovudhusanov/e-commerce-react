import styled from "styled-components";

export const NotFoundPageStyle = {
    NotFound: styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-top: 150px;

      & h1 {
        font-size: 38px;
        color: #a9a9a9;
        
        @media screen and (max-width: 425px) {
          font-size: 30px;
        }
      }

      & button {
        margin-top: 20px;
        background-color: rgba(49, 49, 196, 0.1);
        color: var(--color-blue);
        transition: all .2s;
        font-size: .875rem;
        font-weight: 500;
        border: none;
        cursor: pointer;
        padding: 12px 20px;
        border-radius: 5px;

        &:hover {
          background-color: var(--color-blue);
          color: white;
        }
      }
    `
}