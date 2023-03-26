import styled from "styled-components";

export const VerifyCodeStyles = {
    Form: styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 160px;

      @media screen and (max-width: 820px) {
        margin-top: 80px;
      }

      & > div {
        margin-top: 50px;
      }

      @media screen and (max-width: 425px) {
        margin-top: 50px;
      }

      & h1 {
        color: var(--color-black);
        max-width: 700px;
        text-align: center;
        font-size: 32px;
        padding: 0 10px;

        @media screen and (max-width: 600px) {
          font-size: 25px;
        }

        @media screen and (max-width: 425px) {
          font-size: 20px;
        }
      }

      & input {
        background: white;
        border: 0.1px solid grey;
        box-shadow: none;
        box-sizing: border-box;
        color: grey;
        font-size: 2.5em;
        height: 1.6em;
        margin: 0.12em;
        padding: 0.4em;
        text-align: center;
        transition: transform .1s ease-out;
        width: 1.6em !important;
        border-radius: 8px;
        outline: none;

        &:focus {
          box-shadow: 0 0 0px 3px var(--color-blue);
          border: none;
        }

        @media screen and (max-width: 600px) {
          height: 1em;
          width: 1em !important;
        }

        @media screen and (max-width: 600px) {
          height: .8em;
          width: .8em !important;
        }
      }

      & button {
        margin-top: 20px;
        max-width: 200px;
        width: 200px;
        background-color: var(--color-blue);
        color: white;
        border-radius: 8px;

        &:hover {
          background-color: rgb(11, 119, 220);
        }
      }
    `
}