import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Montserrat", sans-serif;
  }
  
  ::selection {
    background-color: var(--color-blue);
    color: var(--color-white)
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html body {
    //background-color: #f6f7ff;
    overflow-y: scroll;
  }

  :root {
    --color-black: rgb(37, 43, 66);
    --color-white: white;
    --color-blue: rgb(32, 145, 249);
    --color-grey: #f4f5f5
  }

  .container {
    max-width: 1240px;
    min-width: 320px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .product-container{
    box-shadow: 1px 2px 16px 3px #363A4514;
    border-radius: 10px;
    max-width: 1210px;
  }
  
  .main-app{
    margin-top: 70px;
  }
  
  @media screen and (max-width: 820px) {
    .main-app{
      margin-top: 15px;
    }
  }
  
  a.active{
    font-weight: 700;
  }
  
  .secondText{
    color: rgb(115, 115, 115);
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.2px;
    font-weight: 400;
  }
  
  .error-valid{
    border-color: red!important;
  }

  .activeImage {
    border: 2px solid red;
  }
`

export default GlobalStyles