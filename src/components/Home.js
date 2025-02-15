import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate Frontend Developer creating amazing web experiences
        </p>
        <Link to="/projects" className="cta-button">
          View My Work
        </Link>
      </div>
    </section>
  );
}

export default Home;
