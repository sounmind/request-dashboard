import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";

import Header from "./components/Header";
import Description from "./components/Description";
import Filter from "./components/Filter";
import MultipleSelectCheckmarks from "./components/MultipleSelectCheckmarks";
import ControlledSwitch from "./components/Swtich";
import MobileMenu from "./components/MobileMenu";
import RequestList from "./components/RequestList";
import Request from "./components/Request";
import FlexRowBox from "./components/Layout/FlexRowBox";

import useRequests from "./hooks/useRequests";
import useWindowSize from "./hooks/useScreenWidth";
import useRequestFilter from "./hooks/useRequestFilter";

import { MATERIALS, METHODS } from "./constants";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const FilterResetButton = styled(FlexRowBox.withComponent("button"))`
  gap: 10px;
  background-color: transparent;
  border: 0;
  min-width: 100px;

  :hover {
    border: 1px solid gray;
    border-radius: 5px;
  }

  :active {
    background-color: lightgray;
  }
`;

const EmptyResult = styled(FlexRowBox)`
  width: 100%;
  height: 200px;
  border: 1px solid lightgray;
`;

const App: React.FC = () => {
  const { requests } = useRequests();
  const {
    filteredRequests,

    selectedMaterials,
    selectedMethods,
    isConsultingChecked,

    handleChangeMethod,
    handleChangeMaterial,
    handleToggleViewConsulting,
    handleClickResetFilter,
  } = useRequestFilter(requests);

  const windowSize = useWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleClickMenu = () => {
    setIsMobileMenu((prev) => !prev);
  };

  const isMobileSize = windowSize.width <= 375;

  return (
    <Wrapper>
      {isMobileMenu && (
        <MobileMenu handleClose={() => setIsMobileMenu(false)} />
      )}
      <Header>
        {isMobileSize && (
          <GiHamburgerMenu onClick={handleClickMenu} size={20}>
            icon
          </GiHamburgerMenu>
        )}
        <FlexRowBox style={{ gap: "10px" }}>
          <img alt="logo" src="/images/logo.png" />
        </FlexRowBox>
        {!isMobileSize && (
          <FlexRowBox style={{ gap: "30px", alignItems: "center" }}>
            <FlexRowBox style={{ gap: "8px", alignItems: "center" }}>
              <img alt="icon-building" src="/images/icon-building.png" />
              <div>A ?????? ??????</div>
            </FlexRowBox>

            <div>|</div>
            <a href="/">????????????</a>
          </FlexRowBox>
        )}
      </Header>
      <Description>
        <h1 style={{ fontSize: "20px" }}>????????? ??????</h1>
        <p style={{ fontSize: "16px" }}>
          ?????????????????? ??? ?????? ???????????? ???????????????.
        </p>
      </Description>
      <Filter>
        <FlexRowBox style={{ gap: "8px", alignItems: "center" }}>
          <MultipleSelectCheckmarks
            name={"?????? ??????"}
            selected={selectedMethods}
            options={METHODS}
            handleChange={handleChangeMethod}
          />
          <MultipleSelectCheckmarks
            name={"??????"}
            selected={selectedMaterials}
            options={MATERIALS}
            handleChange={handleChangeMaterial}
          />
          {!isMobileSize && (
            <FilterResetButton onClick={handleClickResetFilter}>
              <GrPowerReset />
              ????????? ??????
            </FilterResetButton>
          )}
        </FlexRowBox>
        <ControlledSwitch
          description="?????? ?????? ????????? ??????"
          checked={isConsultingChecked}
          handleToggle={handleToggleViewConsulting}
        />
      </Filter>
      <RequestList>
        {filteredRequests?.map((request) => (
          <Request key={request.id} {...request} />
        ))}
      </RequestList>
      {filteredRequests.length === 0 && (
        <EmptyResult center>????????? ?????? ?????? ????????? ????????????.</EmptyResult>
      )}
    </Wrapper>
  );
};

export default App;
