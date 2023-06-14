import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CourseDetails(){
    let {course_id} = useParams;
    return (
        <div className="container mt-3">
            <div className = "row">
                <div className = "col-4"> 
                    <img src="/logo512.png" className="img-thumbnail" alt="..."/>
                </div>
                <div className = "col-8"> 
                    <h3>Software Design</h3>
                    <p>Software design focuses on the process that allows the user to define 
                        software methods and parameters. Design works with functions and the 
                        overall structure of the code. It allows you to prepare a plan for a software application 
                        while meeting any functional requirements and avoiding the constraints of the program</p>
                    <p className="fw-bold">Course Code: CPE 025</p>
                    <p className="fw-bold">Course Units: 4</p>
                    <p className="fw-bold">Course Duration: 18 weeks</p>

                </div>
            </div> 
        </div>
            
    );
}

export default CourseDetails;