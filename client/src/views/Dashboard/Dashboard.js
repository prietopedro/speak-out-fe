import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { tabs } from "../../data";
import SideBar from "./SideBar";
import Display from "./Display";
import NavBar from "../../components/header/NavBar";


const PanelWrap = styled.div`
  display: flex;
  padding: 0px 0 0 0;
`;

const TabsWrap = styled.div`
  width: 220px;
  height: 100vh;
  background: #269fb0;
`;
const DisplayWrap = styled.div`
  height: 100vh;
  width: 100%;
`;

function Dashboard() {
  const [navigation, setNavigation] = useState("main");
  const [tabColor, setTabColor] = useState("transparent");

  useEffect(() => {

  });

  return (
    <div>
      <NavBar />
      <PanelWrap>
        <TabsWrap>
          <SideBar
            tabs={tabs}
            navigation={navigation}
            setNavigation={setNavigation}
            tabColor={tabColor}
            setTabColor={setTabColor}
          />
        </TabsWrap>
        <DisplayWrap>
          <Display navigation={navigation} setNavigation={setNavigation} />
        </DisplayWrap>
      </PanelWrap>
    </div>
  );
}

export default Dashboard;
