import styled from "styled-components";

export const CategoryModal = {
    ModalCategory: styled.div`
      transform: translateY(-10px);
      transition: all 0.3s ease 0s;
      visibility: hidden;
      opacity: 0;
      z-index: 1000;
      position: relative;
      top: -30px;
      width: 100%;
      
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
      height: 700px;
      background-color: white;
      overflow: hidden;
      
    `,

    ModalItems: styled.div`
      max-width: 1240px;
      margin: 0 auto;
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