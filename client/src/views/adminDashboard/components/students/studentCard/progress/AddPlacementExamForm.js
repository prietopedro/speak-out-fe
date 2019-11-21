import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function AddPlacementExamForm(props) {

  return (
    <div>Exam</div>
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
  )(AddPlacementExamForm)
)