import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudent } from '../actions';
import { Table, Divider, Pagination, Tag, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import 'antd/dist/antd.css';
import { students } from '../dummyData.js';

import StudentCard from './StudentCard';

const StudentTable = props => {
    useEffect(() => {
        props.getStudent();
    },[])

    const [searchCPR, setSearchCPR] = useState({
        searchText: ''
    })
   
    const getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                const searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => handleSearch(selectedKeys, confirm)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            //.toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        // onFilterDropdownVisibleChange: visible => {
        //   if (visible) {
        //     setTimeout(() => searchInput.select());
        //   }
        // },
        // render: text => (
        //     <Highlighter
        //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        //       searchWords={[searchCPR.searchText]}
        //       autoEscape
        //       textToHighlight={text.toString()}
        //     />
        //   ),
        });
      
        const handleSearch = (selectedKeys, confirm) => {
          confirm();
          console.log('selectedKeys', selectedKeys[0])
          setSearchCPR({ searchText: selectedKeys[0] });
        };
      
        const handleReset = clearFilters => {
          clearFilters();
          setSearchCPR({ searchText: '' });
        };
   


    const columns = [
        {
            title: 'Student_id',
            dataIndex: 'student_id',
            key: '1',
        },
        {
            title: 'CPR',
            dataIndex: 'cpr',
            key: 'cpr',
            ...getColumnSearchProps('cpr')
        },
        {
            title: 'Registration_date',
            dataIndex: 'registration_date',
            key: '3',
        },
        {
            title: 'First_name',
            dataIndex: 'first_name',
            key: '4',
        },
        {
            title: 'Additional_names',
            dataIndex: 'additional_names',
            key: '5',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: '6',
        },
        {
            title: 'Birthdate',
            dataIndex: 'birthdate',
            key: '7',
        },
        {
            title: 'School_grade',
            dataIndex: 'school_grade',
            key: '8',
        },
        {
            title: 'School_name',
            dataIndex: 'school_name',
            key: '9',
        },
    ];

    console.log('props.student',props)
    return (
        <>
            <Table dataSource={props.student} columns={columns} pagination={{ pageSize: 15 }}/>
            <Link to='/studentcard'>Edit</Link>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        student: state.studentReducer.student
    };
};

export default 
    connect(
        mapStateToProps,
        { getStudent }
    )(StudentTable)
