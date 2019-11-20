import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCoursesByStaff } from '../../../../../actions/adminDashboardActions/staff/staffActions';
import { Table, Spin } from 'antd';
import 'antd/dist/antd.css';


const StaffCourses = props => {
  const [search, setSearch] = useState('');
  const [form, setForm] = useState(false);


  useEffect(() => {
    props.getCoursesByStaff(props.id);
  }, [])

  const handleCancelButtonOnForm = () => {
    setForm(false);
  }

  const handleSearchInput = () => {

  }

  const handleAddButton = () => {
    setForm(!form);
  }

  const columns = [
    {
      title: 'Course ID',
      dataIndex: 'id',
      key: 1,
    },
    {
      title: 'Term',
      dataIndex: 'term',
      key: 2,
    },
    {
      title: 'Course Type',
      dataIndex: 'course_type',
      key: 4,
    },
    {
      title: 'Group Type',
      dataIndex: 'group_type',
      key: 5,
    },
    {
      title: 'School Grade',
      dataIndex: 'school_grade',
      key: 6,
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 7,
    },
    {
      title: 'Course Schedule',
      dataIndex: 'course_schedule',
      key: 8,
    },{
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 9,
    },
  ];

  if (props.isLoading) {
    return (
      <div style={{marginTop: '30px', width: '100%'}}>
        <Spin style={{marginTop: '20px'}}size="large" />
      </div>
    ) 
  } else {

  return (
    <div className="staff-courses" style={{marginTop: '30px', width: '100%'}}>
        <Table
          className="rowHover"
          dataSource={props.courseList}
          columns={columns}
          pagination={{ pageSize: 15 }}
          rowKey='id'
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                // props.setCourseView('courseCardView')
                // props.setCourseID(record.id)
              }
            };
          }}
        />
    </div>
  )
}
}

const mapStateToProps = state => {
  return {
    isLoading: state.staffReducer.courseListIsLoading,
    courseList: state.staffReducer.courseList,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCoursesByStaff }
  )(StaffCourses)
)

