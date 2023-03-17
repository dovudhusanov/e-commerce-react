import styled from "styled-components";


export const UserSettingsFormStyle = styled.div`

`

export const UserSettingsInputs = styled.form`
  max-width: 550px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;

`

export const UserSettingsInput = styled.div`
  max-width: 250px;
  width: 250px;
  margin-bottom: 20px;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
  @media screen and (max-width: 529px) {
    width: 100%;
    max-width: 100%;
  }

  & label {
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
    display: block;
  }
  
  & input{
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-weight: 400;
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.87);
    text-indent: 1rem;
    padding: 0;
    width: 100%;
    height: 2.5rem;
    border-radius: 4px;
    font-family: Roboto, sans-serif;
    
    &:focus{
      outline: 1px solid var(--color-blue);
    }
}
`

export const BottomItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    a, button {
      font-weight: 600;
      text-decoration: underline;
      color: black;
      font-size: 15px;
      border: none;
      background-color: transparent;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
`