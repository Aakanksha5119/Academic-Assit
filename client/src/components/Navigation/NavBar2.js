import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/navbar.css';



const NavBar2 = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <a className="navbar-brand" href="#">Academic Assist</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="/Home"> <strong>Home</strong> </a>
    //       </li>
         
          
    //       <li className="nav-item">
    //         <a className="nav-link" href="/"> <strong>Sign Out</strong> </a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
    <div class="topnav" id="myTopnav">
    <a href="#" class="active">Academic Assist</a>
    <a href="#">About us</a>
    <a href="/">Sign Out</a>

    </div>
  )
}
export default NavBar2;