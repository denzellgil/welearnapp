import { useEffect } from "react";

function Footer() {
    return (
    <footer className = "text-muted py-5 border-top mt-5">
        <div className = "container">
          <p className = "float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p className = "mb-1">Album example is a Bootstrap, but please download and customize it yourself!</p>
          <p className = "mb-1">New to Bootstrap? <a href = "https://getbootstrap.com/">Visit the homepage</a> or read our 
          <a href = "https://getbootstrap.com/docs/5.1/getting-started/introduction/"> getting started</a>.</p>
        </div>
    </footer>
       
      );
    }
    
    export default Footer;