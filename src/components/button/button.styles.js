import styled from "styled-components";

export const ButtonStyles = {
    Button: styled.button`
      background-color: rgb(32, 145, 249, 0.1);
      color: var(--color-blue);
      transition: all .2s;
      font-size: .875rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      padding: 12px 20px;
      border-radius: 5px;

      &:hover {
        background-color: var(--color-blue);
        color: white;
      }
      
      ${(props) => {
          if(props.productAdded) {
              return `
                background-color: var(--color-blue);
                color: white;
              `
          } else {
              return `
                background-color: rgb(32, 145, 249, 0.1);
                color: var(--color-blue);
              `
          }
      }}
      ${(props) => {
        if(props.disabled) {
          return `
                user-select: none;
                    color: rgba(32, 145, 249, 0.60);
               
                &:hover {
                    background-color: rgb(32, 145, 249, 0.1);
                    color: rgba(32, 145, 249, 0.60);
                }
              `
        }
      }}
    `
}