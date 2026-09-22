import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
 return (
  <header>
   <div className="container">
    <nav>
     <figure>
      <a href="">
       <h1>Blog App</h1>
      </a>
     </figure>

     <ul>
      <li>
       <a href="">About us</a>
      </li>
      <li>
       <a href="">Policy</a>
      </li>
      <li>
       <a href="">terms & Conditions</a>
      </li>
     </ul>

     <div className="button-sec">
      <button>
       <NavLink to={"/login"}>Login</NavLink>
      </button>
      <button>
       <NavLink to={"/register"}>SignUp</NavLink>
      </button>
     </div>
    </nav>
   </div>
  </header>
 );
}

export default Header;
