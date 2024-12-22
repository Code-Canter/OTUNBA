const Footer = ({details}) => {
  return (
    <footer className="footer" style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '1rem 0' }}>
      <p>&copy; 2024 {details.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;