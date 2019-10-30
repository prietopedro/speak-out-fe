import React from 'react';
import "./sidebar.css";

export default function SideBar() {
    return (
        <div className="side-bar">
            <a className="sidebar-link">Students</a>
            <a className="sidebar-link">Calendar</a>
            <a className="sidebar-link">Schedule</a>
            <a className="sidebar-link">Payments</a>
            <a className="sidebar-link">Tables</a>
            <a className="sidebar-link">Courses</a>
        </div>
    )
}
