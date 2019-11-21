import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Progress } from 'antd';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Label = styled.label`
color: #89878a;
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
{/* <Progress 
type="circle" 
percent={props.progressByStudentId.speaking_fluency * 10} 
width={80}
 /> */}

function PlacementExamView({ exam }) {

  //toggle disable on/off of the form on click of the edit button
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [arrowVisibility, setArrowVisibility] = useState('Hidden')
  const [cancel, setCancel] = useState(false);

  const [testDate, setTestDate] = useState();

  useEffect(() => {
console.log('VIEW EXAM: ', exam)

  let options = { year: 'numeric', month: 'numeric', day: 'numeric' }; 
  let date = new Date(exam.test_date).toLocaleDateString('en-US', options);
  setTestDate(date);

  }, [])

  function handleChange(event) {
  }  


  return (
    <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr',
                 gridGap: '20px', marginTop: '15px'}}>
      <div>
        <Label>Date</Label>
         <Data>
          <Input 
            style={{border: `${edit ? '1px solid #dedbdb' : '1px solid transparent'}`}}
            type="text"
            name="cpr"
            value={testDate}
            onChange={handleChange}
            disabled={disabled} />
        </Data>
      </div>
      <div>
        <Label>Test</Label>
         <Data>
           <Input 
            style={{border: `${edit ? '1px solid #dedbdb' : '1px solid transparent'}`}}
            type="text"
            name="cpr"
            value={exam.test}
            onChange={handleChange}
            disabled={disabled} />
        </Data>
      </div>
      <div>
        <Label>Overall Level</Label>
         <Data>
           <Input 
            style={{border: `${edit ? '1px solid #dedbdb' : '1px solid transparent'}`}}
            type="text"
            name="cpr"
            // value={student.cpr}
            onChange={handleChange}
            disabled={disabled} />
          </Data>
      </div>
      <div>
        <Label>Notes</Label>
          <Data>
           <Input 
            style={{border: `${edit ? '1px solid #dedbdb' : '1px solid transparent'}`}}
            type="text"
            name="cpr"
            value={exam.notes}
            onChange={handleChange}
            disabled={disabled} />
          </Data>
      </div>
      <div>
        <Label>Speaking Fluency</Label>
        <div style={{width: '70px', marginTop: '10px'}}>
          <CircularProgressbar
            value={exam.speaking_fluency * 10}
            text={`${exam.speaking_fluency * 10}%`}
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
          
              // Text size
              textSize: '20px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Colors
              pathColor: '#279fb0',
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
          })}
          />
        </div>
      </div>
      <div>
        <Label>Spoken Accuracy</Label>
        <div style={{width: '70px', marginTop: '10px'}}>
         <CircularProgressbar
            value={exam.spoken_accuracy * 10}
            text={`${exam.spoken_accuracy * 10}%`}
            styles={buildStyles({
              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: 'round',
          
              // Text size
              textSize: '20px',
          
              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 0.5,
          
              // Colors
              pathColor: '#279fb0',
              textColor: '#f88',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
          })}
        />
        </div>
      </div>
      <div>
        <Label>Listening Comprehension</Label>
        <div style={{width: '70px', marginTop: '10px'}}>
        <CircularProgressbar
          value={exam.listening_comprehension * 10}
          text={`${exam.listening_comprehension * 10}%`}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'round',
        
            // Text size
            textSize: '20px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
        
            // Colors
            pathColor: '#279fb0',
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7',
         })}
        />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
  };
};

export default withRouter(
  connect(
      mapStateToProps,
      {}
  )(PlacementExamView)
)