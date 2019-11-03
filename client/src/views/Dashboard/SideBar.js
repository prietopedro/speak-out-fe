import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

export default function SideBar() {

  const [activeTab, setActiveTab] = useState("students")

  return (
    <div className="side-bar">
      <div className="sidebar-links">


        {/* Main View will display the current users information, if they are parents, it will display their children students */}
      <div className={`sidebar-link ${activeTab === "main" && "active-tab"}`}  onClick={()  => setActiveTab("main")}>
         Main
        </div>


        {/* Students view will only be necessary for Staff */}
        <div className={`sidebar-link ${activeTab === "students" && "active-tab"}`}  onClick={()  => setActiveTab("students")}>
          Students
        </div>


        <div className={`sidebar-link ${activeTab === "courses" && "active-tab"}`} onClick={()  => setActiveTab("courses")}>Courses</div>

        {/* Staff view will only be necessary for Staff */}

        <div className={`sidebar-link ${activeTab === "staff" && "active-tab"}`} onClick={()  => setActiveTab("staff")}>Staff</div>
        <div className={`sidebar-link ${activeTab === "billing" && "active-tab"}`} onClick={()  => setActiveTab("billing")}>Billing</div>
        
      </div>
    </div>
  );
}
