import Header from './Header';
import Home from './Home';
import CourseDetails from "./CourseDetails";
import Login from "./User/Login";
import Register from "./User/Register";
import Dashboard from "./User/Dashboard";
import EnrolledCourses from "./User/EnrolledCourses";
import ProfileSettings from './User/ProfileSettings';
import ChangePassword from './User/ChangePassword';


//Faculty
import FacultyLogin from "./Faculty/FacultyLogin";
import FacultyRegister from "./Faculty/FacultyRegister";
import FacultyDashboard from "./Faculty/FacultyDashboard";
import MyCourses from './Faculty/MyCourses';
import AddCourse from './Faculty/AddCourse';
import StudentsEnrolled from './Faculty/StudentsEnrolled';
import FacultyProfileSettings from './Faculty/FacultyProfileSettings';
import FacultyChangePassword from './Faculty/FacultyChangePassword';

// List Pages
import AllCourses from './AllCourses';

import About from './About';
import Footer from './Footer';

import {Routes as Switch, Route} from 'react-router-dom';





function Main(){
    return (
        <div className="App">  
            <Header/>
            <Switch>
              <Route path = "/" element={<Home/>} />
              <Route path = "/about" element={<About/>} />
              <Route path = "/detail/:course_id" element={<CourseDetails/>} />
              <Route path = "/user-login" element={<Login/>} />
              <Route path = "/user-register" element={<Register/>} />
              <Route path = "/user-dashboard" element={<Dashboard/>} />
              <Route path = "/enrolled-courses" element={<EnrolledCourses/>} />
              <Route path = "/profile-settings" element={<ProfileSettings/>} />
              <Route path = "/change-password" element={<ChangePassword/>} />
              <Route path = "/faculty-login" element={<FacultyLogin/>} />
              <Route path = "/faculty-register" element={<FacultyRegister/>} />
              <Route path = "/faculty-dashboard" element={<FacultyDashboard/>} />
              <Route path = "/faculty-courses" element={<MyCourses/>} />
              <Route path = "/add-course" element={<AddCourse/>} />
              <Route path = "/students-enrolled" element={<StudentsEnrolled/>} />
              <Route path = "/faculty-profile-settings" element={<FacultyProfileSettings/>} />
              <Route path = "/faculty-change-password" element={<FacultyChangePassword/>} />
              <Route path = "/all-courses" element={<AllCourses/>} />
            </Switch>
            <Footer/>
        </div>
    );
}

export default Main; 