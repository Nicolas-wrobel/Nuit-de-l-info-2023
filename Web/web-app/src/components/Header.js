import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/styles.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">À Propos</Link>
        <Link to="/more" className="nav-link">En Savoir Plus</Link>
      </nav>
    </header>
  );
};

export default Header;
