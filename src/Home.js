import React from "react";
import { Link } from "react-router-dom";

export const HomeLink = () => (
  <Link to="/" className="fixedHome">
    Home
  </Link>
);

const Home = () => {
  return (
    <div>
      Hey those are some tasks by me
      <br />
      {/* Node tree is used to create a tree like hierarchy structure for employees */}
      <Link to="/Hierarchy" className="brand_Name color-crimson">
        Task 1: Node Tree
      </Link>
      <br />
      {/* Admin UI is a responsive UI for the admin panel */}
      <Link to="/AdminUI" className="brand_Name color-crimson">
        Task 2: Admin UI
      </Link>
      <br />
      {/* Admin UI  Class is same as Admin UI but with redux and class components */}
<<<<<<< Updated upstream
      <Link to="/AdminUI" className="brand_Name color-crimson">
=======
      <Link to="/AdminUIClass" className="brand_Name color-crimson">
>>>>>>> Stashed changes
        Task 2: Admin UI Class
      </Link>
    </div>
  );
};

export default Home;
