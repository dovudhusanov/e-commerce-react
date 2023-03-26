import styled from "styled-components";

export const ChangePasswordStyles = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 130px;

  @media screen and (max-width: 820px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 790px) {
    & img {
      display: none;
    }

    & h1 {
      text-align: center;
    }
  }

  @media screen and (max-width: 490px) {
    margin-top: 40px;
    & h1 {
      font-size: 25px !important;
    }
  }
  
  & div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & button{
      width: 100%;
    }
    & a{
      width: 100%;
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

    & li{
      position: relative;
    }
    
    & h1 {
      color: var(--color-blue);
      margin-bottom: 20px;
      font-size: 30px;
    }

    & input {
      width: 100%;
      background: rgb(255, 255, 255);
      border: 2px solid rgb(232, 232, 232);
      border-radius: 10px;
      outline: none;
      padding: 10px 25px;
      font-size: 15px;
      line-height: 16px;
      margin-bottom: 20px;

      &:focus {
        border: 2px solid rgb(32, 145, 249);
      }
    }
  }
`

export const ErrorValid = styled.span`
  color: red;
  position: relative;
  bottom: 10px;
  font-size: 14px;
  line-height: -4px!important;
`