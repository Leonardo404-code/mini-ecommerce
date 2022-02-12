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

:root{
  --lineColor: rgba(214, 218, 222, 20%);
  --textSecondary: #5c5e64;
  --background: #191a21
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
    color: #fff;
    background-color: var(--background);
  }

  a{
    text-decoration: none;
  }


.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 100ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;

export const Container = styled.div`
  margin-left: 15rem;

  @media screen and (max-width: 810px) {
    margin-left: 0;
  }
`;
