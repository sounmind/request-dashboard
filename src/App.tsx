import React, { useState } from "react";
import styled from "styled-components";
import Description from "./components/Description";
import Filter from "./components/Filter";
import Header from "./components/Header";
import FlexRowBox from "./components/Layout/FlexRowBox";
import MultipleSelectCheckmarks from "./components/MultipleSelectCheckmarks";
import Request from "./components/Request";
import RequestList from "./components/RequestList";
import ControlledSwitch from "./components/Swtich";
import useMultiSelect from "./hooks/useMultiSelect";

import useRequests from "./hooks/useRequests";
import useWindowSize from "./hooks/useScreenWidth";

import { GiHamburgerMenu } from "react-icons/gi";
import MobileMenu from "./components/MobileMenu";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
`;

const FILTER = {
  MATERIAL: {
    name: "재료",
    options: ["알루미늄", "탄소강", "구리", "합금강", "강철"],
  },
  METHOD: {
    name: "가공방식",
    options: ["밀링", "선반"],
  },
};

function App() {
  const { requests } = useRequests();
  const { selected: selectedMethods, handleChange: handleChangeMethod } =
    useMultiSelect({ name: "가공방식" });
  const { selected: selectedMaterials, handleChange: handleChangeMaterial } =
    useMultiSelect({ name: "재료" });
  const [isConsultingChcked, setIsConsultingChcked] = useState(false);
  const windowSize = useWindowSize({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleToggleViewConsulting = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsConsultingChcked(event.target.checked);
  };

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
        <FlexRowBox style={{ gap: "8px" }}>
          <MultipleSelectCheckmarks
            name={FILTER.METHOD.name}
            selected={selectedMethods}
            options={FILTER.METHOD.options}
            handleChange={handleChangeMethod}
          />
          <MultipleSelectCheckmarks
            name={FILTER.MATERIAL.name}
            selected={selectedMaterials}
            options={FILTER.MATERIAL.options}
            handleChange={handleChangeMaterial}
          />
        </FlexRowBox>
        <ControlledSwitch
          description="상담 중인 요청만 보기"
          checked={isConsultingChcked}
          handleToggle={handleToggleViewConsulting}
        />
      </Filter>
      <RequestList>
        {requests?.map((request) => (
          <Request key={request.id} {...request} />
        ))}
      </RequestList>
    </Wrapper>
  );
}

export default App;
