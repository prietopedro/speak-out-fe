import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createNewStudent } from '../../../../../actions/adminDashboardActions/students/studentsActions';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './StudentTable.css';
import moment from 'moment';
import { Spin } from 'antd';

const FormWrap = styled.form`
  // background: #EDEEEF;
  border: 0px transparant;
  border-radius: 3px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease;
`

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: 1px solid transparent;
  background: white;
  width: 100%;
  height: 26px;
`

const Button = styled.button`
  width: 120px;
  height: 25px;
  border-radius: 3px;
  margin: 10px 5px 10px 10px;
  background: #26ABBD;
  text-align: center;
  color: white;
`


function StudentRegistrationForm(props) {
  const [student, setStudent] = useState({cpr: '', registrationDate: '', firstName: '', additionalNames: '', 
                                          gender: '', birthdate: '', schoolGradeId: '', schoolName: '', 
                                          gradeUpdated: '', homeTelephone: '', mobileTelephone: '', 
                                          block: '', road: '', building: '', flat: '', email: '', 
                                          notes: '', contactTypeId: '', noCall: false, delinquent: false,
                                          expelled: false, locationId: ''});

 
  // set arrays of foreign key values to use in the dropdown (except 'gender' array it's not a foreign key)
  const genderArr = ['select', 'F', 'M'];
  const [gender, setGender] = useState(genderArr[0])
  const [location, setLocation] = useState(props.locationList[0]);
  const [contact, setContact] = useState(props.preferredContactMethodList[0]);
  const [schoolGrade, setSchoolGrade] = useState(props.schoolGradeList[0]);
  const [block, setBlock] = useState(props.blockList[0]);

  // handle required fields (make them all required for now)
  const [errorBorderCpr, setErrorBorderCpr] = useState('transparent'); //error #C73642
  const [errorBorderFirstName, setErrorBorderFirstName] = useState('transparent'); //error #C73642
  const [errorBorderAdditionalNames, setErrorBorderAdditionalNames] = useState('transparent'); //error #C73642
  const [errorBorderGender, setErrorBorderGender] = useState('transparent'); //error #C73642
  const [errorBorderBirthdate, setErrorBorderBirthdate] = useState('transparent'); //error #C73642
  const [errorBorderSchoolGrade, setErrorBorderSchoolGrade] = useState('transparent'); //error #C73642
  const [errorBorderSchoolName, setErrorBorderSchoolName] = useState('transparent'); //error #C73642
  const [errorBorderHomeTelephone, setErrorBorderHomeTelephone] = useState('transparent'); //error #C73642
  const [errorBorderMobileTelephone, setErrorBorderMobileTelephone] = useState('transparent'); //error #C73642
  const [errorBorderBlock, setErrorBorderBlock] = useState('transparent'); //error #C73642
  const [errorBorderRoad, setErrorBorderRoad] = useState('transparent'); //error #C73642
  const [errorBorderBuilding, setErrorBorderBuilding] = useState('transparent'); //error #C73642
  const [errorBorderFlat, setErrorBorderFlat] = useState('transparent'); //error #C73642
  const [errorBorderEmail, setErrorBorderEmail] = useState('transparent'); //error #C73642
  const [errorBorderNotes, setErrorBorderNotes] = useState('transparent'); //error #C73642
  const [errorBorderContactType, setErrorBorderContactType] = useState('transparent'); //error #C73642
  const [errorBorderLocation, setErrorBorderLocation] = useState('transparent'); //error #C73642

  // display a spinner on isLoading when posting a new record
  const [loading, setLoading] = useState(props.createNewStudentIsLoading);

  //error message visibility
  const [cprMessage, setCprMessage] = useState('#E0EBF0'); //or block
  const [cprOpacity, setCprOpacity] = useState('0');
  const [firstNameMessage, setFirstNameMessage] = useState('#E0EBF0'); //or block
  const [firstNameOpacity, setFirstNameopacity] = useState('0');
  const [additionalNamesMessage, setAdditionalNamesMessage] = useState('#E0EBF0'); //or block
  const [additionalNamesOpacity, setAdditionalNamesOpacity] = useState('0');
  const [homeTelephoneMessage, setHomeTelephoneMessage] = useState('#E0EBF0'); //or block
  const [homeTelephoneOpacity, setHomeTelephoneOpacity] = useState('0');
  const [mobileTelephoneMessage, setMobileTelephoneMessage] = useState('#E0EBF0'); //or block
  const [mobileTelephoneOpacity, setMobileTelephoneOpacity] = useState('0');


  useEffect(() => {

  }, [loading])


  function handleChange(event) {
    if (event.target.name === 'cpr' && errorBorderCpr === '#ef6570') {
      setErrorBorderCpr('transparent');
    } 
    if (event.target.name === 'cpr' && cprMessage === '#ef6570') {
      setCprMessage('#E0EBF0');
      setCprOpacity('0');
    }
    if (event.target.name === 'firstName' && errorBorderFirstName === '#ef6570') {
      setErrorBorderFirstName('transparent');
    }
    if (event.target.name === 'firstName' && firstNameMessage === '#ef6570') {
      setFirstNameMessage('#E0EBF0');
      setFirstNameopacity('0');
    }
    if (event.target.name === 'additionalNames' && errorBorderAdditionalNames === '#ef6570') {
      setErrorBorderAdditionalNames('transparent');
    } 
    if (event.target.name === 'additionalNames' && additionalNamesMessage === '#ef6570') {
      setAdditionalNamesMessage('#E0EBF0');
      setAdditionalNamesOpacity('0');
    }
    if (event.target.name === 'schoolName' && errorBorderSchoolName === '#ef6570') {
      setErrorBorderSchoolName('transparent');
    }
    if (event.target.name === 'homeTelephone' && errorBorderHomeTelephone === '#ef6570') {
      setErrorBorderHomeTelephone('transparent');
    }
    if (event.target.name === 'homeTelephone' && homeTelephoneMessage === '#ef6570') {
      setHomeTelephoneMessage('#E0EBF0');
      setHomeTelephoneOpacity('0');
    }
    if (event.target.name === 'mobileTelephone' && errorBorderMobileTelephone === '#ef6570') {
      setErrorBorderMobileTelephone('transparent');
    }
    if (event.target.name === 'mobileTelephone' && mobileTelephoneMessage === '#ef6570') {
      setMobileTelephoneMessage('#E0EBF0');
      setMobileTelephoneOpacity('0');
    }
    if (event.target.name === 'road' && errorBorderRoad === '#ef6570') {
      setErrorBorderRoad('transparent');
    }
    if (event.target.name === 'building' && errorBorderBuilding === '#ef6570') {
      setErrorBorderBuilding('transparent');
    }
    if (event.target.name === 'flat' && errorBorderFlat === '#ef6570') {
      setErrorBorderFlat('transparent');
    }
    if (event.target.name === 'email' && errorBorderEmail === '#ef6570') {
      setErrorBorderEmail('transparent');
    }
    if (event.target.name === 'notes' && errorBorderNotes === '#ef6570') {
      setErrorBorderNotes('transparent');
    }
    setStudent({ ...student, [event.target.name]: event.target.value })
  }                                        

  function handleSubmit(event) {
    event.preventDefault();
    console.log('STUDENT:', student)

    var regexStr=/^[a-zA-Z]+$/;
    var regexNum=/^[0-9]+$/;
    var regexMultipleWords=/^[a-zA-Z ]+$/;


    // check for required fields
    if (student.cpr.split(" ").join("") === '' || student.firstName.split(" ").join("") === '' || 
        student.additionalNames.split(" ").join("") === '' || student.gender === '' || student.gender === undefined ||
        student.birthdate === '' || student.schoolGradeId === '' || student.schoolGradeId === undefined ||
        student.schoolName.split(" ").join("") === '' || student.homeTelephone.split(" ").join("") === '' ||
        student.mobileTelephone.split(" ").join("") === '' || student.block === '' || 
        student.road.split(" ").join("") === '' || student.building.split(" ").join("") === '' ||
        student.flat.split(" ").join("") === '' || student.email.split(" ").join("") === '' || 
        student.notes.split(" ").join("") === '' || student.contactTypeId === '' || student.contactTypeId === undefined ||
        student.locationId === '' || student.locationId === undefined)  
      { 
        // highlight all that were missed
        if (student.cpr.split(" ").join("") === '') {
          setErrorBorderCpr('#ef6570');
        } 
        if (student.firstName.split(" ").join("") === '') {
          setErrorBorderFirstName('#ef6570');
        } 
        if (student.additionalNames.split(" ").join("") === '') {
          setErrorBorderAdditionalNames('#ef6570');
        }
        if (student.gender === '' || student.gender === undefined) {
          setErrorBorderGender('#ef6570');
        }
        if (student.birthdate === '') {
          setErrorBorderBirthdate('#ef6570');
        }
        if (student.schoolGradeId === '' || student.schoolGradeId === undefined) {
          setErrorBorderSchoolGrade('#ef6570');
        }
        if (student.schoolName.split(" ").join("") === '') {
          setErrorBorderSchoolName('#ef6570');
        }
        if (student.homeTelephone.split(" ").join("") === '') {
          setErrorBorderHomeTelephone('#ef6570');
        }
        if (student.mobileTelephone.split(" ").join("") === '') {
          setErrorBorderMobileTelephone('#ef6570');
        }
        if (student.block === '' || student.block === undefined) {
          setErrorBorderBlock('#ef6570');
        }
        if (student.road.split(" ").join("") === '') {
          setErrorBorderRoad('#ef6570');
        }
        if (student.building.split(" ").join("") === '') {
          setErrorBorderBuilding('#ef6570');
        }
        if (student.flat.split(" ").join("") === '') {
          setErrorBorderFlat('#ef6570');
        }
        if (student.email.split(" ").join("") === '') {
          setErrorBorderEmail('#ef6570');
        }
        if (student.notes.split(" ").join("") === '') {
          setErrorBorderNotes('#ef6570');
        }
        if (student.contactTypeId === '' || student.contactTypeId === undefined) {
          setErrorBorderContactType('#ef6570');
        }
        if (student.locationId === '' || student.locationId === undefined) {
          setErrorBorderLocation('#ef6570');
        }
    
    } 
      else if (!student.cpr.match(regexNum)) {
        setCprMessage('#ef6570');
        setCprOpacity('1');
      } else if (!student.firstName.match(regexStr)) {
        setFirstNameMessage('#ef6570');
        setFirstNameopacity('1');
      } else if (!student.additionalNames.match(regexMultipleWords)) {
        setAdditionalNamesMessage('#ef6570');
        setAdditionalNamesOpacity('1');
      } else if (!student.homeTelephone.match(regexNum)) {
        setHomeTelephoneMessage('#ef6570');
        setHomeTelephoneOpacity('1');
      } else if (!student.mobileTelephone.match(regexNum)) {
        setMobileTelephoneMessage('#ef6570');
        setMobileTelephoneOpacity('1');
      } 
    
      else {

          const newDate = moment();
          const newDateISOFormat = newDate.toISOString();
          const birthdateDate = moment(student.birthdate).toDate();
          const birthdateISO = birthdateDate.toISOString()

          const newStudent = {
            "cpr": student.cpr.toString(),
            "registration_date": newDateISOFormat,
            "first_name": student.firstName,
            "additional_names": student.additionalNames,
            "gender": student.gender,
            "birthdate": birthdateISO,
            "school_grade_id": student.schoolGradeId,
            "school_name": student.schoolName,
            "home_telephone": student.homeTelephone.toString(),
            "mobile_telephone": student.mobileTelephone.toString(),
            "block_code": parseInt(student.block),
            "road": student.road.toString(),
            "building": student.building.toString(),
            "flat": student.flat.toString(),
            "email": student.email,
            "notes": student.notes,
            "preferred_contact_type_id": student.contactTypeId,
            "no_call": false,
            "delinquent": false,
            "expelled": false,
            "location_id": student.locationId,
          }

          props.createNewStudent(newStudent, props.setNewRecord, props.newRecord, 
                                props.displaySuccessMessageTimeout, props.setSavePrevState);

          // reset form fields
          setStudent({cpr: '', registrationDate: '', firstName: '', additionalNames: '', 
                      gender: '', birthdate: '', schoolGradeId: '', schoolName: '', 
                      gradeUpdated: '', homeTelephone: '', mobileTelephone: '', 
                      block: '', road: '', building: '', flat: '', email: '', 
                      notes: '', contactTypeId: '', noCall: false, delinquent: false,
                      expelled: false, locationId: ''
                    });

          // hide the form by reusing the cancel button method
          props.handleCancelButtonOnForm();
      }
  }

  function handleCancel(event) {
    event.preventDefault();
    props.handleCancelButtonOnForm();
  }

  function handleGenderDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < genderArr.length; i++) {
      if (genderArr[i] === e.value) {
        index = i;
      }
    }
    setStudent({...student, gender: e.value});
    setGender(genderArr[index]); 
  }
  
  function handleLocationDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.locationList.length; i++) {
      if (props.locationList[i] === e.value) {
        index = i;
      }
    }
    setStudent({...student, locationId: props.locationIdLookup[e.value]});
    setLocation(props.locationList[index]);
    console.log('LOCATION DROPDOWN: ', props.locationIdLookup[e.value], props.locationIdLookup)
  }

  function handleContactMethodDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.preferredContactMethodList.length; i++) {
      if (props.preferredContactMethodList[i] === e.value) {
        index = i;
      }
    }
    setStudent({...student, contactTypeId: props.preferredContactMethodIdLookup[e.value]});
    setContact(props.preferredContactMethodList[index]);
  }

  function handleSchoolGradeDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.schoolGradeList.length; i++) {
      if (props.schoolGradeList[i] === e.value) {
        index = i;
      }
    }
    setStudent({...student, schoolGradeId: props.schoolGradeIdLookup[e.value]});
    setSchoolGrade(props.schoolGradeList[index]);
  }

  function handleBlockDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.blockList.length; i++) {
      if (props.blockList[i] === e.value) {
        index = i;
      }
    }
    setStudent({...student, block: props.blockIdLookup[e.value]});
    setBlock(props.blockList[index]);
  }

  {if (props.createNewStudentIsLoading) {
    return <Spin style={{marginTop: '90px'}}size="large" />
  } else {
      return (
        <FormWrap onSubmit={handleSubmit} style={{margin: '30px 10px 20px 10px'}}>
          <fieldset style={{border: '1px solid transparent', margin: '10px 5px 0px 5px',  background: '#E0EBF0'}}>
            <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                         gridGap: '10px', margin: '10px'}}>
              <div >
                <label>CPR</label>
                <div style={{border: `1px solid ${errorBorderCpr}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="cpr"
                    value={student.cpr}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: cprMessage, opacity: cprOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>First Name</label>
                <div style={{border: `1px solid ${errorBorderFirstName}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: firstNameMessage, opacity: firstNameOpacity, marginLeft: '2px'}}>Must input strings</div>
              </div>
              <div style={{gridColumn: 'span 2'}}>
                <label>Additional names</label>
                <div style={{border: `1px solid ${errorBorderAdditionalNames}`, borderRadius: '3px'}}>
                  <Input 
                    style={{width: '100%'}}
                    type="text"
                    name="additionalNames"
                    value={student.additionalNames}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: additionalNamesMessage, opacity: additionalNamesOpacity, marginLeft: '2px'}}>Must input strings</div>
              </div>
              <div>
                <label>Gender</label>
                <div style={{border: `1px solid ${errorBorderGender}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleGenderDropdown} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={genderArr}   
                    value={gender} />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div style={{border: `1px solid ${errorBorderEmail}`, borderRadius: '3px'}}>
                  <Input
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>School Name</label>
                <div style={{border: `1px solid ${errorBorderSchoolName}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="schoolName"
                    value={student.schoolName}
                    onChange={handleChange} />
                </div>
              </div>
              <div >
                <label>Birth date</label>
                <div style={{border: `1px solid ${errorBorderBirthdate}`, borderRadius: '3px'}}>
                  <Input
                    type="date"
                    name="birthdate"
                    value={student.birthdate}
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>Location</label>
                <div style={{border: `1px solid ${errorBorderLocation}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleLocationDropdown} 
                    value={location} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={props.locationList} />
                </div>
              </div>
              <div>
                <label>Home Telephone</label>
                <div style={{border: `1px solid ${errorBorderHomeTelephone}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="homeTelephone"
                    value={student.homeTelephone}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: homeTelephoneMessage, opacity: homeTelephoneOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Mobile Telephone</label>
                <div style={{border: `1px solid ${errorBorderMobileTelephone}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="mobileTelephone"
                    value={student.mobileTelephone}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: mobileTelephoneMessage, opacity: mobileTelephoneOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Preferred contact method</label>
                <div style={{border: `1px solid ${errorBorderContactType}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleContactMethodDropdown} 
                    value={contact} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={props.preferredContactMethodList} />
                </div>
              </div>
              <div>
                <label>Block</label>
                <div style={{border: `1px solid ${errorBorderBlock}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleBlockDropdown} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={props.blockList}   
                    value={block} />
                </div>
              </div>
              <div>
                <label>Road</label>
                <div style={{border: `1px solid ${errorBorderRoad}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="road"
                    value={student.road}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Building</label>
                <div style={{border: `1px solid ${errorBorderBuilding}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="building"
                    value={student.building}
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>Flat</label>
                <div style={{border: `1px solid ${errorBorderFlat}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="flat"
                    value={student.flat}
                    onChange={handleChange} />
                </div>
              </div>
              <div>
                <label>School grade</label>
                <div style={{border: `1px solid ${errorBorderSchoolGrade}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleSchoolGradeDropdown} 
                    value={schoolGrade} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={props.schoolGradeList} />
                </div>
              </div>
              <div style={{gridColumn: 'span 4'}}>
                <label>Notes</label>
                <div style={{border: `1px solid ${errorBorderNotes}`, borderRadius: '3px'}}>
                  <textarea 
                    style={{width: '100%', height: '80px', outline: 'none', 
                            border: '1px solid transparent', borderRadius: '3px'}}
                    type="text"
                    name="notes"
                    value={student.notes}
                    onChange={handleChange} />
                </div>
              </div>
            </div>
          </fieldset>
          <div style={{alignSelf: 'flex-end'}}>
            <Button onClick={handleCancel} style={{background: '#C73642', width: '80px'}}>
              Cancel
            </Button>
            <Button type="submit">
              Add student
            </Button>
          </div>
        </FormWrap>
      )

    }
  }
}

const mapStateToProps = state => {
  return {
    locationList: state.studentsReducer.locationList,
    locationIdLookup: state.studentsReducer.locationIdLookup,
    preferredContactMethodList: state.studentsReducer.preferredContactMethodList,
    preferredContactMethodIdLookup: state.studentsReducer.preferredContactMethodIdLookup,
    schoolGradeList: state.studentsReducer.schoolGradeList,
    schoolGradeIdLookup: state.studentsReducer.schoolGradeIdLookup,
    blockList: state.studentsReducer.blockList,
    blockIdLookup: state.studentsReducer.blockIdLookup,
    createNewStudentIsLoading: state.studentsReducer.createNewStudentIsLoading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createNewStudent }
)(StudentRegistrationForm)
);