import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

export default function SideBar() {
    return (
        <div className="side-bar">
            <Link to='/students' className="sidebar-link">Students</Link>
            <Link className="sidebar-link">Calendar</Link>
            <Link className="sidebar-link">Schedule</Link>
            <Link className="sidebar-link">Payments</Link>
            <Link className="sidebar-link">Tables</Link>
            <Link className="sidebar-link">Courses</Link>
        </div>
    )
}
