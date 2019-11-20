import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { createNewStaff } from '../../../../../actions/adminDashboardActions/staff/staffActions';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './StaffTable.css';
import moment from 'moment';
import { Spin } from 'antd';

const FormWrap = styled.form`
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
  outline: none;
  cursor: pointer;
`


function StaffRegistrationForm(props) {
  const [staff, setStaff] = useState({
                                        cpr: '', 
                                        name: '', 
                                        short_name: '', 
                                        gender: '', 
                                        birthdate: '',    
                                        mobile_number: '',  
                                        email: '', 
                                        admin: '',  
                                        teaching_rate: '',
                                        active: '',
                                        accent: ''
                                      });

 
  // set arrays of foreign key values to use in the dropdown (except 'gender' array it's not a foreign key)
  const genderArr = ['F', 'M'];
  const [gender, setGender] = useState('');
  const accentArr = ['North American', 'British', 'Irish', 'Australian', 'Scottish', 'South African',
                     'French/Brit', 'Local', 'Other'];
  const [accent, setAccent] = useState('');
  const adminStatus = ['true', 'false'];
  const [admin, setAdmin] = useState('');
  const activeStatus = ['true', 'false'];
  const [active, setActive] = useState('');

  // handle required fields (make them all required for now)
  const [errorBorderCpr, setErrorBorderCpr] = useState('transparent'); //error '#ef6570'
  const [errorBorderName, setErrorBorderName] = useState('transparent'); //error '#ef6570'
  const [errorBorderShortName, setErrorBorderShortName] = useState('transparent'); //error '#ef6570'
  const [errorBorderGender, setErrorBorderGender] = useState('transparent'); //error '#ef6570'
  const [errorBorderEmail, setErrorBorderEmail] = useState('transparent'); //error '#ef6570'
  const [errorBorderBirthdate, setErrorBorderBirthdate] = useState('transparent'); //error '#ef6570'
  const [errorBorderAdmin, setErrorBorderAdmin] = useState('transparent'); //error '#ef6570'
  const [errorBorderTeachingRate, setErrorBorderTeachingRate] = useState('transparent'); //error '#ef6570'
  const [errorBorderActive, setErrorBorderActive] = useState('transparent'); //error '#ef6570'
  const [errorBorderMobileTelephone, setErrorBorderMobileTelephone] = useState('transparent'); //error '#ef6570'
  const [errorBorderAccent, setErrorBorderAccent] = useState('transparent'); //error '#ef6570'


  //error message visibility
  const [cprMessage, setCprMessage] = useState('#E0EBF0'); 
  const [cprOpacity, setCprOpacity] = useState('0');
  const [nameMessage, setNameMessage] = useState('#E0EBF0'); 
  const [nameOpacity, setNameOpacity] = useState('0');
  const [shortNameMessage, setShortNameMessage] = useState('#E0EBF0'); 
  const [shortNameOpacity, setShortNameOpacity] = useState('0');
  const [teachingRateMessage, setTeachingRateMessage] = useState('#E0EBF0'); 
  const [teachingRateOpacity, setTeachingRateOpacity] = useState('0');
  const [mobileMessage, setMobileMessage] = useState('#E0EBF0'); 
  const [mobileOpacity, setMobileOpacity] = useState('0');

  // display a spinner on isLoading when posting a new record
  const [loading, setLoading] = useState(props.createNewStaffIsLoading);


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
    if (event.target.name === 'name' && errorBorderName === '#ef6570') {
      setErrorBorderName('transparent');
    }
    if (event.target.name === 'name' && nameMessage === '#ef6570') {
      setNameMessage('#E0EBF0');
      setNameOpacity('0');
    }
    if (event.target.name === 'short_name' && errorBorderShortName === '#ef6570') {
      setErrorBorderShortName('transparent');
    }
    if (event.target.name === 'short_name' && shortNameMessage === '#ef6570') {
      setShortNameMessage('#E0EBF0');
      setShortNameOpacity('0');
    }
    if (event.target.name === 'email' && errorBorderEmail === '#ef6570') {
      setErrorBorderEmail('transparent');
    }
    if (event.target.name === 'birthdate' && errorBorderBirthdate === '#ef6570') {
      setErrorBorderBirthdate('transparent');
    }
    if (event.target.name === 'teaching_rate' && errorBorderTeachingRate === '#ef6570') {
      setErrorBorderTeachingRate('transparent');
    }
    if (event.target.name === 'teaching_rate' && teachingRateMessage === '#ef6570') {
      setTeachingRateMessage('#E0EBF0');
      setTeachingRateOpacity('0');
    }
    if (event.target.name === 'mobile_number' && errorBorderMobileTelephone === '#ef6570') {
      setErrorBorderMobileTelephone('transparent');
    }
    if (event.target.name === 'mobile_number' && mobileMessage === '#ef6570') {
      setMobileMessage('#E0EBF0');
      setMobileOpacity('0');
    }
    setStaff({ ...staff, [event.target.name]: event.target.value })
  }                                        

  function handleSubmit(event) {
    event.preventDefault();

    var regexStr=/^[a-zA-Z]+$/;
    var regexNum=/^[0-9]+$/;
    var regexMultipleWords=/^[a-zA-Z ]+$/;

    // check for required fields
    if (staff.cpr.split(" ").join("") === '' || staff.name.split(" ").join("") === '' || 
        staff.short_name.split(" ").join("") === '' || staff.gender === '' ||
        staff.birthdate === '' || staff.mobile_number.split(" ").join("") === '' || 
        staff.email.split(" ").join("") === '' || staff.notes === '' ||
        staff.admin === '' || staff.teaching_rate.split(" ").join("") === '' || 
        staff.active === '' || staff.accent === '') 
      { 
        // highlight all that were missed
        if (staff.cpr.split(" ").join("") === '') {
          setErrorBorderCpr('#ef6570');
        } 
        if (staff.name.split(" ").join("") === '') {
          setErrorBorderName('#ef6570');
        } 
        if (staff.short_name.split(" ").join("") === '') {
          setErrorBorderShortName('#ef6570');
        }
        if (staff.gender === '') {
          setErrorBorderGender('#ef6570');
        }
        if (staff.birthdate === '') {
          setErrorBorderBirthdate('#ef6570');
        }
        if (staff.mobile_number.split(" ").join("") === '') {
          setErrorBorderMobileTelephone('#ef6570');
        }
        if (staff.email.split(" ").join("") === '') {
          setErrorBorderEmail('#ef6570');
        }
        if (staff.admin === '') {
          setErrorBorderAdmin('#ef6570');
        }
        if (staff.teaching_rate.split(" ").join("") === '') {
          setErrorBorderTeachingRate('#ef6570');
        }
        if (staff.active === '') {
          setErrorBorderActive('#ef6570');
        }
        if (staff.accent === '') {
          setErrorBorderAccent('#ef6570');
        }
    } else if (!staff.cpr.match(regexNum)) {
        setCprMessage('#ef6570');
        setCprOpacity('1');
    } else if (!staff.name.match(regexMultipleWords)) {
        setNameMessage('#ef6570');
        setNameOpacity('1');
    } else if (!staff.short_name.match(regexMultipleWords)) {
        setShortNameMessage('#ef6570');
        setShortNameOpacity('1');
    } else if (!staff.mobile_number.match(regexNum)) {
        setMobileMessage('#ef6570');
        setMobileOpacity('1');
    } else if (!staff.teaching_rate.match(regexNum)) {
      setTeachingRateMessage('#ef6570');
      setTeachingRateOpacity('1');
    }
    
    else {

        const birthdateDate = moment(staff.birthdate).toDate();
        const birthdateISO = birthdateDate.toISOString();

        const newStaff = {
          "cpr": staff.cpr.toString(),
          "name": staff.name,
          "short_name": staff.short_name,
          "gender": staff.gender,
          "birthdate": birthdateISO,
          "mobile_number": staff.mobile_number.toString(),
          "email": staff.email,
          "admin": staff.admin,
          "teaching_rate": staff.teaching_rate.toString(),
          "active": staff.active,
          "accent": staff.accent
        }

        props.createNewStaff(newStaff, props.setNewRecord, props.newRecord, 
                              props.displaySuccessMessageTimeout, props.setSavePrevState);

        // reset form fields
        setStaff({
                  cpr: '', 
                  name: '', 
                  short_name: '', 
                  gender: '', 
                  birthdate: '',    
                  mobile_number: '',  
                  email: '', 
                  admin: '',  
                  teaching_rate: '',
                  active: '',
                  accent: ''
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
    if (errorBorderGender === '#ef6570') {
      setErrorBorderGender('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < genderArr.length; i++) {
      if (genderArr[i] === e.value) {
        index = i;
      }
    }
    setStaff({...staff, gender: e.value});
    setGender(genderArr[index]); 
  }

  function handleAccentDropdown(e) {
    if (errorBorderAccent === '#ef6570') {
      setErrorBorderAccent('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < accentArr.length; i++) {
      if (accentArr[i] === e.value) {
        index = i;
      }
    }
    setStaff({...staff, accent: e.value});
    setAccent(accentArr[index]); 
  }

  function handleAdminDropdown(e) {
    if (errorBorderAdmin === '#ef6570') {
      setErrorBorderAdmin('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < adminStatus.length; i++) {
      if (adminStatus[i] === e.value) {
        index = i;
      }
    }
    setStaff({...staff, admin: e.value === 'true' ? true : false});
    setAdmin(adminStatus[index]);
  }

  function handleActiveDropdown(e) {
    if (errorBorderActive === '#ef6570') {
      setErrorBorderActive('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < activeStatus.length; i++) {
      if (activeStatus[i] === e.value) {
        index = i;
      }
    }
    setStaff({...staff, active: e.value === 'true' ? true : false});
    setActive(activeStatus[index]);
  }


  {if (props.createNewStaffIsLoading) {
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
                  value={staff.cpr}
                  onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: cprMessage, opacity: cprOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Name</label>
                <div style={{border: `1px solid ${errorBorderName}`, borderRadius: '3px'}}>
                <Input 
                  type="text"
                  name="name"
                  value={staff.name}
                  onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: nameMessage, opacity: nameOpacity, marginLeft: '2px'}}>Must input strings</div>
              </div>
              <div style={{gridColumn: 'span 2'}}>
                <label>Short Name</label>
                <div style={{border: `1px solid ${errorBorderShortName}`, borderRadius: '3px'}}>
                <Input 
                  type="text"
                  name="short_name"
                  value={staff.shortName}
                  onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: shortNameMessage, opacity: shortNameOpacity, marginLeft: '2px'}}>Must input strings</div>
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
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Email</label>
                <div style={{border: `1px solid ${errorBorderEmail}`, borderRadius: '3px'}}>
                  <Input
                    type="email"
                    name="email"
                    value={staff.email}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Admin</label>
                <div style={{border: `1px solid ${errorBorderAdmin}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleAdminDropdown} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={adminStatus}   
                    value={admin} />
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div >
                <label>Birth date</label>
                <div style={{border: `1px solid ${errorBorderBirthdate}`, borderRadius: '3px'}}>
                  <Input
                    type="date"
                    name="birthdate"
                    value={staff.birthdate}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Teaching Rate</label>
                <div style={{border: `1px solid ${errorBorderTeachingRate}`, borderRadius: '3px'}}>
                <Input 
                  type="text"
                  name="teaching_rate"
                  value={staff.teaching_rate}
                  onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: teachingRateMessage, opacity: teachingRateOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Active</label>
                <div style={{border: `1px solid ${errorBorderActive}`, borderRadius: '3px'}}>
                  <Dropdown 
                    onChange={handleActiveDropdown} 
                    controlClassName='myControlClassName' 
                    className='dropdownRoot' 
                    options={activeStatus}   
                    value={active} />
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Mobile Telephone</label>
                <div style={{border: `1px solid ${errorBorderMobileTelephone}`, borderRadius: '3px'}}>
                  <Input
                    type="text"
                    name="mobile_number"
                    value={staff.mobileTelephone}
                    onChange={handleChange} />
                </div>
                <div style={{fontSize: '8px', color: mobileMessage, opacity: mobileOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Accent</label>
                <div style={{border: `1px solid ${errorBorderAccent}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleAccentDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={accentArr}   
                    value={accent}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
            </div>
          </fieldset>
          <div style={{alignSelf: 'flex-end'}}>
            <Button onClick={handleCancel} style={{background: '#C73642', width: '80px'}}>
              Cancel
            </Button>
            <Button type="submit">
              Add staff
            </Button>
          </div>
        </FormWrap>
      )

    }
  }
}

const mapStateToProps = state => {
  return {
    locationList: state.staffReducer.locationList,
    locationIdLookup: state.staffReducer.locationIdLookup,
    preferredContactMethodList: state.staffReducer.preferredContactMethodList,
    preferredContactMethodIdLookup: state.staffReducer.preferredContactMethodIdLookup,
    schoolGradeList: state.staffReducer.schoolGradeList,
    schoolGradeIdLookup: state.staffReducer.schoolGradeIdLookup,
    blockList: state.staffReducer.blockList,
    blockIdLookup: state.staffReducer.blockIdLookup,
    createNewStaffIsLoading: state.staffReducer.createNewStaffIsLoading
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createNewStaff }
)(StaffRegistrationForm)
);