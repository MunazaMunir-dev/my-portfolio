import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "8769da0a-2ed6-4af6-b1ae-80430344582e"
    );

    formData.append(
      "subject",
      "New Portfolio Client Inquiry"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus(
          "Message sent successfully! I'll get back to you soon."
        );
        form.reset();
      } else {
        setStatus(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error(error);
      setStatus(
        "Unable to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Let's Build Something Together
          </h2>

          <span className="section-description">
            Have an idea, project or opportunity?
            Send me a message and let's talk about it.
          </span>
        </div>

        <div className="contact-wrapper">

          {/* LEFT SIDE */}

          <div className="contact-info">

            <span className="contact-label">
              CONTACT ME
            </span>

            <h3>
              Have a project in mind?
            </h3>

            <p>
              I'm open to freelance projects,
              collaborations and interesting
              development opportunities.
            </p>

            <div className="contact-details">

              <div className="contact-detail">
                <span className="contact-icon">
                  @
                </span>

                <div>
                  <small>Email</small>

                  <p>
                    munazaengineering@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon">
                  ↗
                </span>

                <div>
                  <small>Location</small>

                  <p>Pakistan</p>
                </div>
              </div>

              <div className="contact-detail">
                <span className="contact-icon">
                  ●
                </span>

                <div>
                  <small>Availability</small>

                  <p>
                    Open for freelance work
                  </p>
                </div>
              </div>

            </div>

            <div className="contact-socials">

              <a
                href="https://github.com/MunazaMunir-dev"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/munaza-munir-84099837a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.youtube.com/@MunazaMunir1"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>

              <a
                href="https://www.instagram.com/munaza_munir1/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label>
                Project Type
              </label>

              <select
                name="project_type"
                defaultValue=""
                required
              >

                <option
                  value=""
                  disabled
                >
                  Select a service
                </option>

                <option>
                  Web Development
                </option>

                <option>
                  Full-Stack Development
                </option>

                <option>
                  E-Commerce Website
                </option>

                <option>
                  Landing Page
                </option>

                <option>
                  Web Application
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>


            <div className="form-group">

              <label>
                Tell Me About Your Project
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your idea, requirements and budget..."
                required
              />

            </div>


            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Message →"}
            </button>


            {status && (
              <p className="form-status">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;