import React from "react";
import "../app/styles/skills.css"; // Import the custom CSS file

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <div className="skills-grid">
        {/* First Column: Heading and Paragraph */}
        <div data-aos="zoom-in-up" className="skills-left">
          <h2 className="skills-heading">Technologies I work with</h2>
          <p className="skills-text">
            I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript.
            My experience extends to using frameworks like React and Next.js to create dynamic and
            user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design.
            With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        {/* Second Column: Skills */}
        <div className="skills-right">
          <div className="skills-icons-grid">
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className="skills-space">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
