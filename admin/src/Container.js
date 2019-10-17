import React from 'react';
import { Route, Link } from 'react-router-dom';

import HomePage from './components/HomePage.js';
import StudentTable from './components/StudentTable.js';
import StudentCard from './components/StudentCard.js';

const Container = () => {

    return (
        <>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/studenttable' component={StudentTable}/>
            <Route exact path='/studentcard' component={StudentCard}/>
        </>
    )
}

export default Container;