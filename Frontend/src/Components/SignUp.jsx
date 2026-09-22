import React from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
 return (
  <section className="signup-page">
   <div className="shape shape-left"></div>
   <div className="shape shape-right"></div>

   <div className="signup-card">
    <div className="logo-circle">
     <span>◢</span>
    </div>

    <h1>Create your account</h1>

    <p className="subtitle">
     Join us and start exploring insights for modern people teams.
    </p>

    <form>
     <div className="input-group">
      <label>Name</label>
      <input type="text" placeholder="Enter Your name" required />
     </div>

     <div className="input-group">
      <label>Email address</label>

      <input type="email" placeholder="Enter your email" required />
     </div>

     <div className="input-group">
      <label>Password</label>

      <input type="password" placeholder="Create a password" required />
     </div>

     <div className="input-group">
      <label>Profile Img</label>
      <input type="text" placeholder="Enter Profile Img" required />
     </div>

     <div className="input-group">
      <label>Bio</label>
      <input type="text" placeholder="Enter Your Bio" required />
     </div>

     <label className="terms">
      <input type="checkbox" required />

      <span>
       I agree to the
       <a href="#">Terms of Service</a>
       and
       <a href="#">Privacy Policy</a>
      </span>
     </label>

     <button type="submit" className="signup-btn">
      Create account
     </button>
    </form>

    <div className="divider">
     <span>or sign up with</span>
    </div>

    <p className="login-text">
     Already have an account?
     <NavLink to={"/login"}> Sign in</NavLink>
    </p>
   </div>
  </section>
 );
}

export default SignUp;
