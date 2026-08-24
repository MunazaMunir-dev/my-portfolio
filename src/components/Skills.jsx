function Skills() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
  ];

  const backend = [
    "Node.js",
    "Express.js",
    "MongoDB",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I Work With</h2>
          <span className="section-description">
            Tools and technologies I use to build modern web applications.
          </span>
        </div>

        <div className="skills-categories">

          {/* Frontend */}

          <div className="skills-category">

            <div className="category-title">
              <span>01</span>
              <h3>Frontend Development</h3>
            </div>

            <div className="skills-grid">

              {frontend.map((skill) => (
                <div className="skill-card" key={skill}>

                  <div className="skill-icon">
                    {skill.charAt(0)}
                  </div>

                  <h4>{skill}</h4>

                </div>
              ))}

            </div>

          </div>


          {/* Backend */}

          <div className="skills-category">

            <div className="category-title">
              <span>02</span>
              <h3>Backend Development</h3>
            </div>

            <div className="skills-grid">

              {backend.map((skill) => (
                <div className="skill-card" key={skill}>

                  <div className="skill-icon">
                    {skill.charAt(0)}
                  </div>

                  <h4>{skill}</h4>

                </div>
              ))}

            </div>

          </div>


          {/* Tools */}

          <div className="skills-category">

            <div className="category-title">
              <span>03</span>
              <h3>Tools & Workflow</h3>
            </div>

            <div className="skills-grid">

              {tools.map((skill) => (
                <div className="skill-card" key={skill}>

                  <div className="skill-icon">
                    {skill.charAt(0)}
                  </div>

                  <h4>{skill}</h4>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;