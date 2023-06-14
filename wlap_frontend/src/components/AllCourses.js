import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
function AllCourses (){
        return (
            <div className="container mt-3">
             {/*Start of Courses Available */}
        <h3 className="pb-1 mb-4">All Courses</h3>
        <div className = "row">
            <div className = "col-md-3 mb-4">
                <div className="card">
                  <Link to ="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title"><Link to ="/detail/1">"Course title" </Link></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Course title" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Course title" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <a href="#"><img src="logo512.png" className="card-img-top" alt="..."/></a>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="#">"Course title" </a></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <Link to ="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title"><Link to ="/detail/1">"Course title" </Link></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <Link to ="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title"><Link to ="/detail/1">"Course title" </Link></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <Link to ="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title"><Link to ="/detail/1">"Course title" </Link></h5>
                </div>      
            </div>  
        </div>
        <div className = "col-md-3 mb-4">
                <div className="card">
                  <Link to ="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                  <div className="card-body">
                    <h5 className="card-title"><Link to ="/detail/1">"Course title" </Link></h5>
                </div>      
            </div>  
        </div>
    </div> 
          
    {/* End of Courses Available */}
    </div> 
    );
}

export default AllCourses;