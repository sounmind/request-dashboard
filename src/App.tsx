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

  :hover {
    border: 1px solid gray;
    border-radius: 5px;
  }

  :active {
    background-color: lightgray;
  }
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

  return (
    <Wrapper>
      {isMobileMenu && (
        <MobileMenu handleClose={() => setIsMobileMenu(false)} />
      )}
      <Header>
        {windowSize.width <= 375 && (
          <GiHamburgerMenu onClick={handleClickMenu} size={20}>
            icon
          </GiHamburgerMenu>
        )}
        <FlexRowBox style={{ gap: "10px" }}>
          <img alt="logo" src="/images/logo.png" />
        </FlexRowBox>
        {windowSize.width > 375 && (
          <FlexRowBox style={{ gap: "30px", alignItems: "center" }}>
            <FlexRowBox style={{ gap: "8px", alignItems: "center" }}>
              <img alt="icon-building" src="/images/icon-building.png" />
              <div>A 가공 업체</div>
            </FlexRowBox>

            <div>|</div>
            <a href="/">로그아웃</a>
          </FlexRowBox>
        )}
      </Header>
      <Description>
        <h1 style={{ fontSize: "20px" }}>들어온 요청</h1>
        <p style={{ fontSize: "16px" }}>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </p>
      </Description>
      <Filter>
        <FlexRowBox style={{ gap: "8px", alignItems: "center" }}>
          <MultipleSelectCheckmarks
            name={"가공 방식"}
            selected={selectedMethods}
            options={METHODS}
            handleChange={handleChangeMethod}
          />
          <MultipleSelectCheckmarks
            name={"재료"}
            selected={selectedMaterials}
            options={MATERIALS}
            handleChange={handleChangeMaterial}
          />
          <FilterResetButton onClick={handleClickResetFilter}>
            <GrPowerReset />
            필터링 리셋
          </FilterResetButton>
        </FlexRowBox>
        <ControlledSwitch
          description="상담 중인 요청만 보기"
          checked={isConsultingChecked}
          handleToggle={handleToggleViewConsulting}
        />
      </Filter>
      <RequestList>
        {filteredRequests?.map((request) => (
          <Request key={request.id} {...request} />
        ))}
      </RequestList>
    </Wrapper>
  );
};

export default App;
