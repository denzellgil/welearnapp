import {Link} from 'react-router-dom';
import AllCourses from './AllCourses';
import { useEffect } from "react";

function Home() {
  useEffect(() =>{
      document.title="We Learn | Home Page"
    });
  return (
    <div className = "container mt-4">
       {/*Start of Courses Available */}
        <h3 className="pb-1 mb-4">Courses Available<Link to="/all-courses"
         className="float-end">See all</Link></h3>
        <div className = "row">
            <div className = "col-md-3">
                <div className="card">
                  <Link to ="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title"><Link to ="/detail/1">"Course title" </Link></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Course title" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Course title" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Course title" </a></h5>
                </div>      
            </div>  
        </div>
    </div>        
    {/* End of Courses Available */}
    {/*Start of Elective Courses  */}
           <h3 className="pb-1 mb-4 mt-5">Elective Courses</h3>
        <div className = "row mb-4">
            <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title float-center"><a href ="#">"System Administration" </a></h5>
                </div>
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Data Science" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Intelligent Systems" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Railway Engineering" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Technopreneurship" </a></h5>
                </div>      
            </div>  
        </div>
        
    </div>        
    {/* End of Elective Courses */}
    </div>
  );
}

export default Home;