import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = ({setShowSignup}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="navbar-container">
        <div className="navbar-logo">ApiFlow</div>
        
        <ul className={`navbar-links ${isMobileMenuOpen ? 'navbar-links-mobile-open' : ''}`}>
          <li>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#docs" onClick={(e) => handleNavClick(e, '#docs')}>
              Docs
            </a>
          </li>
          <li>
            <a href="#support" onClick={(e) => handleNavClick(e, '#support')}>
              Support
            </a>
          </li>
        </ul>

        <div className="navbar-actions">
          <a 
            href="#signup" 
            className="navbar-cta"
            onClick={(e) =>{ handleNavClick(e, '#signup'); setShowSignup(true); }}
          >
            Start Free Trial
          </a>
          
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'mobile-menu-toggle-open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;