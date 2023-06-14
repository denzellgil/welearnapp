import { Link } from "react-router-dom";
import FacultySidebar from "./FacultySidebar";
import { useEffect } from "react";

function FacultyDashboard(){
    useEffect(() =>{
        document.title="Faculty Dashboard"
      });
    return (
        <div className="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <FacultySidebar/>
                </aside>
               <section className="col-md-9">
               </section>
            </div>
        </div>
    ) 

}

export default FacultyDashboard;