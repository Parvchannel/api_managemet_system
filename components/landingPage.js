import React, { useState, useEffect } from 'react';
import './landingPage.css';

const Hero = ({setShowSignup}) => {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    apiCalls: 0,
    uptime: 0,
    response: 0,
    revenue: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Target values for the metrics
  const targetMetrics = {
    apiCalls: 2.4,
    uptime: 99.9,
    response: 127,
    revenue: 1247
  };

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Animate metrics after component becomes visible
    const animateMetrics = () => {
      const duration = 2000; // 2 seconds
      const intervals = 60; // 60 fps
      const step = duration / intervals;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / intervals;
        const easeOut = 1 - Math.pow(1 - progress, 3); // Ease-out animation

        setAnimatedMetrics({
          apiCalls: Number((targetMetrics.apiCalls * easeOut).toFixed(1)),
          uptime: Number((targetMetrics.uptime * easeOut).toFixed(1)),
          response: Math.round(targetMetrics.response * easeOut),
          revenue: Math.round(targetMetrics.revenue * easeOut)
        });

        if (currentStep >= intervals) {
          clearInterval(timer);
          setAnimatedMetrics(targetMetrics);
        }
      }, step);

      return timer;
    };

    const timer = setTimeout(animateMetrics, 800);
    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleCTAClick = (e, action) => {
    e.preventDefault();
    // Add analytics tracking here
    console.log(`CTA clicked: ${action}`);
    
    if (action === 'signup') {
      // Handle signup flow
      window.location.href = '#signup';
    } else if (action === 'demo') {
      // Handle demo request
      window.location.href = '#demo';
    }
  };

  // Generate random chart bars for the mock chart
  const generateChartBars = () => {
    const bars = [];
    const heights = [60, 80, 120, 90, 150, 110, 170];
    
    for (let i = 0; i < 7; i++) {
      bars.push(
        <div
          key={i}
          className="chart-bar"
          style={{
            height: `${heights[i]}px`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      );
    }
    return bars;
  };

  return (
    <>
      {/* Background Animation */}
      <div className="hero-bg-animation">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>

      <section className="hero">
        <div className="hero-container">
          <div className={`hero-content ${isVisible ? 'hero-content-visible' : ''}`}>
            <h1 className="hero-title">
              Monitor, Measure, Monetize
            </h1>
            
            <p className="hero-description">
              The complete API monitoring and billing platform. Track usage, manage costs, 
              and optimize performance in real-time with intelligent insights and automated billing.
            </p>
            
            <div className="hero-cta">
              <button
                className="btn-primary"
                onClick={(e) => { handleCTAClick(e, 'signup'); setShowSignup(true); }}
              >
                Start Free Trial
              </button>
              <button
                className="btn-secondary"
                onClick={(e) => handleCTAClick(e, 'demo')}
              >
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className={`dashboard-preview ${isVisible ? 'dashboard-preview-visible' : ''}`}>
            <div className="dashboard-mockup">
              {/* Metrics Cards */}
              <div className="mock-metrics">
                <div className="metric-card">
                  <div className="metric-value">
                    {animatedMetrics.apiCalls}M
                  </div>
                  <div className="metric-label">API Calls Today</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-value">
                    {animatedMetrics.uptime}%
                  </div>
                  <div className="metric-label">Uptime</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-value">
                    {animatedMetrics.response}ms
                  </div>
                  <div className="metric-label">Avg Response</div>
                </div>
                
                <div className="metric-card">
                  <div className="metric-value">
                    ${animatedMetrics.revenue.toLocaleString()}
                  </div>
                  <div className="metric-label">Monthly Revenue</div>
                </div>
              </div>
              
              {/* Mock Chart */}
              <div className="mock-chart">
                {generateChartBars()}
              </div>
              
              {/* Chart Labels */}
              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;