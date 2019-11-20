import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Progress } from 'antd';

{/* <Progress 
type="circle" 
percent={props.progressByStudentId.speaking_fluency * 10} 
width={80}
 /> */}

function PlacementExamView(props) {

  return (
    <div></div>
  )
}

const mapStateToProps = state => {
  return {
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      {}
  )(PlacementExamView)
)