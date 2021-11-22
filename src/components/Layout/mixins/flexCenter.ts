import { css } from "styled-components";

export default css<{ center?: boolean }>`
  ${({ center }) =>
    center && "display: flex; justify-content: center; align-items: center;"}
`;
