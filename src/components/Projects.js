import QuizImg from './img/quiz.png';
import TaskImg from './img/task.png';

const Projects = () => {
  return (
    <section id="projects" className="projects" style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>My Projects</h2>
      <div className="project-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {[
          {name: 'Quiz App', description: 'A dynamic quiz application built with React.', img: QuizImg, demo: 'https://qui0.vercel.app/', repo: 'https://github.com/Code-Canter/quiz'},
          {name: 'Todo App', description: 'A simple and intuitive task management app.', img: TaskImg, demo: 'https://task-list01.vercel.app/', repo: 'https://github.com/Code-Canter/task-list'},
          {name: 'Weather App', description: 'A weather application fetching live data from an external API.', img: '', demo: '', repo: ''}
        ].map(({name, description, img, demo, repo}) => (
          <div className="project-card" style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
            <img src={img} alt="Quiz App" style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{name}</h3>
            <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>{description}</p>
            <a href={demo} style={{ marginRight: '1rem', color: '#2575fc', textDecoration: 'none' }}>Live Demo</a> | <a href={repo} style={{ marginLeft: '1rem', color: '#2575fc', textDecoration: 'none' }}>GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;