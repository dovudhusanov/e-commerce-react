import styled from "styled-components";

export const CategoryModal = styled.ul`
  width: 270px;
  border-radius: 10px;
  padding: 15px;
  background: rgb(255, 255, 255);
  z-index: 999;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  position: absolute;
  top: -20px;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease all;
  transform: scale(.7);
  
  .active{
    background-color: var(--color-blue);

    & li {
      color: white;
    }

    & i{
      color: var(--color-white);
    }
  }

  & a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    padding: 10px;
    margin: 3px 0;
    border-radius: 5px;
    transition: 0.1s ease;

    &:hover{
      background-color: var(--color-blue);
      color: white;
      
      & li {
        color: white;
      }

      & i{
        color: var(--color-white);
      }
    }
  }
  
  ${(props) => {
      if(props.showCategories) {
          return `
            visibility: visible;
            opacity: 1;
            top: 70px;
            transform: scale(1);
          `
      }
  }}
`

export const CategoryModalItems = styled.li`
  color: rgb(54, 58, 69);
  font-size: 14px;
  line-height: 16.8px;
  letter-spacing: 0.5px;
  font-style: normal;
  transition: 0.1s ease;
  font-weight: 500;
  
  & span{
    font-size: 18px;
    & i{
      color: var(--color-blue);
      width: 28px;
    }
  }
`