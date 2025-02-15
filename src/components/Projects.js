import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    image: "/project1.jpg",
    demoLink: "https://demo1.example.com",
    githubLink: "https://github.com/yourusername/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    image: "/project2.jpg",
    demoLink: "https://demo2.example.com",
    githubLink: "https://github.com/yourusername/project2",
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3",
    image: "/project3.jpg",
    demoLink: "https://demo3.example.com",
    githubLink: "https://github.com/yourusername/project3",
  },
];

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
