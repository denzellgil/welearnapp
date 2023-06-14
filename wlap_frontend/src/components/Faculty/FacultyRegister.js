import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';



const baseUrl = 'http://127.0.0.1:8000/api/faculty/';
          


function FacultyRegister(){
    const [facultyData, setfacultyData]=useState({
      'firstname': ' ',
      'surname': ' ',
      'email': ' ',
      'password': ' ',
      'faculty_number': ' ',
      'status':' '
    });
    // Change element value
    const handleChange=(event)=>{
      setfacultyData({
          ...facultyData,
          [event.target.name]:event.target.value
        });
    }
    // end

    // Submit form
    const submitForm= async (event) => {

      event.preventDefault();

      const facultyFormData = new FormData();
      facultyFormData.append("firstname",facultyData.first_name)
      facultyFormData.append("surname",facultyData.surname)
      facultyFormData.append("email",facultyData.email)
      facultyFormData.append("password",facultyData.password)
      facultyFormData.append("faculty_number",facultyData.faculty_number)


      try {
        const response = await axios.post (baseUrl, facultyData);
        console.log(response.data);

      } catch (error) {
        if (error.code === 'EPIPE') {
          console.log ('Broken pipe error:', error.message)
        } else {
          console.error( 'Error:', error.message);

        }
      }
    };
    //
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Faculty Register</h5>
                        <div className="card-body">
                            <form>
                            <div className="mb-3">
                                 <label htmlFor="exampleInputEmail1" className="form-label">First name</label>
                                 <input onChange={handleChange} name="firstname" type="text" className="form-control"/>
                               </div>
                               <div className="mb-3">
                                 <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                                 <input onChange={handleChange} name="surname" type="text" className="form-control"/>
                               </div>
                               <div className="mb-3">
                                 <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                                 <input onChange={handleChange} name="email" type="email" className="form-control"/>
                               </div>
                               <div className="mb-3">
                                 <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                 <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                               </div>
                               <div className="mb-3">
                                 <label htmlFor="exampleInputEmail1" className="form-label">Faculty Number</label>
                                 <input onChange={handleChange} name="faculty_number" type="number" className="form-control"/>
                               </div>
                               <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 

}

export default FacultyRegister;