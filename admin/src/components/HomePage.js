import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { getStudent } from '../actions';


const HomePage = props => {

    return (
        <>
            <header className="App-header">
                <Link to='/studenttable'>Student</Link>
                <h1>Speak Out is maintaining the website</h1>
                <p>Coming Soon...</p>
            </header>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        student: state.student
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudent }
    )(HomePage)
)