import {Link} from "react-router-dom";
import { useEffect } from "react";
function FacultySidebar(){
    return (
    <div className="card">
        <div className="list-group list-group-flush">
            <Link to="/faculty-dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
            <Link to="/faculty-courses" className="list-group-item list-group-item-action">My Courses</Link>
            <Link to="/add-course" className="list-group-item list-group-item-action">Add Course</Link>
            <Link to="/students-enrolled" className="list-group-item list-group-item-action">Students Enrolled</Link>
            <Link to="/faculty-profile-settings" className="list-group-item list-group-item-action">Profile settings</Link>
            <Link to="/faculty-change-password" className="list-group-item list-group-item-action">Change Password</Link>
            <Link to="/faculty-login" className="list-group-item list-group-item-action">Logout</Link>
        </div>
    </div>

    ) 
}

export default FacultySidebar;
