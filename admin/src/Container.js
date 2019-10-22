import React from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from './utilities/PrivateRoute'

import HomePage from './components/HomePage.js';
import Sidebar from './components/sidebar.js';
import StudentCard from './components/StudentCard.js';
import LoginPage from './components/LoginPage.js'
import StudentTable from './components/StudentTable.js'



const Container = () => {

    return (
        <>
            <Route exact path='/' component={HomePage}/>
            <Route path='/login' component={LoginPage} />
            <Route path='/studenttable' component={StudentTable}/>
            <Route path='/studentcard/:student_id' component={StudentCard}/>
        </>
    )
}

export default Container;