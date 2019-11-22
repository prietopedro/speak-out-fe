import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './progressReportView.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { getCourseInfo, editProgressReport } from '../../../../../../actions/adminDashboardActions/students/studentsActions';
import { Spin } from 'antd';

const Label = styled.label`
color: #89878a;
font-size: 12px;
`

const Data = styled.div`
color: black;
font-weight: 450;
`

const Input = styled.input`
outline: none;
border-radius: 3px;
background: white;
width: 100%;
height: 31px;
font-size: 14px;
font-weight: 400;
margin-left: -2px;
`

function ProgressReportView(props) {

  const [progressReport, setProgressReport] = useState({
    course_id: props.report.course_id,
    teacher_id: '',
    notes: props.report.notes,
    grammar: '',
    homework_effort: '',
    interest: '',
    listening: '',
    overall: '',
    participation: '',
    pronunciation: '',
    reading: '',
    speaking_accuracy: '',
    speaking_fluency: '',
    submitting_homework: '',
    vocabulary: '',
    writing: ''
  });

  //toggle disable on/off of the form on click of the edit button
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [arrowVisibility, setArrowVisibility] = useState('Hidden')
  const [cancel, setCancel] = useState(false);

  const [reportDate, setReportDate] = useState();

  const [display, setDisplay] = useState('none');

  //toggle visibility of cancel button
  const [displayCancelButton, setDisplayCancelButton] = useState('none');

  const [teacher, setTeacher] = useState('');
  const [level, setLevel] = useState('');
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const [speakingFluency, setSpeakingFluency] = useState(props.report.speaking_fluency);
  const [speakingAccuracy, setSpeakingAccuracy] = useState(props.report.speaking_accuracy);
  const [vocabulary, setVocabulary] = useState(props.report.vocabulary);
  const [pronunciation, setPronunciation] = useState(props.report.pronunciation);
  const [grammar, setGrammar] = useState(props.report.grammar);
  const [listening, setListening] = useState(props.report.listening);
  const [writing, setWriting] = useState(props.report.writing);
  const [reading, setReading] = useState(props.report.reading);
  const [interest, setInterest] = useState(props.report.interest);
  const [participation, setParticipation] = useState(props.report.participation);
  const [submittingHomework, setSubmittingHomework] = useState(props.report.submitting_homework);
  const [homeworkEffort, setHomeworkEffort] = useState(props.report.homework_effort);
  
  useEffect(() => {
    console.log('VIEW REPORT: ', props)

  props.getCourseInfo(props.report.course_id);

  let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
  let date = new Date(props.report.report_date).toLocaleDateString('en-US', options);
  setReportDate(date);

  //display dropdown value based on the incoming data
  for (let key in props.teacherIdLookup) {
    if (props.teacherIdLookup[key] === props.report.teacher_id) {
      setTeacher(key);
    }
  }

  //display dropdown value based on the incoming data
  for (let key in props.courseLevelLookup) {
    if (props.courseLevelLookup[key] === props.report.course_id) {
      setLevel(key);
    }
  }

  }, [])

  function handleCancel(event) {
    event.preventDefault();

    setSpeakingFluency(props.report.speaking_fluency);
    setSpeakingAccuracy(props.report.speaking_accuracy);
    setVocabulary(props.report.vocabulary);
    setPronunciation(props.report.pronunciation);
    setGrammar(props.report.grammar);
    setListening(props.report.listening);
    setWriting(props.report.writing);
    setReading(props.report.reading);
    setInterest(props.report.interest);
    setParticipation(props.report.participation);
    setSubmittingHomework(props.report.submitting_homework);
    setHomeworkEffort(props.report.homework_effort);
    setProgressReport({...progressReport, notes: props.report.notes});

    //display dropdown value based on the incoming data
    for (let key in props.teacherIdLookup) {
      if (props.teacherIdLookup[key] === props.report.teacher_id) {
        setTeacher(key);
      }
    }
    //display dropdown value based on the incoming data
    for (let key in props.courseLevelLookup) {
      if (props.courseLevelLookup[key] === props.report.course_id) {
        setLevel(key);
      }
    }

    setDisabled(true);
    setEdit(false);
    setDisplayCancelButton('none');
    setCancel(!cancel);
    setArrowVisibility('Hidden');

  }

  function handleLevelDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.courseLevelList.length; i++) {
      if (props.courseLevelList[i] === e.value) {
        index = i;
      }
    }
    setProgressReport({...progressReport, course_id: props.courseLevelLookup[e.value]});
    setLevel(props.courseLevelList[index]);
  }

  function handleTeacherDropdown(e) {
    //reassign the dropdown value to the one selected
    let index;
    for (let i = 0; i < props.teacherList.length; i++) {
      if (props.teacherList[i] === e.value) {
        index = i;
      }
    }
    setProgressReport(
      {...progressReport, teacher_id: props.teacherIdLookup[e.value]}
    );
    setTeacher(props.teacherList[index]);
  }

  const handleEdit = () => {
    if (edit) {
      const editProgressReport = {
        id: props.report.id,
        course_id: progressReport.course_id,
        teacher_id: progressReport.teacher_id,
        notes: progressReport.notes,
        grammar: grammar,
        homework_effort: homeworkEffort,
        interest: interest,
        listening: listening,
        participation: participation,
        pronunciation: pronunciation,
        reading: reading,
        speaking_accuracy: speakingAccuracy,
        speaking_fluency: speakingFluency,
        submitting_homework: submittingHomework,
        vocabulary: vocabulary,
        writing: writing,
        overall: Math.round((grammar + homeworkEffort + interest + listening + participation + pronunciation + reading 
                  + speakingAccuracy + speakingFluency + submittingHomework + vocabulary +writing) / 12)
      }
      console.log('REPORT', editProgressReport)
      props.editProgressReport(props.report.id, editProgressReport);
      setDisabled(true);
      setEdit(false);
      setDisplayCancelButton('none');
      setArrowVisibility('Hidden')
    } else {
      setDisabled(false);
      setEdit(true);
      setDisplayCancelButton('flex');
      setArrowVisibility('Visible')
      // props.resetEdited();
    }
  }

  function handleChange(event) {
    setProgressReport({...progressReport, [event.target.name]: event.target.value})
  }  

  function handleDisplay(event) {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  function handleSpeakingFluencyDropdown(e) {
    setSpeakingFluency(parseInt(e.value));
  }

  function handleSpeakingAccuracyDropdown(e) {
    setSpeakingAccuracy(parseInt(e.value));
  }

  function handleVocabularyDropdown(e) {
    setVocabulary(parseInt(e.value));
  }

  function handlePronunciationDropdown(e) {
    setPronunciation(parseInt(e.value));
  }

  function handleGrammarDropdown(e) {
    setGrammar(parseInt(e.value));
  }

  function handleListeningDropdown(e) {
    setListening(parseInt(e.value));
  }

  function handleWritingDropdown(e) {
    setWriting(parseInt(e.value));
  }

  function handleReadingDropdown(e) {
    setReading(parseInt(e.value));
  }

  function handleInterestDropdown(e) {
    setInterest(parseInt(e.value));
  }

  function handleParticipationDropdown(e) {
    setParticipation(parseInt(e.value));
  }

  function handleSubmittingHomeworkDropdown(e) {
    setSubmittingHomework(parseInt(e.value));
  }

  function handleHomeworkEffortDropdown(e) {
    setHomeworkEffort(parseInt(e.value));
  }
 
  return (
    <div className="progress-report-view" style={{marginBottom: '10px'}}>
     <div onClick={handleDisplay} style={{display: 'flex', alignItems: 'center', ontSize: '16px', fontWeight: '500', backgroundColor: '#FAFAFA', 
                  borderBottom: '1px solid #E8E8E8', borderLeft: '1px solid #f9f7f7', borderRight: '1px solid #f9f7f7', borderTop: '1px solid #f9f7f7',
                  padding: '10px 10px 10px 2px', cursor: 'pointer'}}>
      <div>
        <div style={{width: '35px', margin: '0px 10px 0px 2px'}}>
          <CircularProgressbar
            value={props.report.overall * 10}
            text={`${props.report.overall * 10}%`}
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
          
              // Text size
              textSize: '28px',
              textWeight: '700',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Colors
              pathColor: '#1f7e8c',
              textColor: '#89878a',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
          })}/>
        </div>
      </div>
      <div style={{marginRight: '10px'}}>
        <Dropdown 
              onChange={handleLevelDropdown} 
              controlClassName={`myControlClassName editForm${arrowVisibility}`} 
              className='dropdownRoot' 
              menuClassName='myMenuClassName dropdown-menu'
              options={props.courseLevelList}   
              value={level}
              disabled={disabled} 
            />
      </div>
      <div style={{marginRight: '10px'}}>{reportDate}</div>
      {/* <div>Victoria Labdon</div> */}
      <Dropdown 
            onChange={handleTeacherDropdown} 
            controlClassName={`myControlClassName editForm${arrowVisibility}`} 
            className='dropdownRoot' 
            menuClassName='myMenuClassName dropdown-menu'
            options={props.teacherList}   
            value={teacher}
            disabled={disabled} 
          />
     </div>

     <div style={{display: `${edit ? 'block' : display}`}}>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <div onClick={handleCancel} 
             style={{marginTop: '5px', 
             marginRight: '5px', cursor: 'pointer', 
             color: '#C73642', display: 'flex', 
             display: `${displayCancelButton}`}}>
          <FontAwesomeIcon icon={faTimesCircle} size='lg' color='#C73642' style={{marginRight: '8px'}}/> {''}
        </div>
        <div onClick={handleEdit} style={{alignSelf: 'flex-end', marginTop: '5px', cursor: 'pointer', color: '#89878A', display: 'flex'}}>
          <FontAwesomeIcon icon={edit ? faSave : faEdit} size='lg' color='#bfbfbf' style={{marginRight: '8px'}}/> {''}
          <div>
            {edit ? 'Save' : 'Edit'}
          </div>
        </div>
      </div>

     <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr',
                 gridGap: '10px', marginTop: '15px'}}>
      <div>
        <Label>Speaking Fluency</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={speakingFluency * 10}
              text={`${speakingFluency * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
            onChange={handleSpeakingFluencyDropdown} 
            controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
            className='dropdownRoot' 
            menuClassName='myMenuClassName dropdown-menu'
            options={numbers}   
            value={5}
            disabled={disabled} 
          />
        </div>
      </div>

      <div>
        <Label>Speaking Accuracy</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
                value={speakingAccuracy * 10}
                text={`${speakingAccuracy * 10}%`}
                styles={buildStyles({
                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: 'round',
              
                  // Text size
                  textSize: '20px',
              
                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,
              
                  // Colors
                  pathColor: '#2094a5',
                  textColor: '#f88',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#3e98c7',})}/>
            </div>
            <Dropdown 
                    onChange={handleSpeakingAccuracyDropdown} 
                    controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName dropdown-menu'
                    options={numbers}   
                    value={5}
                    disabled={disabled} 
              />
          </div>
      </div>

      <div>
        <Label>Vocabulary</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={vocabulary * 10}
              text={`${vocabulary * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleVocabularyDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Pronunciation</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={pronunciation * 10}
              text={`${pronunciation * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handlePronunciationDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Grammar</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={grammar * 10}
              text={`${grammar * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleGrammarDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Listening</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={listening * 10}
              text={`${listening * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleListeningDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Writing</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={writing * 10}
              text={`${writing * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleWritingDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Reading</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={reading * 10}
              text={`${reading * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleReadingDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Interest</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={interest * 10}
              text={`${interest * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleInterestDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Participation</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={participation * 10}
              text={`${participation * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleParticipationDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Submitting Homework</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={submittingHomework * 10}
              text={`${submittingHomework * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleSubmittingHomeworkDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      <div>
        <Label>Homework Effort</Label>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{width: '60px', marginTop: '10px', marginRight: '10px'}}>
            <CircularProgressbar
              value={homeworkEffort * 10}
              text={`${homeworkEffort * 10}%`}
              styles={buildStyles({
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'round',
            
                // Text size
                textSize: '20px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
            
                // Colors
                pathColor: '#2094a5',
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
            })}/>
          </div>
          <Dropdown 
                  onChange={handleHomeworkEffortDropdown} 
                  controlClassName={`myControlClassName editFormCircles${arrowVisibility}`} 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName dropdown-menu'
                  options={numbers}   
                  value={5}
                  disabled={disabled} 
            />
          </div>
      </div>

      {/* <div>
        <Label>Overall</Label>
        <div style={{width: '90px', marginTop: '10px'}}>
          <CircularProgressbar
            value={report.overall * 10}
            text={`${report.overall * 10}%`}
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
          
              // Text size
              textSize: '20px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Colors
              pathColor: '#2094a5',
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
          })}/>
        </div>
      </div> */}

      <div style={{gridColumn: 'span 6'}}>
        <Label>Notes</Label>
          <Data>
           <textarea 
            style={{border: `${edit ? '1px solid #dedbdb' : '1px solid transparent'}`, width: '100%', height: '80px', outline: 'none', 
            borderRadius: '3px'}}
            type="text"
            name="notes"
            value={progressReport.notes}
            onChange={handleChange}
            disabled={disabled} />
          </Data>
      </div>

      </div>
    </div>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state,
    courseLevelList: state.studentsReducer.courseLevelList,
    courseLevelLookup: state.studentsReducer.courseLevelLookup,
    teacherList: state.studentsReducer.teacherList,
    teacherIdLookup: state.studentsReducer.teacherIdLookup,
    courseInfo: state.studentsReducer.courseInfo,
    courseInfoIsLoading: state.studentsReducer.courseInfoIsLoading
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getCourseInfo, editProgressReport }
  )(ProgressReportView)
)
