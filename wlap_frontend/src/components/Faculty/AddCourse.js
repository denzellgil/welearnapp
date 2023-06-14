import { Link } from "react-router-dom";
import FacultySidebar from "./FacultySidebar";
import { useEffect } from "react";


function AddCourse(){
    useEffect(() =>{
        document.title="Add Course"
      });
    return (
        <div className="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <FacultySidebar/>
                </aside>
               <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Course Code</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Course Title</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" />
                                </div>
                            </div>
                            <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Faculty assigned</label>
                                 <div class="col-sm-10">
                                 <input type="text" class="form-control" id="staticEmail"/>
                                </div>
                            </div>
                            <hr/>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
               </section>
            </div>
        </div>
    ) 

}

export default AddCourse;