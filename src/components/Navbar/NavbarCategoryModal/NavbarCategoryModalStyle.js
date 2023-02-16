import styled from "styled-components";

export const CategoryModal = {
    ModalCategory: styled.div`
      transform: translateY(-10px);
      transition: all 0.3s ease 0s;
      visibility: hidden;
      opacity: 0;
      z-index: 1000;
      position: relative;
      top: -50px;
      width: 100%;
      
      @media screen and (max-width: 820px) {
        display: none;
      } 
      
      ${(props) => {
        if (props.showCategory) {
          return `
                visibility: visible;
                transform: translateY(0px);
                transition: all 0.3s ease 0s;
                opacity: 1;
                z-index: 1000
                
              `
        }
      }}
    `,

    Modal: styled.div`
      position: absolute;
      z-index: 999;
      left: 0;
      width: 100%;
      height: 0;
      background-color: white;
      overflow: hidden;

      ${(props) => {
        if (props.showCategory) {
          return `
               height: 700px; 
              `
        }
      }}
    `,

    ModalItems: styled.div`
      position: relative;
      max-width: 1240px;
      margin: 0 auto;
      padding: 25px 15px;
    `,

    Close: styled.button`
      position: absolute;
      right: 10px;
      cursor: pointer;
      fill: #141415;
      padding: 8px;
      box-sizing: content-box;
      background-color: rgba(118,121,127,0.1);
      transition: 250ms background-color;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      border: none;
      
      & i{
        font-size: 20px;
      }
    `,

    Shadow: styled.div`
      box-shadow: 0px 550px 200px 50px #000;
    `
}