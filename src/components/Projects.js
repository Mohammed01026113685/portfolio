import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa"; // Import icons
import "./Projects.css";

// استيراد الصور
import projectOneImage from "./img/1.png";
import projectTwoImage from "./img/2.png";
import projectThreeImage from "./img/3.png";
import projectFourImage from "./img/4.png";
import projectFiveImage from "./img/5.png";
import projectSixImage from "./img/6.png";

const projects = [
  {
    id: 1,
    name: "pottery-hub",
    description: "This is a React project.",
    tech: "React",
    demoLink: "https://pottery-hub.vercel.app",
    image: projectOneImage // استخدام الصورة المستوردة
  },
  {
    id: 2,
    name: "stor-api",
    description: "This is a JavaScript project.",
    tech: "Html , css, JavaScript",
    demoLink: "https://stor-api.vercel.app/",
    image: projectTwoImage
  },
  {
    id: 3,
    name: "web page",
    description: "This is a web page project.",
    tech: "Html Css Js",
    demoLink: "https://mohammed01026113685.github.io/pone/",
    image: projectThreeImage
  },
  {
    id: 4,
    name: "Landing Page",
    description: "This is a vanilla JavaScript project.",
    tech: "javaScript",
    demoLink: "https://mohammed01026113685.github.io/task-dandar-amir/",
    image: projectFourImage
  },
  {
    id: 5,
    name: "Movie App",
    description: "This is a React  project.",
    tech: "React js",  
    demoLink: "https://movie-app-theta-roan-32.vercel.app/",
    image: projectFiveImage
  },
  {
    id: 6,
    name: "Ecommerce App",
    description: "This is a React  project . ",
    tech: "react js , firebase",
    demoLink: "https://ecommerce-app-8ef3c.web.app/",
    image: projectSixImage
  },
];

const Project = () => {
  return (
    <div className="section project" id="project">
      <h2>Projects</h2>
      <p>Here are some of my projects</p>
      <div className="project-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => window.open(project.demoLink, "_blank")}
          >
            <div className="card-content">
              {/* عرض الصورة */}
              <img src={project.image} alt={project.name} className="project-image" />
              <h3>
                <FaCode /> {project.name}
              </h3>
              <p>{project.tech}</p>
            </div>
            <div className="overlay">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Tech: {project.tech}</p>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
