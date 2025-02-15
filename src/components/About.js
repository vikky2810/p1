import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/profile-picture.jpg"
          alt="Your Name"
          className="profile-picture"
        />
        <div className="about-text">
          <p>
            I'm a frontend developer with a passion for creating beautiful and
            functional web applications. With expertise in React and modern web
            technologies, I strive to deliver high-quality, user-friendly
            experiences.
          </p>
          <h3>My Skills</h3>
          <ul className="skills-list">
            <li>React / JavaScript</li>
            <li>HTML5 / CSS3</li>
            <li>Responsive Design</li>
            <li>UI/UX Design</li>
            <li>Version Control (Git)</li>
            <li>Web Performance Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
