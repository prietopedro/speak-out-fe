import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Dropdown from "react-dropdown";
import './addStudent.scss';
import { addNewStudent } from '../../../../actions/parentDashboardActions/parentDashboard/ParentDashboardActions';

function AddStudent(props) {
  const [student, setStudent] = useState({
    first_name: "",
    additional_names: "",
    cpr: "",
    email: "",
    birthdate: "",
    location_id: "",
    family_id: props.family_id
  });

  const locationArr = ["Select Location", "Bani Jamra", "Hamad Town"];
  const [location, setLocation] = useState(locationArr[0]);

  const [errorBorderFirstName, setErrorBorderFirstName] = useState('#595759'); //error #C73642
  const [errorBorderAdditionalNames, setErrorBorderAdditionalNames] = useState('#595759'); //error #C73642
  const [errorBorderCpr, setErrorBorderCpr] = useState('#595759'); //error #C73642
  const [errorBorderStudentEmail, setErrorBorderStudentEmail] = useState('#595759'); //error #C73642
  const [errorBorderBirthdate, setErrorBorderBirthdate] = useState('#595759'); //error #C73642
  const [errorLocation, setErrorLocation] = useState('#595759'); //error 

  useEffect(() => {
    console.log('ADD STUDENT: ', props)
  },[])

  function handleLocationDropdown(e) {
    let index;
    for (let i = 0; i < locationArr.length; i++) {
      if (locationArr[i] === e.value) {
        index = i;
      }
    }
    setStudent({ ...student, location_id: index });
    setLocation(locationArr[index]);
  }

  const handleStudentChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    //final fields check
    if (student.first_name === '' || student.additional_names === '' || student.cpr === '' || student.email === ''
        || student.birthdate === '' || student.location_id === '' || student.location_id === 0) {

      if (student.first_name === '') {
        setErrorBorderFirstName('#C73642');
      }
      if (student.additional_names === '') {
        setErrorBorderAdditionalNames('#C73642');
      }
      if (student.cpr === '') {
        setErrorBorderCpr('#C73642');
      }
      if (student.email === '') {
        setErrorBorderStudentEmail('#C73642');
      }
      if (student.birthdate === '') {
        setErrorBorderBirthdate('#C73642');
      }
      if (student.location_id === '' || student.location_id === 0) {
        setErrorLocation('#C73642');
      }
    } else {
      props.addNewStudent(student, props.setSuccess);

      //reset form fields
      setStudent({
        first_name: "",
        additional_names: "",
        cpr: "",
        email: "",
        birthdate: "",
        location_id: ""
      });
    }
  };

  return (
    <div className="add-student">
      <form>
        <fieldset>
          <input
            style={{borderBottom: `1px solid ${errorBorderFirstName}`}}
            type="text"
            name="first_name"
            placeholder="First Name"
            value={student.first_name}
            onChange={handleStudentChange}
          />
          <input
            style={{borderBottom: `1px solid ${errorBorderAdditionalNames}`}}
            type="text"
            name="additional_names"
            placeholder="Surname"
            value={student.additional_names}
            onChange={handleStudentChange}
          />
          <input
            style={{borderBottom: `1px solid ${errorBorderCpr}`}}
            type="text"
            name="cpr"
            placeholder="Student CPR ID"
            value={student.cpr}
            onChange={handleStudentChange}
          />
          <input
            style={{borderBottom: `1px solid ${errorBorderStudentEmail}`}}
            type="email"
            name="email"
            placeholder="Email"
            value={student.email}
            onChange={handleStudentChange}
          />
          <input
            style={{borderBottom: `1px solid ${errorBorderBirthdate}`}}
            type="date"
            name="birthdate"
            placeholder="Student Birthday"
            value={student.birthdate}
            onChange={handleStudentChange}
          />
          <div style={{borderBottom: `1px solid ${errorLocation}`}}>
            <Dropdown
              onChange={handleLocationDropdown}
              controlClassName="myControlClassName"
              className="dropdownRoot register"
              options={locationArr}
              value={location}
            />
          </div>
        </fieldset>
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state,
    family_id: state.parentDashboardReducer.family_id
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { addNewStudent }
  )(AddStudent)
)