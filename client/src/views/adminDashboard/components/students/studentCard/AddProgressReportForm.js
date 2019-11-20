import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function AddProgressReportForm() {

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
  )(AddProgressReportForm)
)
