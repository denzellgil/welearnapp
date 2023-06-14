import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function EnrolledCourses(){
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
               
                <div className="card">
                <h5 className="card-header">Enrolled Courses</h5>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Course Code and Title</th>
                                <th>Faculty assigned</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <td>CPE 025 - Software Design</td>
                                <td>Jonathan V. Taylar</td>
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

export default EnrolledCourses;