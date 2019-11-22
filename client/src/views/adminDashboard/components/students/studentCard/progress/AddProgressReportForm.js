import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import './addProgressReportForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSave, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { getCourseInfo, editProgressReport, resetEdited } from '../../../../../../actions/adminDashboardActions/students/studentsActions';




function AddProgressReportForm(props) {

  const [progressReport, setProgressReport] = useState({
    course_id: '',
    teacher_id: '',
    notes: '',
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
    writing: '',
    report_date: ''
  });

  const [teacher, setTeacher] = useState('');
  const [level, setLevel] = useState('');
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const [speakingFluency, setSpeakingFluency] = useState('');
  const [speakingAccuracy, setSpeakingAccuracy] = useState('');
  const [vocabulary, setVocabulary] = useState('');
  const [pronunciation, setPronunciation] = useState('');
  const [grammar, setGrammar] = useState('');
  const [listening, setListening] = useState('');
  const [writing, setWriting] = useState('');
  const [reading, setReading] = useState('');
  const [interest, setInterest] = useState('');
  const [participation, setParticipation] = useState('');
  const [submittingHomework, setSubmittingHomework] = useState('');
  const [homeworkEffort, setHomeworkEffort] = useState('');
  const [overall, setOverall] = useState();
  
  useEffect(() => {
    console.log('VIEW REPORT: ', props)
  //reset edited in case it wasn't in other tab
  props.resetEdited();

  // props.getCourseInfo(props.report.course_id);

  // let calcOverall = (((speakingFluency + speakingAccuracy + vocabulary + pronunciation + grammar + listening + writing
  //   + reading + interest + participation + submittingHomework + homeworkEffort) / 12) * 10).toString();
  // let formatted = calcOverall.split('.')[0];
  // setOverall(parseInt(formatted));

  // let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
  // let date = new Date(props.report.report_date).toLocaleDateString('en-US', options);


  // setReportDate(date);

  // //display dropdown value based on the incoming data
  // for (let key in props.teacherIdLookup) {
  //   if (props.teacherIdLookup[key] === props.report.teacher_id) {
  //     setTeacher(key);
  //   }
  // }

  // //display dropdown value based on the incoming data
  // for (let key in props.courseLevelLookup) {
  //   if (props.courseLevelLookup[key] === props.report.course_id) {
  //     setLevel(key);
  //   }
  // }

  }, [])

  function handleCancel(event) {
    event.preventDefault();

    // setSpeakingFluency(props.report.speaking_fluency);
    // setSpeakingAccuracy(props.report.speaking_accuracy);
    // setVocabulary(props.report.vocabulary);
    // setPronunciation(props.report.pronunciation);
    // setGrammar(props.report.grammar);
    // setListening(props.report.listening);
    // setWriting(props.report.writing);
    // setReading(props.report.reading);
    // setInterest(props.report.interest);
    // setParticipation(props.report.participation);
    // setSubmittingHomework(props.report.submitting_homework);
    // setHomeworkEffort(props.report.homework_effort);
    // setProgressReport({...progressReport, notes: props.report.notes});

    // //display dropdown value based on the incoming data
    // for (let key in props.teacherIdLookup) {
    //   if (props.teacherIdLookup[key] === props.report.teacher_id) {
    //     setTeacher(key);
    //   }
    // }
    // //display dropdown value based on the incoming data
    // for (let key in props.courseLevelLookup) {
    //   if (props.courseLevelLookup[key] === props.report.course_id) {
    //     setLevel(key);
    //   }
    // }

    // setDisabled(true);
    // setEdit(false);
    // setDisplayCancelButton('none');
    // setCancel(!cancel);
    // setArrowVisibility('Hidden');

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


  function handleChange(event) {
    setProgressReport({...progressReport, [event.target.name]: event.target.value})
  }  

  function handleSpeakingFluencyDropdown(e) {
    setSpeakingFluency(e.value);
  }

  function handleSpeakingAccuracyDropdown(e) {
    setSpeakingAccuracy(e.value);
  }

  function handleVocabularyDropdown(e) {
    setVocabulary(e.value);
  }

  function handlePronunciationDropdown(e) {
    setPronunciation(e.value);
  }

  function handleGrammarDropdown(e) {
    setGrammar(e.value);
  }

  function handleListeningDropdown(e) {
    setListening(e.value);
  }

  function handleWritingDropdown(e) {
    setWriting(e.value);
  }

  function handleReadingDropdown(e) {
    setReading(e.value);
  }

  function handleInterestDropdown(e) {
    setInterest(e.value);
  }

  function handleParticipationDropdown(e) {
    setParticipation(e.value);
  }

  function handleSubmittingHomeworkDropdown(e) {
    setSubmittingHomework(e.value);
  }

  function handleHomeworkEffortDropdown(e) {
    setHomeworkEffort(e.value);
  }
 
  return (
    <div className="add-progress-report" style={{marginBottom: '10px', background: '#E0EBF0', padding: '10px', marginTop: '10px'}}>
    
     <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                 gridGap: '15px', marginTop: '15px'}}>
      <div>
        <label>Course</label>
          <Dropdown 
                onChange={handleLevelDropdown} 
                controlClassName='myControlClassName'
                className='dropdownRoot' 
                menuClassName='myMenuClassName'
                options={props.courseLevelList}   
                value={level}
              />
      </div>
      <div>
        <label>Teacher</label>
        <Dropdown 
              onChange={handleTeacherDropdown} 
              controlClassName='myControlClassName'
              className='dropdownRoot' 
              menuClassName='myMenuClassName'
              options={props.teacherList}   
              value={teacher}
            />
      </div>
      <div>
        <label>Speaking Fluency</label>
          <Dropdown 
            onChange={handleSpeakingFluencyDropdown} 
            controlClassName='myControlClassName formCircles' 
            className='dropdownRoot' 
            menuClassName='myMenuClassName'
            options={numbers}   
            value={speakingFluency}
          />
      </div>

      <div>
        <label>Speaking Accuracy</label>
            <Dropdown 
                    onChange={handleSpeakingAccuracyDropdown} 
                    controlClassName='myControlClassName formCircles'
                    className='dropdownRoot' 
                    menuClassName='myMenuClassName'
                    options={numbers}   
                    value={speakingAccuracy} 
              />
      </div>

      <div>
        <label>Vocabulary</label>
          <Dropdown 
                  onChange={handleVocabularyDropdown} 
                  controlClassName='myControlClassName formCircles'
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={vocabulary}
            />
      </div>

      <div>
        <label>Pronunciation</label>
          <Dropdown 
                  onChange={handlePronunciationDropdown} 
                  controlClassName='myControlClassName formCircles'
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={pronunciation}
            />
      </div>

      <div>
        <label>Grammar</label>
          <Dropdown 
                  onChange={handleGrammarDropdown} 
                  controlClassName='myControlClassName formCircles' 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={grammar}
            />
      </div>

      <div>
        <label>Listening</label>
          <Dropdown 
                  onChange={handleListeningDropdown} 
                  controlClassName='myControlClassName formCircles'
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={listening}
            />
      </div>

      <div>
        <label>Writing</label>
          <Dropdown 
                  onChange={handleWritingDropdown} 
                  controlClassName='myControlClassName formCircles' 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={writing}
            />
      </div>

      <div>
        <label>Reading</label>
          <Dropdown 
                  onChange={handleReadingDropdown} 
                  controlClassName='myControlClassName formCircles'
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={reading}
            />
      </div>

      <div>
        <label>Interest</label>
          <Dropdown 
                  onChange={handleInterestDropdown} 
                  controlClassName='myControlClassName formCircles' 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={interest}
            />
      </div>

      <div>
        <label>Participation</label>
          <Dropdown 
                  onChange={handleParticipationDropdown} 
                  controlClassName='myControlClassName formCircles'
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={participation}
            />
      </div>

      <div>
        <label>Submitting Homework</label>
          <Dropdown 
                  onChange={handleSubmittingHomeworkDropdown} 
                  controlClassName='myControlClassName formCircles' 
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={submittingHomework}
            />
      </div>

      <div>
        <label>Homework Effort</label>
          <Dropdown 
                  onChange={handleHomeworkEffortDropdown} 
                  controlClassName='myControlClassName formCircles'
                  className='dropdownRoot' 
                  menuClassName='myMenuClassName'
                  options={numbers}   
                  value={homeworkEffort}
            />
      </div>

      {/* <div>
        <label>Overall</label>
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

      <div style={{gridColumn: 'span 5'}}>
        <label>Notes</label>
         <div style={{border: '1px solid transparent', borderRadius: '3px'}}>
           <textarea 
            style={{width: '100%', height: '80px', outline: 'none', 
                    border: '1px solid transparent', borderRadius: '3px'}}
            type="text"
            name="notes"
            value={progressReport.notes}
            onChange={handleChange}
            />
          </div>
      </div>

      {/* </div> */}
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
    courseInfoIsLoading: state.studentsReducer.courseInfoIsLoading,
    edited: state.studentsReducer.edited
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      { getCourseInfo, editProgressReport, resetEdited }
  )(AddProgressReportForm)
)
