function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description:
        "Modern, responsive and high-performance websites built for businesses, personal brands and startups.",
      tags: ["React", "JavaScript", "Tailwind"],
    },

    {
      number: "02",
      title: "Full-Stack Development",
      description:
        "Complete web applications with frontend, backend, APIs, databases and authentication.",
      tags: ["React", "Node.js", "MongoDB"],
    },

    {
      number: "03",
      title: "Business Websites",
      description:
        "Professional websites designed to establish your brand online and convert visitors into customers.",
      tags: ["Responsive", "Modern UI", "SEO"],
    },

    {
      number: "04",
      title: "E-Commerce",
      description:
        "Modern online stores with product management, responsive interfaces and scalable architecture.",
      tags: ["React", "Node.js", "MongoDB"],
    },

    {
      number: "05",
      title: "Landing Pages",
      description:
        "High-converting landing pages designed to present your product, service or business clearly.",
      tags: ["HTML", "CSS", "JavaScript"],
    },

    {
      number: "06",
      title: "Web App Development",
      description:
        "Custom web applications built around your specific business requirements and workflow.",
      tags: ["React", "API", "Backend"],
    },
  ];

  return (
    <section className="services" id="services">

      <div className="container">

        <div className="section-heading">

          <p>WHAT I DO</p>

          <h2>
            Services I Can Help You With
          </h2>

          <span className="section-description">
            From simple websites to complete full-stack applications,
            I build digital solutions focused on real-world needs.
          </span>

        </div>


        <div className="services-grid">

          {services.map((service) => (

            <div className="service-card" key={service.number}>

              <div className="service-top">

                <span className="service-number">
                  {service.number}
                </span>

                <span className="service-arrow">
                  ↗
                </span>

              </div>


              <h3>
                {service.title}
              </h3>


              <p>
                {service.description}
              </p>


              <div className="service-tags">

                {service.tags.map((tag) => (

                  <span key={tag}>
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;