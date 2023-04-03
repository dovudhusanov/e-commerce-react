import styled, {keyframes} from "styled-components";

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
      position: relative;

      &:hover {
        background-color: var(--color-blue);
        color: white;
      }
      
      & > div{
        padding: 9px 20px;
      }

      ${(props) => {
        if (props.productAdded) {
          return `
                background-color: var(--color-blue);
                color: white;
                 
                  &:hover {
                    background-color: rgb(10, 105, 194);
                  }
              `
        } else {
          return `
                background-color: rgb(32, 145, 249, 0.1);
                color: var(--color-blue);
              `
        }
      }}
      ${(props) => {
        if (props.disabled) {
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

const spin = keyframes`
  100% {transform: rotate(360deg)}
`

export const Spinner  = styled.div`
  display: block;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 8px;
  left: calc(50% - 17px);
  background: transparent;
  box-sizing: border-box;
  border-top: 4px solid white;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 100%;
  animation: ${spin} 0.6s ease-out infinite;
`