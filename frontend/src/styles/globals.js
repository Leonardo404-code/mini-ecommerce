import styled, { createGlobalStyle } from "styled-components";
import MontserratFontWoff from "../fonts/Montserrat.woff";
import MontserratFontWoff2 from "../fonts/Montserrat.woff2";

export default createGlobalStyle`
@font-face { 
  font-family: 'montserrat'; 
  src: local('montserrat'), 
  local('montserrat'), 
  url(${MontserratFontWoff2}) 
  format('woff2'), 
  url(${MontserratFontWoff}) 
  format('woff'); 
  font-weight: 400; 
  font-style: normal; 
}

  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'montserrat', sans-serif;
    letter-spacing: 3px;
  }

  html, body, #root{
    height: 100%;
    color: #FFF;
    background-color: #191a21;
  }

  a{
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin-left: 15rem;
`;
