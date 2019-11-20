import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createNewCourse } from '../../../../../actions/adminDashboardActions/courses/courseAction';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
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
  outline: none;
  cursor: pointer;
`


function CourseRegistrationForm(props) {
  const [course, setCourse] = useState({
                                          term_id: '', 
                                          course_type_id: '', 
                                          group_type_id: '', 
                                          school_grade_id: '', 
                                          level_id: '', 
                                          section: '', 
                                          subsection: '', 
                                          hourly_rate: '',
                                          course_schedule_id: '', 
                                          room_id: '', 
                                          start_time: '', 
                                          end_time: '', 
                                          teacher_id: '', 
                                          notes: '', 
                                          status: '', 
                                          textbook: '' //should be added but it's not yet added into db
                                        });

 
  // set arrays of foreign key values to use in the dropdown (except 'statusArr' array it's not a foreign key)
  const [term, setTerm] = useState('')
  const [courseType, setCourseType] = useState('');
  const [groupType, setGroupType] = useState('');
  const [schoolGrade, setSchoolGrade] = useState('');
  const [level, setLevel] = useState('');
  const [courseSchedule, setCourseSchedule] = useState('');
  const [room, setRoom] = useState('');
  const statusArr = ['active', 'waitlist', 'completed', 'cancelled'];
  const [status, setStatus] = useState('');
  const [teacher, setTeacher] = useState('');

  // handle required fields (make them all required for now)
  const [errorBorderTerm, setErrorBorderTerm] = useState('transparent'); //error '#ef6570'
  const [errorBorderCourseType, setErrorBorderCourseType] = useState('transparent'); //error '#ef6570'
  const [errorBorderGroupType, setErrorBorderGroupType] = useState('transparent'); //error '#ef6570'
  const [errorBorderSchoolGrade, setErrorBorderSchoolGrade] = useState('transparent'); //error '#ef6570'
  const [errorBorderLevel, setErrorBorderLevel] = useState('transparent'); //error '#ef6570'
  const [errorBorderSection, setErrorBorderSection] = useState('transparent'); //error '#ef6570'
  const [errorBorderSubsection, setErrorBorderSubsection] = useState('transparent'); //error '#ef6570'
  const [errorBorderHourlyRate, setErrorBorderHourlyRate] = useState('transparent'); //error '#ef6570'
  const [errorBorderCourseSchedule, setErrorBorderCourseSchedule] = useState('transparent'); //error '#ef6570'
  const [errorBorderRoom, setErrorBorderRoom] = useState('transparent'); //error '#ef6570'
  const [errorBorderStartTime, setErrorBorderStartTime] = useState('transparent'); //error '#ef6570'
  const [errorBorderEndTime, setErrorBorderEndTime] = useState('transparent'); //error '#ef6570'
  const [errorBorderTeacher, setErrorBorderTeacher] = useState('transparent'); //error '#ef6570'
  const [errorBorderNotes, setErrorBorderNotes] = useState('transparent'); //error '#ef6570'
  const [errorBorderStatus, setErrorBorderStatus] = useState('transparent'); //error '#ef6570'

  //error message visibility
  const [sectionMessage, setSectionMessage] = useState('#E0EBF0'); 
  const [sectionOpacity, setSectionOpacity] = useState('0');
  const [subsectionMessage, setSubsectionMessage] = useState('#E0EBF0'); 
  const [subsectionOpacity, setSubsectionOpacity] = useState('0');
  const [hourlyRateMessage, setHourlyRateMessage] = useState('#E0EBF0'); 
  const [hourlyRateOpacity, setHourlyRateOpacity] = useState('0');

  // display a spinner on isLoading when posting a new record
  const [loading, setLoading] = useState(props.createNewStudentIsLoading);


  useEffect(() => {

  }, [loading])
  
  function handleChange(event) {
    if (event.target.name === 'section' && errorBorderSection === '#ef6570') {
      setErrorBorderSection('transparent');
    }
    if (event.target.name === 'section' && sectionMessage === '#ef6570') {
      setSectionMessage('#E0EBF0');
      setSectionOpacity('0');
    }
    if (event.target.name === 'subsection' && errorBorderSubsection === '#ef6570') {
      setErrorBorderSubsection('transparent');
    }
    if (event.target.name === 'subsection' && subsectionMessage === '#ef6570') {
      setSubsectionMessage('#E0EBF0');
      setSubsectionOpacity('0');
    }
    if (event.target.name === 'hourly_rate' && errorBorderHourlyRate === '#ef6570') {
      setErrorBorderHourlyRate('transparent');
    }
    if (event.target.name === 'hourly_rate' && hourlyRateMessage === '#ef6570') {
      setHourlyRateMessage('#E0EBF0');
      setHourlyRateOpacity('0');
    }
    if (event.target.name === 'start_time' && errorBorderStartTime === '#ef6570') {
      setErrorBorderStartTime('transparent');
    }
    if (event.target.name === 'end_time' && errorBorderEndTime === '#ef6570') {
      setErrorBorderEndTime('transparent');
    }
    if (event.target.name === 'notes' && errorBorderNotes === '#ef6570') {
      setErrorBorderNotes('transparent');
    }
    setCourse({ ...course, [event.target.name]: event.target.value });
  }   

  function handleSubmit(event) {
    event.preventDefault();

    var regexNum=/^[0-9]+$/;

    // check for required fields
    if (course.term_id === '' || course.course_type_id === '' ||
        course.group_type_id === '' || course.school_grade_id === '' ||
        course.level_id === '' || 
        course.section.split(" ").join("") === '' || 
        course.subsection.split(" ").join("") === '' || course.hourly_rate.split(" ").join("") === '' ||
        course.course_schedule_id === '' || 
        course.start_time === '' || course.end_time === '' ||
        course.teacher_id === '' || course.notes === '' || course.status === '' ||
        course.status === 'select') 
      { 
        // highlight all that were missed
        if (course.term_id === '') {
          setErrorBorderTerm('#ef6570');
        } 
        if (course.course_type_id === '') {
          setErrorBorderCourseType('#ef6570');
        } 
        if (course.group_type_id === '') {
          setErrorBorderGroupType('#ef6570');
        }
        if (course.school_grade_id === '') {
          setErrorBorderSchoolGrade('#ef6570');
        }
        if (course.level_id === '') {
          setErrorBorderLevel('#ef6570');
        }
        if (course.section.split(" ").join("") === '') {
          setErrorBorderSection('#ef6570');
        }
        if (course.subsection.split(" ").join("") === '') {
          setErrorBorderSubsection('#ef6570');
        }
        if (course.hourly_rate === '') {
          setErrorBorderHourlyRate('#ef6570');
        }
        if (course.course_schedule_id === '') {
          setErrorBorderCourseSchedule('#ef6570');
        }
        if (course.start_time === '') {
          setErrorBorderStartTime('#ef6570');
        }
        if (course.end_time === '') {
          setErrorBorderEndTime('#ef6570');
        }
        if (course.teacher_id === '') {
          setErrorBorderTeacher('#ef6570');
        }
        if (course.notes.split(" ").join("") === '') {
          setErrorBorderNotes('#ef6570');
        }
        if (course.status === '') {
          setErrorBorderStatus('#ef6570');
        }
    
    } else if (!course.section.match(regexNum)) {
      setSectionMessage('#ef6570');
      setSectionOpacity('1');
    } else if (!course.subsection.match(regexNum)) {
      setSubsectionMessage('#ef6570');
      setSubsectionOpacity('1');
    } else if (!course.hourly_rate.match(regexNum)) {
      setHourlyRateMessage('#ef6570');
      setHourlyRateOpacity('1');
    }
    else {

        const newCourse = {
          term_id: course.term_id, 
          course_type_id: course.course_type_id, 
          group_type_id: course.group_type_id, 
          school_grade_id: course.school_grade_id, 
          level_id: course.level_id, 
          section: course.section, 
          subsection: course.subsection, 
          hourly_rate: course.hourly_rate,
          course_schedule_id: course.course_schedule_id, 
          room_id: course.room_id, 
          start_time: course.start_time, 
          end_time: course.end_time, 
          teacher_id: course.teacher_id, 
          notes: course.notes, 
          status: course.status
        }

        props.createNewCourse(newCourse, props.setNewRecord, props.newRecord, 
                              props.displaySuccessMessageTimeout, props.setSavePrevState);

        // reset form fields
        setCourse({
                    term_id: '', 
                    course_type_id: '', 
                    group_type_id: '', 
                    school_grade_id: '', 
                    level_id: '', 
                    section: '', 
                    subsection: '', 
                    hourly_rate: '',
                    course_schedule_id: '', 
                    room_id: '', 
                    start_time: '', 
                    end_time: '', 
                    teacher_id: '', 
                    notes: '', 
                    status: ''
                   });

        // hide the form by reusing the cancel button method
        props.handleCancelButtonOnForm();
    }
  }

  function handleCancel(event) {
    event.preventDefault();
    props.handleCancelButtonOnForm();
  }                                     

  function handleTermDropdown(e) {
    if (errorBorderTerm === '#ef6570') {
      setErrorBorderTerm('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.termList.length; i++) {
      if (props.termList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, term_id: props.termIdLookup[e.value]});
    setTerm(props.termList[index]); 
  }
  
  function handleCourseTypeDropdown(e) {
    if (errorBorderCourseType === '#ef6570') {
      setErrorBorderCourseType('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.courseTypeList.length; i++) {
      if (props.courseTypeList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, course_type_id: props.courseTypeIdLookup[e.value]});
    setCourseType(props.courseTypeList[index]);
  }

  function handleGroupTypeDropdown(e) {
    if (errorBorderGroupType === '#ef6570') {
      setErrorBorderGroupType('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.groupTypeList.length; i++) {
      if (props.groupTypeList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, group_type_id: props.groupTypeIdLookup[e.value]});
    setGroupType(props.groupTypeList[index]);
  }

  function handleSchoolGradeDropdown(e) {
    if (errorBorderSchoolGrade === '#ef6570') {
      setErrorBorderSchoolGrade('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.schoolGradeList.length; i++) {
      if (props.schoolGradeList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, school_grade_id: props.schoolGradeIdLookup[e.value]});
    setSchoolGrade(props.schoolGradeList[index]);
  }

  function handleLevelDropdown(e) {
    if (errorBorderLevel === '#ef6570') {
      setErrorBorderLevel('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.levelList.length; i++) {
      if (props.levelList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, level_id: props.levelListIdLookup[e.value]});
    setLevel(props.levelList[index]);
  }

  function handleCourseScheduleDropdown(e) {
    if (errorBorderCourseSchedule === '#ef6570') {
      setErrorBorderCourseSchedule('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.courseScheduleList.length; i++) {
      if (props.courseScheduleList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, course_schedule_id: props.courseScheduleIdLookup[e.value]});
    setCourseSchedule(props.courseScheduleList[index]);
  }

  function handleRoomDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.roomList.length; i++) {
      if (props.roomList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, room_id: props.roomIdLookup[e.value]});
    setRoom(props.roomList[index]);
  }

  function handleStatusDropdown(e) {
    if (errorBorderStatus === '#ef6570') {
      setErrorBorderStatus('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < statusArr.length; i++) {
      if (statusArr[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, status: e.value});
    setStatus(statusArr[index]); 
  }

  function handleTeacherDropdown(e) {
    if (errorBorderTeacher === '#ef6570') {
      setErrorBorderTeacher('transparent');
    }
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.teacherList.length; i++) {
      if (props.teacherList[i] === e.value) {
        index = i;
      }
    }
    setCourse({...course, teacher_id: props.teacherIdLookup[e.value]});
    setTeacher(props.teacherList[index]);
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
                <label>Term</label>
                <div style={{border: `1px solid ${errorBorderTerm}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleTermDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.termList}   
                    value={term}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Course Type</label>
                <div style={{border: `1px solid ${errorBorderCourseType}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleCourseTypeDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.courseTypeList}   
                    value={courseType}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Group Type </label>
                <div style={{border: `1px solid ${errorBorderGroupType}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleGroupTypeDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.groupTypeList}   
                    value={groupType}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>School Grade</label>
                <div style={{border: `1px solid ${errorBorderSchoolGrade}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleSchoolGradeDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.schoolGradeList}   
                    value={schoolGrade}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Level</label>
                <div style={{border: `1px solid ${errorBorderLevel}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleLevelDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.levelList}   
                    value={level}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Section</label>
                <div style={{border: `1px solid ${errorBorderSection}`, borderRadius: '3px'}}>
                  <Input 
                    type="text"
                    name="section"
                    value={course.section}
                    onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: sectionMessage, opacity: sectionOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div >
                <label>Subsection</label>
                <div style={{border: `1px solid ${errorBorderSubsection}`, borderRadius: '3px'}}>
                  <Input 
                    type='text' 
                    name="subsection"
                    value={course.subsection}
                    onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: subsectionMessage, opacity: subsectionOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Hourly Rate</label>
                <div style={{border: `1px solid ${errorBorderHourlyRate}`, borderRadius: '3px'}}>
                  <Input 
                    type='text' 
                    name="hourly_rate"
                    value={course.hourly_rate}
                    onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: hourlyRateMessage, opacity: hourlyRateOpacity, marginLeft: '2px'}}>Must input numbers</div>
              </div>
              <div>
                <label>Course Schedule</label>
                <div style={{border: `1px solid ${errorBorderCourseSchedule}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleCourseScheduleDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.courseScheduleList}   
                    value={courseSchedule}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Teacher</label>
                <div style={{border: `1px solid ${errorBorderTeacher}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleTeacherDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.teacherList}   
                    value={teacher}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Room</label>
                <div style={{border: `1px solid ${errorBorderRoom}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleRoomDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={props.roomList}   
                    value={room}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Start Time</label>
                <div style={{border: `1px solid ${errorBorderStartTime}`, borderRadius: '3px'}}>
                  <Input 
                    type="time"
                    name="start_time"
                    value={course.start_time}
                    onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>End Time</label>
                <div style={{border: `1px solid ${errorBorderEndTime}`, borderRadius: '3px'}}>
                  <Input 
                    type="time"
                    name="end_time"
                    value={course.end_time}
                    onChange={handleChange}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div>
                <label>Status</label>
                <div style={{border: `1px solid ${errorBorderStatus}`, borderRadius: '3px'}}>
                  <Dropdown
                    onChange={handleStatusDropdown} 
                    controlClassName='myControlClassName'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={statusArr}   
                    value={status}/>
                </div>
                <div style={{fontSize: '8px', color: '#E0EBF0', opacity: '0', marginLeft: '2px'}}>text</div>
              </div>
              <div style={{gridColumn: 'span 4'}}>
                <label>Notes</label>
                <div style={{border: `1px solid ${errorBorderNotes}`, borderRadius: '3px'}}>
                  <textarea 
                    style={{width: '100%', height: '80px', outline: 'none', 
                            border: '1px solid transparent', borderRadius: '3px'}}
                    type="text"
                    name="notes"
                    value={course.notes}
                    onChange={handleChange}/>
                </div>
              </div>
            </div>
          </fieldset>
          <div style={{alignSelf: 'flex-end'}}>
            <Button onClick={handleCancel} style={{background: '#C73642', width: '80px'}}>
              Cancel
            </Button>
            <Button type="submit">
              Add course
            </Button>
          </div>
        </FormWrap>
      )

    }
  }
}

const mapStateToProps = state => {
  return {
    courseById: state.coursesReducer.courseById,
    termList: state.coursesReducer.termList,
    termIdLookup: state.coursesReducer.termIdLookup,
    courseTypeList: state.coursesReducer.courseTypeList,
    courseTypeIdLookup: state.coursesReducer.courseTypeIdLookup,
    groupTypeList: state.coursesReducer.groupTypeList,
    groupTypeIdLookup: state.coursesReducer.groupTypeIdLookup,
    schoolGradeList: state.coursesReducer.schoolGradeList,
    schoolGradeIdLookup: state.coursesReducer.schoolGradeIdLookup,
    levelList: state.coursesReducer.levelList,
    levelListIdLookup: state.coursesReducer.levelListIdLookup,
    courseScheduleList: state.coursesReducer.courseScheduleList,
    courseScheduleIdLookup: state.coursesReducer.courseScheduleIdLookup,
    roomList: state.coursesReducer.roomList,
    roomIdLookup: state.coursesReducer.roomIdLookup,
    teacherList: state.coursesReducer.teacherList,
    teacherIdLookup: state.coursesReducer.teacherIdLookup
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createNewCourse }
)(CourseRegistrationForm)
);