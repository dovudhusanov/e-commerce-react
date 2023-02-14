import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  html body{
    background-color: aliceblue;
  }
  
  :root {
    --color-black: rgb(37, 43, 66);
    --color-white: white;
    --color-blue: rgb(32, 145, 249)
  }

  .container {
    max-width: 1240px;
    min-width: 320px;
    width: 95%;
    margin: 0 auto;
  }
`

export default GlobalStyles