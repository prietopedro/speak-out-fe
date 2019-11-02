import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { getPlecementTestById } from '../../actions';
import { withRouter, Link } from 'react-router-dom';

import './placementTest.scss'

const PlacementTest = props => {
    console.log('props', props)
    useEffect(() => {
        props.getPlecementTestById(props.match.params.id)
    }, [])

    const test = props.placementTest
    
    
    return (
        <>
        <div className="placement-test">
            <div className="row1">
                <h5>Test Date</h5>
                <h4>{test.test_date || "-"}</h4>
            </div>
            <div className="row1">
                <h5>Test</h5>
                <h4>{test.test || "-"}</h4>
            </div>
            <div className="row1">
                <h5>Overall Level</h5>
                <h4>{test.overall_level || "-"}</h4>
            </div>
            <div className="row2">
                <h5>Speak Fluency</h5>
                <h4>{test.speaking_fluency || "-"}</h4>
            </div>
            <div className="row2">
                <h5>Spoken Accuracy</h5>
                <h4>{test.spoken_accuracy || "-"}</h4>
            </div>
            <div className="row2">
                <h5>Listening Comprehension</h5>
                <h4>{test.listening_comprehension || "-"}</h4>
            </div>
            <div className="row3">
                <h5>Oral Level</h5>
                <h4>{test.oral_level || "-"}</h4>
            </div>
            <div className="row3">
                <h5>MC Correct</h5>
                <h4>{test.mc_correct || "-"}</h4>
            </div>
            <div className="row3">
                <h5>MC Marked</h5>
                <h4>{test.mc_marked || "-"}</h4>
            </div>
            <div className="row4">
                <h5>MC Level</h5>
                <h4>{test.mc_level || "-"}</h4>
            </div>
            <div className="row4">
                <h5>Writing Level</h5>
                <h4>{test.writing_level || "-"}</h4>
            </div>
            <div className="row5">
                <h5>Notes</h5>
                <h4>{test.notes || "-"}</h4>
            </div>
        </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.placementTestReducer.isLoading,
        placementTest: state.placementTestReducer.placementTest,
        error: state.placementTestReducer.error
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getPlecementTestById }
    )(PlacementTest)
)
