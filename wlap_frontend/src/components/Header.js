import { Link } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">We Learn</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
         aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/all-courses">Courses</Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Faculty
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/faculty-login">Login</Link></li>
              <li><Link className="dropdown-item" to="/faculty-register">Register</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/faculty-dashboard">Dashboard</Link></li>
              <li><Link className="dropdown-item" to="/faculty-logout">Logout</Link></li>
            </ul>
          </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              User
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/user-login">Login</Link></li>
              <li><Link className="dropdown-item" to="/user-register">Register</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/user-dashboard">Dashboard</Link></li>
              <li><a className="dropdown-item" to="/user-logout">Logout</a></li>
            </ul>
          </li>
          </div>
        </div>
      </div>
    </nav>
     
    );
  }
  
  export default Header;