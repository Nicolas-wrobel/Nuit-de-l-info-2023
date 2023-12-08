import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MorePage from './pages/MorePage';
import './assets/styles/App.css';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/more" element={<MorePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
