import styled from "styled-components";

export const PopupBack = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  top: 5px;
  position: fixed;
  left: 0;
  z-index: 9999999;
  visibility: hidden;
  opacity: 0;
  transition: 0.2s ease;
  transform: scale(.9);
  
  ${(props) => {
      if(props.showPopup) {
          return `
            visibility: visible;
            opacity: 1;
            top: 25px;
            transform: scale(1);
          `
      }
  }}
`
export const Popup = styled.div`
  background-color: white;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  max-width: 600px;
  width: 600px;
  position: relative;
`
export const Product = styled.div`
  display: flex;
  align-items: center;
  
  & img{
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`
export const ProductInfo = styled.div`
  margin-left: 20px;

  & h4 {
    color: #444444;
    font-size: 16px;
  }
  
  & span{
    font-size: 15px;
    color: var(--color-black);
    padding: 20px 0;
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  text-align: right;
  
  & i{
    position: absolute;
    margin-bottom: 10px;
    cursor: pointer;
    top: 20px;
    right: 20px;
    font-size: 20px;
  }
  
  & a{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: var(--color-blue);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    transition: 0.3s ease;
    padding: 10px;
    border-radius: 6px;
    
    &:hover{
      background-color: rgb(32,145,249,0.1);
    }
  }
`
