import styled from "styled-components";

export const VerifyCodeStyle = {
    Form: styled.form`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 160px;
      
      & > div{
        margin-top: 50px;
      }
      
      & h1{
        color: var(--color-black);
        max-width: 700px;
        text-align: center;
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
      }
    `
}