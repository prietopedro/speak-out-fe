import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudent } from '../actions';
import { Table, Divider, Pagination, Tag, Input, Button, Icon, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
//import { students } from '../dummyData.js';

import StudentCard from './StudentCard';


const StudentTable = props => {
    const [studentId, setStudentId] = React.useState(null);
    const [modalState, setModalState] = useState(false);

    const closeModal = () => {
      setModalState(false)
    }
    const openModal = (id) => {
      setStudentId(id)
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

    console.log('props.student', props.student)
    const data = props.student
    .sort((a, b) => { return b.student_id - a.student_id })
    .map(student => {
      // console.log('studentMap', student)
      // student.actions = (
      //   <a 
      //     data-student-id={student.student_id} 
      //     onClick={openModal}
      //   >
      //     View Record
      //   </a>
      // )
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
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    openModal(record.student_id)
                  }
                };
              }}
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
   
