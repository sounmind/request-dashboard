import styled from "styled-components";
import flexCenter from "./mixins/flexCenter";

export default styled.div<{ center?: boolean }>`
  display: flex;
  flex-direction: column;

  ${flexCenter}
`;
