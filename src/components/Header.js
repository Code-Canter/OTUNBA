
const Header = () => {
  return (
    <header className="header" style={{ position: 'sticky', top: 0, backgroundColor: '#333', color: '#fff', padding: '1rem 2rem', zIndex: 1000 }}>
      <nav>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', margin: 0, padding: 0 }}>
          <li><a href="#hero" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
          <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
          <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;