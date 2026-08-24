function Projects() {
  const projects = [
    {
  number: "01",
  title: "Complaint Management System",
  description:
    "A full-stack platform where users can submit complaints and administrators can manage, track and analyze them through a dashboard.",
  image: "/projects/com.png",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  live: "https://complaint-management-system-r6ft.vercel.app/",
  github: "https://github.com/MunazaMunir-dev/complaint-management-system",
},

    {
  number: "02",
  title: "E-Commerce Website",
  description:
    "A modern full-stack e-commerce platform with product browsing, categories, authentication, cart, wishlist, checkout, orders and an admin dashboard.",
     image: "/projects/ECO.png",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  live: "https://ecommerce-website-wjdp.vercel.app",
  github: "https://github.com/MunazaMunir-dev/Ecommerce-website",
},
    

    {
      number: "04",
      title: "Real Estate Landing Page",
      description:
        "A modern and responsive real estate landing page designed with a clean UI, smooth layout and professional user experience.",
      image: "/projects/real-estate.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://real-estate-landing-page-self.vercel.app/",
      github: "https://github.com/MunazaMunir-dev/real-estate-landing-page",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Projects I've Built
          </h2>

          <span className="section-description">
            Real-world projects where I turn ideas into functional
            digital products.
          </span>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-number">
                  {project.number}
                </span>

              </div>

              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="tech-stack">

                  {project.technologies.map((technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub →
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

        <div className="projects-more">

          <a href="#contact" className="secondary-btn">
            Have a project in mind? Let's talk →
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;