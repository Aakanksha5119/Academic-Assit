import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../CSS/navbar.css';

const NavBar = () => {
  return (

    <div class="topnav" id="myTopnav">
      <a href="/" >Academic Assist</a>
      <a href="/Login">Login</a>
      <a href="/Register" >Register</a>

      {/* class="active" */}
    </div>
  )
}
export default NavBar;