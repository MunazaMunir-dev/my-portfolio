function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              Munaza<span>.</span>
            </a>

            <p>
              Student Developer & Full-Stack Web Developer
            </p>

            <span>
              Building. Learning. Growing.
            </span>

          </div>


          <div className="footer-column">

            <h4>Navigation</h4>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>

          </div>


          <div className="footer-column">

            <h4>Connect</h4>

            <a
              href="https://github.com/MunazaMunir-dev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/munaza-munir-84099837a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://www.instagram.com/munaza_munir1?igsh=MXZqdzJ3dGo5MGxsOA=="
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.youtube.com/@MunazaMunir1"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Munaza Munir. All rights reserved.
          </p>

          <a href="#home">
            Back to top ↑
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;