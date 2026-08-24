function Hero() {
  return (
    <section className="hero" id="home">

      <div className="container hero-content">

        <div className="hero-text">

          <div className="hero-badge">
            <span className="status-dot"></span>
            Available for Freelance Projects
          </div>

          <p className="hero-small">
            Hello, I'm
          </p>

          <h1>
            Munaza Munir
          </h1>

          <h2>
            Student Developer &{" "}
            <span>Full-Stack Web Developer</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and scalable web applications
            that solve real-world problems. I'm continuously learning,
            building and turning ideas into digital products.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Let's Work Together
              <span>→</span>
            </a>

          </div>

          <div className="social-links">

            <a href="https://github.com/MunazaMunir-dev" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/munaza-munir-84099837a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/munaza_munir1?igsh=MXZqdzJ3dGo5MGxsOA==" target="_blank" rel="noreferrer">
              Instagram
            </a>

          </div>

          <div className="hero-tech">

            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>JavaScript</span>

          </div>

        </div>


        <div className="hero-image">

          <div className="hero-image-glow"></div>

          <div className="profile-card">

            <div className="profile-ring">

              <img
                src="/profile.jpg"
                alt="Munaza Munir"
              />

            </div>

            <div className="profile-floating-card">
              <strong>Full-Stack</strong>
              <span>Developer</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;