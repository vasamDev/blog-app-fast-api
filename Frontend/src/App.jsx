import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Articles from "./Components/articles";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Router, Routes } from "react-router-dom";
import Terms from "./Components/Terms";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
 return (
  <main>
   <Header />

   <Routes>
    <Route
     path="/"
     element={
      <>
       <Hero />
       <Articles />
      </>
     }
    />
    <Route path="/login" element={<Login />} exact />
    <Route path="/register" element={<SignUp />} exact />

    <Route
     path="/terms"
     element={
      <ProtectedRoute>
       <Terms />
      </ProtectedRoute>
     }
     exact
    />
    <Route path="*" element="Not Found" />
   </Routes>
  </main>
 );
}

export default App;
