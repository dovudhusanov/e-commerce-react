import styled from "styled-components";

export const ResetPasswordStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;

  & form {
    & h1 {
      color: var(--color-black);
      font-size: 30px;
      text-align: center;
    }

    & p {
      text-align: center;
      color: grey;
      margin: 10px 0 20px 0;
      font-size: 15px;
    }

    & button {
      width: 100%;
    }
  }
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  & a {
    width: 100%;
  }
`