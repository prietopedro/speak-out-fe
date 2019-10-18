import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudent } from '../actions';
import { Table, Divider, Pagination, Tag, Input, Button, Icon, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { students } from '../dummyData.js';

import StudentCard from './StudentCard';

const StudentTable = props => {

    const [studentId, setStudentId] = React.useState(null);
    const [modalState, setModalState] = useState(false);

    const closeModal = () => {
      setModalState(false)
    }
    const openModal = (event) => {
      event.preventDefault();
      setStudentId(event.target.dataset.studentId)
      console.log('event.target.dataset.studentId', event.target.dataset.studentId)
      setModalState(true)
    }

    useEffect(() => {
        props.getStudent();
    },[])

    const columns = [
        {
            title: 'Student_id',
            dataIndex: 'student_id',
            key: 1,
        },
        {
            title: 'CPR',
            dataIndex: 'cpr',
            key: 2,
        },
        {
            title: 'Registration_date',
            dataIndex: 'registration_date',
            key: 3,
        },
        {
            title: 'First_name',
            dataIndex: 'first_name',
            key: 4,
        },
        {
            title: 'Additional_names',
            dataIndex: 'additional_names',
            key: 5,
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 6,
        },
    ];

    console.log('props.student',props)
    const data = props.student.map(student => {
      student.student_id = (
        <a 
          data-student-id={student.student_id} 
          onClick={openModal}
        >
          {student.student_id}
        </a>
      )
      return student
    })
    return (
        <>
          <Modal          
            title="Title"
            visible={modalState}
            onOk={closeModal}
            onCancel={closeModal}
            width="80%"
          >
            <StudentCard student_id={studentId} />
          </Modal>
 
            <Table 
              dataSource={data} 
              columns={columns} 
              pagination={{ pageSize: 15 }} 
              rowKey='id' 
            />
            
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        student: state.studentReducer.student
    };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getStudent }
)(StudentTable)
)
   
