import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #E5E5E5;
    --light-gray: #F9F9F9;//var(--white)
    --white: #ffffff;
    --green: #69D531;
    --purple: #622EE5;
  }

  html{
    @media(max-width: 1080px){
      font-size:93.75%
    }

    @media(max-width: 720px){
      font-size:87.5%
    }

    @media(max-width: 1080px){
      font-size:93.75%
    }
 }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--light-gray);
    -webkit-font-smmothing: antialiased;
  }
  
  body, input, button {
    font-family: 'Lato', serif;
    font-size: 16px;
  }

 
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;