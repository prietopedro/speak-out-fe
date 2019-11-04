import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tab from './Tab';
import { Link } from 'react-router-dom';

const TabsWrap = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  font-size: 18px;
  text-align: center;
  position: sticky;
`

function SideBar({tabs, navigation, setNavigation, tabColor, setTabColor}) {
  const [selected, setSelected] = useState(navigation);
  useEffect(() => {

  }, [selected])

  return (
      <TabsWrap>
        {tabs.map((tab, index) => {
          return <div style={{textDecoration: 'none', color: 'black'}} ><Tab tab={tab}  selected={selected} setSelected={setSelected} tabColor={tabColor} navigation={navigation} setTabColor={setTabColor} setNavigation={setNavigation} /></div>
        })}
      </TabsWrap>
  )
}


export default SideBar;