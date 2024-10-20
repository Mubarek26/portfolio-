import React, { useState } from "react";

export default function AboutMe() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <a className="anchor" id="About"></a>
        <img src="./mypic.png" alt="About Me" />
      </div>

      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>

          <p className="hero--section-description">
            Hi, I'm Mubarek, a passionate front-end and back-end developer with
            a strong focus on creating dynamic and responsive web applications.
            I have experience in building both the user-facing side of websites
            as well as the server-side logic, ensuring seamless functionality
            across the entire application stack.
          </p>

          {isExpanded && (
            <p className="hero--section-description">
              My expertise spans technologies such as JavaScript, React,
              Laravel, CSS, and HTML. I thrive on tackling complex challenges
              and delivering clean, efficient code. Whether it's designing a
              smooth, user-friendly interface or managing data flow and server
              operations, I am committed to providing high-quality solutions for
              any project.
            </p>
          )}

          <button
            onClick={toggleParagraph}
            style={{
              backgroundColor: isExpanded ? "#ff0000" : " rgb(249, 105, 14)",
              color: "#fff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isExpanded ? "Collapse text" : "Show more"}
          </button>
        </div>
      </div>
    </section>
  );
}
