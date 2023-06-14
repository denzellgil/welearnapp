import { Link } from "react-router-dom";
import FacultySidebar from "./FacultySidebar";
import { useEffect } from "react";

function StudentsEnrolled(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <FacultySidebar/>
                </aside>
                <section className="col-md-9">
               
                <div className="card">
                <h5 className="card-header">Students Enrolled </h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Course Code and Title</th>
                                <th>Student Name</th>
                                <th>Program</th>
                                <th>Year Level</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <td>CPE 025 - Software Design</td>
                                <td>Ron Denzell D. Gil</td>
                                <td>CPE</td>
                                <td>4th</td>
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

export default StudentsEnrolled;