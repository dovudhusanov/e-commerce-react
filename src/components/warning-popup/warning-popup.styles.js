import styled from "styled-components";

export const WarningPopupStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.27);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WarningPopupCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  
  & span{
    font-size: 18px;
    font-weight: 500;
  }
  
  & div{
    margin-top: 25px;
    
    & button{
      margin: 0 10px 0 0;
    }
  }
`