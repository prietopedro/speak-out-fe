import React, {useEffect, useState} from 'react'
import StudentCard from '../../../components/students/studentCard/StudentCard'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStudentById } from '../../../actions';
import StudentHeader from '../../../components/students/studentCard/StudentHeader'

const Main = (props) => {
   const [mainView, setMainView] = useState('main')
    const currentUser= 20;
    useEffect(() => {
        props.getStudentById(currentUser)
    }, [])

    return (
        <div>
            {mainView === 'main' 
            ? 
            <>
            <StudentHeader studentById={props.studentById} />
            <button onClick={() => setMainView('main-student')}>View Student</button>
            </>
            :
            mainView === 'main-student'
            ?
            <StudentCard mainView={mainView} setMainView={setMainView}/> 
            : null
    }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.studentByIdReducer.isLoading,
        studentById: state.studentByIdReducer.studentById,
        isEditing: state.studentByIdReducer.isEditting,
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        { getStudentById}
    )(Main)
)