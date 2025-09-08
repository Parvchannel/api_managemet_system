import React, { useState } from 'react';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle, loading, success, error

  // Footer navigation data
  const footerSections = [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#features', internal: true },
        { text: 'Pricing', href: '#pricing', internal: true },
        { text: 'Integrations', href: '#integrations', internal: true },
        { text: 'API Reference', href: '#api-reference', internal: true },
        { text: 'Changelog', href: '#changelog', internal: true }
      ]
    },
    {
      title: 'Developers',
      links: [
        { text: 'Documentation', href: '#docs', internal: true },
        { text: 'SDKs & Libraries', href: '#sdks', internal: true },
        { text: 'Code Examples', href: '#examples', internal: true },
        { text: 'Community', href: '#community', internal: true },
        { text: 'Open Source', href: '#opensource', internal: true }
      ]
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: '#about', internal: true },
        { text: 'Careers', href: '#careers', internal: true },
        { text: 'Blog', href: '#blog', internal: true },
        { text: 'Press Kit', href: '#press', internal: true },
        { text: 'Contact', href: '#contact', internal: true }
      ]
    },
    {
      title: 'Support',
      links: [
        { text: 'Help Center', href: '#help', internal: true },
        { text: 'System Status', href: '#status', internal: true },
        { text: 'Report Bug', href: '#bug-report', internal: true },
        { text: 'Feature Request', href: '#feature-request', internal: true },
        { text: 'Security', href: '#security', internal: true }
      ]
    }
  ];

  // Social media links
  const socialLinks = [
    { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com', icon: '📱' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { name: 'Discord', href: 'https://discord.com', icon: '💬' }
  ];

  // Legal links
  const legalLinks = [
    { text: 'Privacy Policy', href: '#privacy' },
    { text: 'Terms of Service', href: '#terms' },
    { text: 'Cookie Policy', href: '#cookies' },
    { text: 'GDPR', href: '#gdpr' }
  ];

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLinkClick = (href, internal = false) => {
    if (internal) {
      // Handle internal navigation
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle external links
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Section */}
          <div className="footer-company">
            <div className="footer-logo">
              <span className="logo-text">ApiFlow</span>
              <div className="logo-tagline">Monitor • Measure • Monetize</div>
            </div>
            
            <p className="footer-description">
              The complete API monitoring and billing platform trusted by thousands of developers worldwide.
            </p>

            {/* Newsletter Signup */}
            <div className="newsletter-section">
              <h4 className="newsletter-title">Stay Updated</h4>
              <form className="newsletter-form" >
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className={`newsletter-input ${newsletterStatus === 'error' ? 'input-error' : ''}`}
                    disabled={newsletterStatus === 'loading'}
                  />
                  <button
                    type="submit"
                    className={`newsletter-button ${newsletterStatus}`}
                    disabled={newsletterStatus === 'loading'}
                  >
                    {newsletterStatus === 'loading' ? (
                      <span className="loading-spinner"></span>
                    ) : newsletterStatus === 'success' ? (
                      '✓'
                    ) : (
                      '→'
                    )}
                  </button>
                </div>
                
                {newsletterStatus === 'success' && (
                  <p className="newsletter-success">Thanks for subscribing!</p>
                )}
                {newsletterStatus === 'error' && (
                  <p className="newsletter-error">Please enter a valid email address</p>
                )}
              </form>
            </div>

            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="social-link"
                  onClick={() => handleLinkClick(social.href)}
                  title={social.name}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-text">{social.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="footer-nav">
            {footerSections.map((section) => (
              <div key={section.title} className="footer-section">
                <h4 className="footer-section-title">{section.title}</h4>
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link.text}>
                      <button
                        className="footer-link"
                        onClick={() => handleLinkClick(link.href, link.internal)}
                      >
                        {link.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} ApiFlow. All rights reserved.</p>
              <p className="built-with">Built with ❤️ for developers</p>
            </div>

            <div className="legal-links">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.text}>
                  <button
                    className="legal-link"
                    onClick={() => handleLinkClick(link.href, true)}
                  >
                    {link.text}
                  </button>
                  {index < legalLinks.length - 1 && <span className="separator">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          
        </div>

        {/* Background Decoration */}
        <div className="footer-bg-decoration">
          <div className="bg-gradient"></div>
          <div className="bg-dots"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;