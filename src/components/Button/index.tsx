import styled from "styled-components";

export default styled.button<{ blueBackground?: boolean }>`
  width: 108px;
  height: 32px;
  border-radius: 4px;
  color: #2196f3;
  background-color: white;
  border: 1px solid #2196f3;
  padding: 6px, 12px;

  ${({ blueBackground }) =>
    blueBackground && "color: white; background-color: #2196f3;"}
`;
