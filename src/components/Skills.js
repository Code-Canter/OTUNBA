const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
      }}
    >
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>My Skills</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Git'].map((skill) => (
          <div
            key={skill}
            style={{
              padding: '1rem 2rem',
              border: '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: '#fff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
