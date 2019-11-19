import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import { enrolledStudentsColumns } from '../../../../../data';

function EnrolledStudents(props) {

  useEffect(() => {
    console.log('ENROLLED:', props)
  }, [])

  if (props.isLoading) {
    return <Spin style={{marginTop: '20px'}}size="large" />
  } else {
      return (
        <Table
          className="rowHover"
          // dataSource={enrolledStudents} 
          columns={enrolledStudentsColumns} 
          pagination={{ pageSize: 15 }} 
          rowKey='id'
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                // setCourseId(record.id)
                // props.getCourseById(record.id)
              }
            };
          }}
        />
      )
  } 
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { }
  )(EnrolledStudents)
)