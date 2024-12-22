const Hero = ({ details }) => {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        color: '#fff',
        textAlign: 'center',
        padding: '4rem 2rem',
      }}
    >
      <h1 style={{ fontSize: '3rem', margin: 0 }}>
        Hi, I'm <span>{details.name}</span>
      </h1>
      <p style={{ fontSize: '1.5rem', margin: '1rem 0' }}>
        Frontend && Backend Developer | Building Interactive Experiences
      </p>
      <a
        href="#projects"
        className="cta"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#fff',
          color: '#2575fc',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;