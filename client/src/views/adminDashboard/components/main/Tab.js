import React from 'react';
import styled from 'styled-components';
import { resetForm } from '../../../../actions/adminDashboardActions/students/studentsActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const TabWrap = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  vertical-alignment: center; 
  // color: #269FB0;
  // color: #B4B1B5;
  color: #89878a;
  margin: 0 0 20px 0;
  font-size: 18px;
`

function Tab(props) {

  const handleClick = (tab) => {
    props.setSelected(tab.toLowerCase())
    props.setNavigation(tab.toLowerCase())
    props.resetForm();
  }
  return (
    <a style={{cursor: "pointer"}} onClick={() => handleClick(props.tab.key)}>
    <TabWrap style={{color: `${props.tab.key.toLowerCase() === props.selected ? "#269FB0" : "#89878a"}`}}>
      {props.tab.key}
    </TabWrap>
    </a>
  )
}


const mapStateToProps = state => {
  return {
      state: state
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { resetForm }
  )(Tab)
)