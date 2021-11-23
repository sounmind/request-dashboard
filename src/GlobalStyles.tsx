import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  html {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    justify-content: center;
  }


  *, *:before, *:after {
    box-sizing: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    padding-top: 110px;
    padding-left: 25px;
    padding-right: 25px;
    max-width: 1440px;
    min-width: 360px;

    @media only screen and (max-width: 375px) {
      padding-left: 20px;
      padding-right: 20px;
      max-height: 812px;
      overflow-y: scroll;
    }
  }
`;
