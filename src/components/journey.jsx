
function Journey() {
  const journey = [
    {
      year: "2024",
      title: "Started My Development Journey",
      description:
        "Started learning programming and exploring the world of software development as a student.",
    },

    {
      year: "2025",
      title: "Focused on Web Development",
      description:
        "Learned HTML, CSS, JavaScript and modern frontend development while building small projects.",
    },

    {
      year: "2026",
      title: "Full-Stack Development",
      description:
        "Started building complete applications using React, Node.js, Express and MongoDB.",
    },

    {
      year: "NOW",
      title: "Building Real-World Projects",
      description:
        "Working on practical projects, improving my development skills and creating a professional portfolio.",
    },

    {
      year: "NEXT",
      title: "Freelancing & Building Products",
      description:
        "My next goal is to work with clients, build digital products and grow as a professional developer.",
    },
  ];

  return (
    <section className="journey" id="journey">

      <div className="container">

        <div className="section-heading">

          <p>MY JOURNEY</p>

          <h2>
            From Student to Developer
          </h2>

          <span className="section-description">
            A continuous journey of learning, building and improving.
          </span>

        </div>


        <div className="journey-list">

          {journey.map((item, index) => (

            <div
              className="journey-item"
              key={item.year}
            >

              <div className="journey-year">
                {item.year}
              </div>


              <div className="journey-line">

                <span className="journey-dot"></span>

              </div>


              <div className="journey-content">

                <span className="journey-number">
                  0{index + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Journey;