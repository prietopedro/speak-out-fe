// import React from 'react';
// import DashboardContainer from './DashboardContainer';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'


// import SideBar from './SideBar'
// library.add(faAngleLeft)

// function Dashboard() {
  
//   return (
//     <div className="App">
//       <NavBar />
//       <SideBar />
//       <DashboardContainer />
//     </div>
//   );
// }

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { tabs } from '../../data';
import TabList from './TabList';
import Display from './Display';
import NavBar from '../../components/header/NavBar';
// import StudentCard from '../students/studentCard/StudentCard';

const PanelWrap = styled.div`
  display: flex;
  padding: 0px 0 0 0;
`

const TabsWrap = styled.div`
  width: 220px;
  height: 100vh;
  background: #269FB0;
`
const DisplayWrap = styled.div`
  
  height: 100vh;
  width:100%;
  // height: 100px;
  // border: 1px solid black;
`

function Dashboard() {
const [navigation, setNavigation] = useState("main");
const [tabColor, setTabColor] = useState("transparent");

useEffect(() => {
  // console.log('PANEL props: ', props)
})

  return (
    <div>
    <NavBar />
    <PanelWrap>
      <TabsWrap>
        <TabList tabs={tabs} navigation={navigation} setNavigation={setNavigation} tabColor={tabColor} setTabColor={setTabColor} />
      </TabsWrap>

      <DisplayWrap>
        {/* <RowList table={table} students={students} courses={courses}/> */}
        {/* <Switch> */}
        {/* <Route exact path='/:navigation' render={props =>  */}
                    <div>
                        <Display  navigation={navigation}/>
                    </div>
                    {/* // }  */}
                    
        {/* // /> */}
        {/* <Route path='/:navigation/:id' render={props => 
                    <div>
                      <StudentCard />
                    </div>
                        } 
                    
        /> */}
        {/* </Switch> */}
      </DisplayWrap>

    </PanelWrap>
     </div>
  )
}


export default Dashboard;