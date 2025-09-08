import React, { useState, useEffect, useRef } from 'react';
import './Features.css';

const Features = ({setShowSignup}) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const featuresData = [
    {
      id: 'monitoring',
      icon: '📊',
      title: 'Real-time Monitoring',
      description: 'Track API performance, response times, and error rates in real-time with customizable dashboards and instant alerts.',
      features: ['Live performance metrics', 'Custom dashboards', 'Instant notifications', 'Historical data analysis']
    },
    {
      id: 'billing',
      icon: '💳',
      title: 'Smart Billing',
      description: 'Automated usage-based billing with flexible pricing tiers, custom rate limits, and detailed cost breakdowns.',
      features: ['Usage-based pricing', 'Flexible rate limits', 'Automated invoicing', 'Revenue analytics']
    },
    {
      id: 'analytics',
      icon: '🔍',
      title: 'Advanced Analytics',
      description: 'Deep insights into API usage patterns, user behavior, and performance trends with exportable reports.',
      features: ['Usage pattern analysis', 'User behavior insights', 'Performance trends', 'Exportable reports']
    },
    {
      id: 'alerts',
      icon: '🚨',
      title: 'Intelligent Alerts',
      description: 'Proactive monitoring with smart alerts for downtime, rate limits, billing thresholds, and performance anomalies.',
      features: ['Smart alert system', 'Threshold monitoring', 'Multi-channel notifications', 'Alert customization']
    },
    {
      id: 'security',
      icon: '🔐',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with API key management, rate limiting, and compliance with SOC2 and GDPR standards.',
      features: ['API key management', 'Rate limiting', 'SOC2 compliance', 'GDPR compliance']
    },
    {
      id: 'integration',
      icon: '⚡',
      title: 'Easy Integration',
      description: 'Simple SDK integration with popular frameworks, comprehensive documentation, and 24/7 developer support.',
      features: ['Multiple SDKs', 'Comprehensive docs', '24/7 support', 'Quick setup']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        card.dataset.cardIndex = index;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handleFeatureClick = (featureId) => {
    // Analytics tracking
    console.log(`Feature clicked: ${featureId}`);
    // Could trigger a modal, demo, or navigation
  };

  return (
    <section className="features" id="features" ref={sectionRef}>
      <div className="features-container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Everything You Need to Scale</h2>
          <p className="section-description">
            Comprehensive API monitoring and billing solutions designed for modern applications
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div
              key={feature.id}
              ref={el => cardRefs.current[index] = el}
              className={`feature-card ${visibleCards.has(index) ? 'feature-card-visible' : ''} ${hoveredCard === feature.id ? 'feature-card-hovered' : ''}`}
              onMouseEnter={() => handleCardHover(feature.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleFeatureClick(feature.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleFeatureClick(feature.id);
                }
              }}
            >
              {/* Card Background Effect */}
              <div className="card-bg-effect"></div>
              
              {/* Feature Icon */}
              <div className="feature-icon">
                <span className="icon-emoji">{feature.icon}</span>
                <div className="icon-glow"></div>
              </div>

              {/* Feature Content */}
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                {/* Feature List */}
                <ul className="feature-list">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="feature-item">
                      <span className="feature-check">✓</span>
                      <span className="feature-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Number */}
              <div className="card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="features-cta">
          <p className="cta-text">
            Ready to experience all these features?
          </p>
          <button className="cta-button" onClick={() => setShowSignup(true)}>
            Start Your Free Trial
            <span className="button-arrow">→</span>
          </button>
        </div>

        {/* Background Decorations */}
        <div className="features-bg-decoration">
          <div className="bg-circle bg-circle-1"></div>
          <div className="bg-circle bg-circle-2"></div>
          <div className="bg-circle bg-circle-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;