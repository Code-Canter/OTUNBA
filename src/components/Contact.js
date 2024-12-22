import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    // Use services like EmailJS or integrate backend email API.
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '500px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ddd', fontSize: "1rem" }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ padding: '0.75rem', borderRadius: '5px', border: '1px solid #ddd', fontSize: "1rem" }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        style={{
          padding: '0.75rem',
          borderRadius: '5px',
          border: '1px solid #ddd',
          fontSize: "1rem",
          minHeight: '150px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2575fc',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Send Message
      </button>
    </form>
  );
};

const Contact = ({details}) => {
  return (
    <section
      id="contact"
      className="contact"
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "rgb(244, 244, 244)",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Contact Me</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Contact Details */}
        <div
          className="contact-details"
          style={{ textAlign: "left", minWidth: "300px" }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${details.social.email}`}
              style={{ textDecoration: "none", color: "rgb(37, 117, 252)" }}
            >
              {details.social.email}
            </a>
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            <strong>Phone:</strong> {details.social.phone}
          </p>
          <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
            <a
              href={details.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
                alt="LinkedIn"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href={details.social.x}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="X"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
            <a
              href={details.social.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Github"
                style={{ width: "24px", height: "24px" }}
              />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;