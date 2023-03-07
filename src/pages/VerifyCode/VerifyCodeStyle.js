import styled from "styled-components";

export const VerifyCodeStyle = {
    Form: styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 160px;
      
      @media screen and (max-width: 820px) {
        margin-top: 80px;
      }
      
      & > div{
        margin-top: 50px;
      }

      @media screen and (max-width: 425px) {
        margin-top: 50px;
      }
      
      & h1{
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
      
      & input{
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
        width: 1.6em!important;
        border-radius: 8px;
        outline: none;
        
        &:focus{
          box-shadow: 0 0 0px 3px var(--color-blue);
          border: none;
        }

        @media screen and (max-width: 600px) {
          height: 1em;
          width: 1em!important;
        }

        @media screen and (max-width: 600px) {
          height: .8em;
          width: .8em!important;
        }
      }
      
      & button{
        color: var(--color-white);
        border-radius: 10px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;
        padding: 10px 20px;
        font-weight: 700;
        background: rgb(32, 145, 249);
        margin-top: 40px;

        @media screen and (max-width: 600px) {
          padding: 8px 12px;
          font-size: 15px;
          margin-top: 20px;
        }
      }
    `
}