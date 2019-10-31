import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { editStudentById, toggleEditComponent } from '../../actions';
import { withRouter, Link } from 'react-router-dom';
import './StudentForm.css'
import './StudentInformationTab.css'


//might need status 
const StudentForm = (props) => {
    const studentId = props.match.params.id;
    console.log('props from studentInfoTab', props.props.studentById)


    const [state, setState] = useState({
        //id: studentId,
        first_name: props.props.studentById.first_name,
        additional_names: props.props.studentById.additional_names,
        gender: props.props.studentById.gender,
        // birthdate: "2011-09-05",
        home_telephone: props.props.studentById.home_telephone,
        mobile_telephone: props.props.studentById.mobile_telephone,
        email: props.props.studentById.email,
        contact_type_id: props.props.studentById.contact_type_id,
        location_id: 1,
        // registration_date: "2011-09-05",
        block: props.props.studentById.block,
        road: props.props.studentById.road,
        flat: props.props.studentById.flat,
        building: props.props.studentById.building,
        no_call: props.props.studentById.no_call,
        delinquent: props.props.studentById.delinquent,
        expelled: props.props.studentById.expelled,
        notes: props.props.studentById.notes,
        school_grade_id: props.props.studentById.school_grade_id,
        school_name: props.props.studentById.school_name,
        // grade_updated: "2011-09-05",
    })

    const handleChange = e => {
        console.log('e', e)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.editStudentById(studentId, state);
    }

    const cancelEditing = e => {
        e.preventDefault();
        props.toggleEditComponent();
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
           <div className='grid-container'>
           <div className='row1'>
                <label>First Name</label>
                <input 
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    onChange={handleChange}
                    value={state.first_name}
                    // defaultValue={props.props.studentById.first_name}
                    //value={state.first_name}
                />
            </div>
            <div className='row1'>
                <label>Additional Names</label>
                <input 
                    type='text'
                    name='additional_names'
                    placeholder='Additional Names'
                    onChange={handleChange}
                    // defaultValue={props.props.studentById.additional_names}
                    value={state.additional_names}
                />
            </div>
            <div className='row1'>
             <label>Gender</label>
                <input 
                    type='text'
                    name='gender'
                    placeholder='Gender'
                    onChange={handleChange}
                    // defaultValue={props.props.studentById.gender}
                    value={state.gender}
                />
            </div>
            {/* <div className='row1'>
                <label>Birth Date</label>
                <input 
                    type='date'
                    name='birthdate'
                    placeholder='Birth Date'
                    onChange={handleChange}
                    // defaultValue={props.props.studentById.birthdate}
                    value="2011-09-05"
                />
            </div> */}
            <div className='row2'>            
                <label>Home Telephone</label>
                <input 
                    type='text'
                    name='home_telephone'
                    placeholder='Home Telephone'
                    onChange={handleChange}
                    value={state.first_name}
                    // defaultValue={props.props.studentById.home_telephone}
                    value={state.home_telephone}
                />
            </div>
            <div className='row2'>
                <label>Mobile Telephone</label>
                <input 
                    type='text'
                    name='mobile_telephone'
                    placeholder='Mobile Telephone'
                    onChange={handleChange}
                    value={state.mobile_telephone}
                    // defaultValue={props.props.studentById.mobile_telephone}
                />
            </div>
            <div className='row2'>
                <label>Email</label>
                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={handleChange}
                    value={state.email}
                    // defaultValue={props.props.studentById.email}
                />
            </div>
            <div className='row2'>
                <label>Preferred Contact Method</label>
                <input 
                    type='text'
                    name='contact_type_id'
                    placeholder='Preferred Contact Method'
                    onChange={handleChange}
                    value={state.contact_type_id}
                    // defaultValue={props.props.studentById.contact_type_id}

                />
            </div>
            <div className='row3'>
                <label>Location</label>
                <input 
                    type='text'
                    name='location'
                    placeholder='Location'
                    onChange={handleChange}
                    value={state.location_id}
                    // defaultValue={props.props.studentById.location}
                />
            </div>
            {/* <div className='row3'>
                <label>Registration Date</label>
                <input 
                    type='date'
                    name='registration'
                    placeholder='registration'
                    onChange={handleChange}
                    value="2011-09-05"
                    // defaultValue={props.props.studentById.registration_date}
                />
            </div> */}
            <div className='row3'>
                <label>Block</label>
                <input 
                    type='text'
                    name='block'
                    placeholder='block'
                    onChange={handleChange}
                    value={state.block}
                    // defaultValue={props.props.studentById.block}
                />
            </div>
            <div className='row3'>
                <label>Road</label>
                <input 
                    type='text'
                    name='road'
                    placeholder='road'
                    onChange={handleChange}
                    value={state.road}
                    // defaultValue={props.props.studentById.road}
                />
            </div>
            <div className='row3'>
                <label>Flat</label>
                <input 
                    type='text'
                    name='flat'
                    placeholder='flat'
                    onChange={handleChange}
                    value={state.flat}
                    // defaultValue={props.props.studentById.flat}
                />
            </div>
            <div className='row4'>
                 <label>Building</label>
                <input 
                    type='text'
                    name='building'
                    placeholder='building'
                    onChange={handleChange}
                    value={state.building}
                    // defaultValue={props.props.studentById.building}
                />
            </div>
            <div className='row4'>
            <label >No Call</label>
                <input 
                    type='text'
                    name='no_call'
                    placeholder='No Call'
                    onChange={handleChange}
                    value={state.no_call}
                    // defaultValue={props.props.studentById.no_call}
                />
            </div>
            <div className='row4'>
                 <label>Delinquent Account</label>
                <input 
                    type='text'
                    name='delinquent'
                    placeholder='Delinquent Account'
                    onChange={handleChange}
                    value={state.delinquent}
                    // defaultValue={props.props.studentById.delinquent}
                />
            </div>
            <div className='row4'>
                <label>Expelled</label>
                <input 
                    type='text'
                    name='expelled'
                    placeholder='Expelled'
                    onChange={handleChange}
                    value={state.expelled}
                    // defaultValue={props.props.studentById.expelled}
                />
            </div>
            <div className='row4'>
                 <label>Notes</label>
            <input 
                type='text'
                name='notes'
                placeholder='Notes'
                onChange={handleChange}
                value={state.notes}
                // defaultValue={props.props.studentById.notes}
                />
            </div>
            <div >
                 <label>School grade</label>
            <input 
                type='text'
                name='school_grade_id'
                placeholder='School grade'
                onChange={handleChange}
                value={state.school_grade_id}
                // defaultValue={props.props.studentById.school_grade_id}
                />
            </div>
            <div >
                 <label>School name</label>
            <input 
                type='text'
                name='school_name'
                placeholder='School name'
                onChange={handleChange}
                value={state.school_name}
                // defaultValue={props.props.studentById.school_name}
                />
            </div>
            {/* <div >
                 <label>Grade updated</label>
            <input 
                type='text'
                name='grade_updated'
                placeholder='Grade updated'
                onChange={handleChange}
                value="2011-09-05"
                // defaultValue={props.props.studentById.grade_updated}
                />
            </div> */}
            </div>
            <button type='submit' onClick={handleSubmit}>Save</button>
            <button type='reset' onClick={cancelEditing}>Cancel</button>
           </form>
           
        </div>
    )
}

export default withRouter(
    connect(
        null,
        { editStudentById, toggleEditComponent }
    )(StudentForm)
)
