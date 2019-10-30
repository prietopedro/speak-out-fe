import React, { useState } from 'react'
import './StudentInformationTab.css'



const StudentInformationTab = () => {

    return (
        <>
            <div className='grid-container'>
                <div className='row1'>
                    <h4>First Name</h4>
                    <p>Amir</p>
                    </div>
                <div className='row1'>
                    <h4>Additional Names</h4>
                    <p>Amir Abas k Muhammed</p>
                    </div>
                <div className='row1'>
                    <h4>Gender</h4>
                    <p>Male</p>
                    </div>
                <div className='row1'>
                    <h4>Birth date</h4>
                    <p>02/24/97</p>
                    </div>

                <div className='row2'>
                    <h4>Home Telephone</h4>
                    <p>000-000-0000</p>
                    </div>
                <div className='row2'>
                    <h4>Mobile Telephone</h4>
                    <p>000-000-0000</p>
                </div>
                <div className='row2'>
                    <h4>Email</h4>
                    <p>student@gmail.com</p>
                    </div>
                <div className='row2'>
                    <h4>Preferred Contact Method</h4>
                    <p>Email</p>
                </div>

                <div className='row3'>
                    <h4>Location</h4>
                    <p>Busnias</p>
                    </div>
                <div className='row3'>
                    <h4>Registration Date</h4>
                    <p>11/02/18</p>
                    </div>
                <div className='row3'>
                    <h4>Block</h4>
                    <p>Block 1</p>
                    </div>
                <div className='row3'>
                    <h4>Road</h4>
                    <p>Yellow Brick</p>
                    </div>
                <div className='row3'>
                    <h4>Flat</h4>
                    <p>B#28</p>
                    </div>
                <div className='row3'>
                    <h4>Building</h4>
                    <p>Assembly 2</p>
                    </div>

                <div className='row4'>
                    <h4>No Call</h4>
                    <p>No</p>
                    </div>
                <div className='row4'>
                    <h4>Delinquent Account</h4>
                    <p>No</p>
                    </div>
                <div className='row4'>
                    <h4>Expelled</h4>
                    <p>No</p>
                    </div>

                <div className='row5'>
                    <h4>Notes</h4>
                    <p>Enter any notes here...</p>
                    </div>

                <div className='button-container'>
                    <button className='placement-button'>Placement Examination</button>
                </div>

            </div>
           
        </>
    )
}



export default StudentInformationTab;