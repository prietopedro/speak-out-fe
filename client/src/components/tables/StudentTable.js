import React, {useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudentTable } from '../../actions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';
import './StudentTable.css';


const StudentTable = props => {
    
    useEffect(() => {
        props.getStudentTable();
    }, [])

    const columns = [
        {
              title: 'Student ID',
              dataIndex: 'id',
              key: 1,
          },
          {
              title: 'CPR',
              dataIndex: 'cpr',
              key: 2,
          },
          {
              title: 'First Name',
              dataIndex: 'first_name',
              key: 4,
          },
          {
              title: 'Additional Name',
              dataIndex: 'additional_names',
              key: 5,
          },
          {
              title: 'Gender',
              dataIndex: 'gender',
              key: 6,
          },
          {
            title: 'Phone Number',
            dataIndex: 'mobile_telephone',
            key: 7,
        },
      ];
      
    const studentData = props.studentList.sort((a,b) => { 
        return b.id - a.id }
    )

    return (
        <div>
            <Link to='/'>Home</Link>
            <h1>Student Table</h1>
            
            {props.isLoading ? (
              <Spin size="large" />
            ) : (
            <Table
              className="rowHover"
              dataSource={studentData} 
              columns={columns} 
              pagination={{ pageSize: 15 }} 
              rowKey='id'
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    props.history.push(`/students/${record.id}`);
                  }
                };
              }}
            />
            )}
            
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
      isLoading: state.studentTableReducer.isLoading,
      studentList: state.studentTableReducer.studentList,
      error: state.studentTableReducer.error,
    };
  };
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getStudentTable }
  )(StudentTable)
  )