import styled from "styled-components";
import Switch from "@mui/material/Switch";

import FlexRowBox from "../Layout/FlexRowBox";

const Wrapper = styled(FlexRowBox)`
  justify-content: center;
  align-items: center;
  min-width: 220px;
`;

interface ControlledSwitchProp {
  description: string;
  handleToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const ControlledSwitch: React.FC<ControlledSwitchProp> = ({
  description,
  checked,
  handleToggle,
}) => {
  return (
    <Wrapper>
      <Switch
        checked={checked}
        onChange={handleToggle}
        inputProps={{ "aria-label": "controlled" }}
      />
      <div>{description}</div>
    </Wrapper>
  );
};

export default ControlledSwitch;
