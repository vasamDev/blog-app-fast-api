import React, { useEffect, useState } from "react";
import api from "../api/axiosInstance";

function Articles() {
 let [blogs, setBlogs] = useState([]);

 useEffect(() => {
  api.get("/blogs").then((res) => {
   console.log(res.data);
  });
 }, []);

 return (
  <section className="articles">
   {/* Categories */}
   <div className="categories">
    <button className="active">All articles</button>
    <button>Product</button>
    <button>Role spotlights</button>
    <button>Company</button>
    <button>Artificial Intelligence (AI)</button>
    <button>Engineering</button>
   </div>

   {/* Cards */}
   <div className="cards">
    {/* Card 1 */}
    <article className="card featured-card">
     <img
      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
      alt="HR office"
     />

     <div className="card-content">
      <span className="tag yellow">HR BASICS</span>

      <h2>How to Set Up HR Processes for a Growing Team</h2>

      <p className="author">
       Taylor Kim <span>•</span> February 10, 2026
      </p>
     </div>
    </article>

    {/* Card 2 */}
    <article className="card">
     <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
      alt="Workspace"
     />

     <div className="card-content">
      <span className="tag purple">EMPLOYEE</span>

      <h2>Strategies to Improve Team Morale</h2>

      <p className="author">
       Jordan Lee <span>•</span> March 15, 2026
      </p>
     </div>
    </article>

    {/* Card 3 */}
    <article className="card">
     <img
      src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1000&q=80"
      alt="Abstract background"
     />

     <div className="card-content">
      <span className="tag blue">PERFORMANCE</span>

      <h2>Implementing Effective Review Systems</h2>

      <p className="author">
       Alex Chen <span>•</span> April 22, 2026
      </p>
     </div>
    </article>

    {/* Card 4 */}
    <article className="card">
     <img
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
      alt="Office"
     />

     <div className="card-content">
      <span className="tag yellow">WORKPLACE</span>

      <h2>Building a Better Workplace Culture</h2>

      <p className="author">
       Sarah Wilson <span>•</span> May 10, 2026
      </p>
     </div>
    </article>

    {/* Card 5 */}
    <article className="card">
     <img
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
      alt="Team meeting"
     />

     <div className="card-content">
      <span className="tag purple">TEAM</span>

      <h2>How Teams Can Work Better Together</h2>

      <p className="author">
       Michael Brown <span>•</span> June 5, 2026
      </p>
     </div>
    </article>
   </div>
  </section>
 );
}

export default Articles;
