import { Link } from "react-router-dom";
import FacultySidebar from "./FacultySidebar"
import { useEffect } from "react";

function MyCourses(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <FacultySidebar/>
                </aside>
                <section className="col-md-9">
               
                <div className="card">
                <h5 className="card-header">My Courses</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Course Code and Description</th>
                                <th>Total Students Enrolled</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <td>CPE 025 - Software Design</td>
                                <td>45</td>
                                <td>
                                    <button className="btn btn-danger btm-sm active">Delete</button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div> 
    </div>
    )
}
export default MyCourses;