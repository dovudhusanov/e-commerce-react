import styled from "styled-components";

export const ResetPasswordStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 100px;
  width: 100%;

  & form {
    & h1 {
      color: var(--color-black);
      font-size: 30px;
    }

    & p {
      color: grey;
      margin: 10px 0 20px 0;
      font-size: 15px;
    }

    & div:last-child {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;

      & a {
        width: 100%;
      }
    }

    & button {
      width: 100%;
    }
  }
`