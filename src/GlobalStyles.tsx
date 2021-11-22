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
    padding: 110px 155px;
    max-width: 1440px;
  }
`;
