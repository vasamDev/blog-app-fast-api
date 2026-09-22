// import { Navigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// function ProtectedRoute({ children }) {
//  const token = localStorage.getItem("token");

//  if (!token) {
//   return <Navigate to="/login" replace />;
//  }

//  try {
//   let decode = jwtDecode(token);
//   let currentTime = Date.now() / 1000;

//   if (decode.exp < currentTime) {
//    localStorage.removeItem("token");
//    return <Navigate to={"/login"} replace />;
//   }
//   return children;
//  } catch (error) {
//   localStorage.removeItem("token");
//   return <Navigate to="/login" />;
//  }
// }

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function ProtectedRoute({ children }) {
 let token = localStorage.getItem("token");
 if (!token) {
  return <Navigate to={"/login"} replace />;
 }

 try {
  let decode = jwtDecode(token);
  let currentTime = Date.now() / 1000;

  if (decode.exp < currentTime) {
   localStorage.removeItem("token");
   return <Navigate to={"/login"} replace />;
  }
  return children;
 } catch (error) {
  localStorage.removeItem("token");
  return <Navigate to={"/login"} replace />;
 }
}

export default ProtectedRoute;
