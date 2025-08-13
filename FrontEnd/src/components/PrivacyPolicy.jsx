// src/PrivacyPolicy.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'information', title: 'Information We Collect' },
    { id: 'usage', title: 'How We Use Your Information' },
    { id: 'protection', title: 'How We Protect Your Information' },
    { id: 'sharing', title: 'Sharing Your Information' },
    { id: 'rights', title: 'Your Rights' },
    { id: 'changes', title: 'Changes to This Policy' },
    { id: 'contact', title: 'Contact Us' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="privacy-policy-page">
      {/* Navigation */}
      <motion.nav 
        className="privacy-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <Link to="/" className="home-link">
            <i className="fas fa-home"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="privacy-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Your privacy is important to us. Learn how we protect and handle your information.
          </motion.p>
          <motion.div 
            className="effective-date"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <i className="fas fa-calendar-alt"></i>
            <span>Effective date: September 1, 2025</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Table of Contents */}
      <section className="toc-section">
        <div className="container">
          <motion.div 
            className="toc-container"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2>Table of Contents</h2>
            <div className="toc-grid">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  className={`toc-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => scrollToSection(section.id)}
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="toc-number">{index + 1}</span>
                  <span className="toc-title">{section.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            {/* Main Content */}
            <motion.div 
              className="main-content"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div id="introduction" className="content-block">
                <h2>Introduction</h2>
                <p>
                  This Privacy Policy explains how we collect, use, and protect your personal information when you use our blood bank services. We are committed to ensuring your privacy and the security of your personal information.
                </p>
              </div>

              <div id="information" className="content-block">
                <h2>Information We Collect</h2>
                <p>We collect different types of information to provide our services and improve your experience. This includes:</p>
                <div className="info-cards">
                  <div className="info-card">
                    <div className="card-icon">
                      <i className="fas fa-user"></i>
                    </div>
                    <h3>Personal Information</h3>
                    <p>Name, email address, phone number, blood type, medical history, etc.</p>
                  </div>
                  <div className="info-card">
                    <div className="card-icon">
                      <i className="fas fa-heartbeat"></i>
                    </div>
                    <h3>Health Information</h3>
                    <p>Blood donation history, eligibility details, and any medical conditions that may affect your ability to donate blood.</p>
                  </div>
                  <div className="info-card">
                    <div className="card-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h3>Usage Data</h3>
                    <p>Information on how you use our website or mobile app, such as pages visited, interactions, and donation scheduling details.</p>
                  </div>
                  <div className="info-card">
                    <div className="card-icon">
                      <i className="fas fa-cookie-bite"></i>
                    </div>
                    <h3>Cookies</h3>
                    <p>We use cookies to enhance user experience and for analytics purposes (such as tracking user activity on our site).</p>
                  </div>
                </div>
              </div>

              <div id="usage" className="content-block">
                <h2>How We Use Your Information</h2>
                <p>Your information is used to:</p>
                <ul className="usage-list">
                  <li><i className="fas fa-check"></i> Process your blood donation and medical history.</li>
                  <li><i className="fas fa-check"></i> Schedule blood donation appointments and notify you about blood drives or events.</li>
                  <li><i className="fas fa-check"></i> Provide you with personalized content, such as reminders or eligibility checks.</li>
                  <li><i className="fas fa-check"></i> Improve the functionality and security of our website and mobile app.</li>
                </ul>
              </div>

              <div id="protection" className="content-block">
                <h2>How We Protect Your Information</h2>
                <div className="protection-card">
                  <div className="protection-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div className="protection-content">
                    <p>
                      We use industry-standard security measures to protect your personal and health-related information. This includes encryption, secure servers, and data access controls. However, no system is completely secure, so we cannot guarantee absolute security.
                    </p>
                  </div>
                </div>
              </div>

              <div id="sharing" className="content-block">
                <h2>Sharing Your Information</h2>
                <p>
                  We will not sell, rent, or share your personal information with third parties, except in the following circumstances:
                </p>
                <div className="sharing-cards">
                  <div className="sharing-card">
                    <i className="fas fa-user-md"></i>
                    <h3>Medical Professionals</h3>
                    <p>With medical professionals or organizations in case of emergencies, to facilitate blood donation.</p>
                  </div>
                  <div className="sharing-card">
                    <i className="fas fa-gavel"></i>
                    <h3>Legal Requirements</h3>
                    <p>As required by law, such as complying with government health regulations or responding to subpoenas.</p>
                  </div>
                </div>
              </div>

              <div id="rights" className="content-block">
                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <div className="rights-grid">
                  <div className="right-item">
                    <i className="fas fa-eye"></i>
                    <span>Access and review your personal and health information.</span>
                  </div>
                  <div className="right-item">
                    <i className="fas fa-edit"></i>
                    <span>Request corrections or updates to your information.</span>
                  </div>
                  <div className="right-item">
                    <i className="fas fa-trash"></i>
                    <span>Request deletion of your personal data (subject to legal and operational requirements).</span>
                  </div>
                  <div className="right-item">
                    <i className="fas fa-undo"></i>
                    <span>Withdraw consent for the collection of your information (where applicable).</span>
                  </div>
                </div>
                <p className="contact-note">If you wish to exercise any of these rights, please contact us using the information below.</p>
              </div>

              <div id="changes" className="content-block">
                <h2>Changes to This Privacy Policy</h2>
                <div className="changes-card">
                  <i className="fas fa-bell"></i>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we update this policy, we will post the revised version on this page with a new effective date.
                  </p>
                </div>
              </div>

              <div id="contact" className="content-block">
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h3>Email</h3>
                      <p>aniruddhalalge283@gmail.com</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h3>Phone</h3>
                      <p>7447653314</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h3>Address</h3>
                      <p>CDAC, Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
