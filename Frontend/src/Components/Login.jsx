import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
 let navigate = useNavigate();
 let [creden, setCreden] = useState({
  email: "",
  password: "",
 });
 let handleLoginFun = (e) => {
  e.preventDefault();
  axios.post("http://127.0.0.1:8000/auth/login", creden).then((res) => {
   console.log(res);
   localStorage.setItem("token", res && res.data && res.data.token);
   if (res) {
    navigate("/");
   }
  });
 };

 let handleChange = ({ target }) => {
  let { name, value } = target;

  setCreden((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 return (
  <section className="login-page">
   <div className="shape shape-left"></div>
   <div className="shape shape-right"></div>

   <div className="login-card">
    <div className="logo-circle">
     <span>◢</span>
    </div>

    <h1>Welcome back</h1>

    <p className="subtitle">
     Sign in to continue exploring insights for modern people teams.
    </p>

    <form onSubmit={handleLoginFun}>
     <div className="input-group">
      <label>Email address</label>
      <input
       name="email"
       value={creden.email}
       type="email"
       placeholder="Enter your email"
       required
       onChange={handleChange}
      />
     </div>

     <div className="input-group">
      <label>Password</label>
      <input
       name="password"
       value={creden.password}
       type="password"
       placeholder="Enter your password"
       onChange={handleChange}
       required
      />
     </div>

     <div className="options">
      <label className="remember">
       <input type="checkbox" />
       <span>Remember me</span>
      </label>

      <a href="#">Forgot password?</a>
     </div>

     <button type="submit" className="login-btn">
      Sign in
     </button>
    </form>

    <div className="divider">
     <span>or continue with</span>
    </div>

    <p className="signup-text">
     Don't have an account?
     <NavLink to={"/register"}> Create account</NavLink>
    </p>
   </div>
  </section>
 );
}

export default Login;
