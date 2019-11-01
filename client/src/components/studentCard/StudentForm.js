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
        id: studentId,
        first_name: props.props.studentById.first_name,
        additional_names: props.props.studentById.additional_names,
        gender: props.props.studentById.gender,
        birthdate: props.props.studentById.birthdate,
        home_telephone: props.props.studentById.home_telephone,
        mobile_telephone: props.props.studentById.mobile_telephone,
        email: props.props.studentById.email,
        contact_type_id: props.props.studentById.contact_type_id,
        location_id: props.props.studentById.location_id,
        registration_date: props.props.studentById.registration_date,
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
        grade_updated_id: props.props.studentById.grade_updated_id,
    })
    console.log('edit state', state)
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
                        />
                    </div>
                    <div className='row1'>
                        <label>Additional Names</label>
                        <input
                            type='text'
                            name='additional_names'
                            placeholder='Additional Names'
                            onChange={handleChange}
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
                            value={state.gender}
                        />
                    </div>
                    <div className='row1'>
                        <label>Birth Date</label>
                        <input
                            type='date'
                            name='birthdate'
                            placeholder='Birth Date'
                            onChange={handleChange}
                            value={state.birthdate}
                        />
                    </div>
                    <div className='row2'>
                        <label>Home Telephone</label>
                        <input
                            type='text'
                            name='home_telephone'
                            placeholder='Home Telephone'
                            onChange={handleChange}
                            value={state.first_name}
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
                        />
                    </div>
                    <div className='row3'>
                        <label>Registration Date</label>
                        <input
                            type='date'
                            name='registration_date'
                            placeholder='registration'
                            onChange={handleChange}
                            value={state.registration_date}
                        />
                    </div>
                    <div className='row3'>
                        <label>Block</label>
                        <input
                            type='text'
                            name='block'
                            placeholder='block'
                            onChange={handleChange}
                            value={state.block}
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
                        />
                    </div>
                    <div >
                        <label>Grade updated</label>
                        <input
                            type='text'
                            name='grade_updated'
                            placeholder='Grade updated'
                            onChange={handleChange}
                            value={state.grade_updated_id}
                        />
                    </div>
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
