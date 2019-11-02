import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="sidebar-links">
        <Link to="/students" className="sidebar-link">
          Students
        </Link>
        <Link className="sidebar-link">Courses</Link>
        <Link className="sidebar-link">Staff</Link>
        <Link className="sidebar-link">Billing</Link>
        
      </div>
    </div>
  );
}
