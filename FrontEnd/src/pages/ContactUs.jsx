import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Base from "../components/Base";
import { removeUser } from "../Features/persist/persist";
import { storageItem } from "../services/helper";
import "./ContactUs.css";

const Contactus = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const logout = () => {
    dispatch(removeUser());
    storageItem.removeItem("token");
    navigate("/");
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Base>
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
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
            Get In Touch
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <motion.div 
            className="section-header"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels</p>
          </motion.div>

          <div className="contact-info-grid">
            <motion.div 
              className="contact-info-card"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <h3>Phone</h3>
                <p>7447653314</p>
                <span className="contact-label">Call us anytime</span>
              </div>
            </motion.div>

            <motion.div 
              className="contact-info-card"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <h3>Email</h3>
                <p>aniruddhalalge283@gmail.com</p>
                <span className="contact-label">Send us an email</span>
              </div>
            </motion.div>

            <motion.div 
              className="contact-info-card"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-content">
                <h3>Address</h3>
                <p>CDAC, Mumbai</p>
                <span className="contact-label">Visit our location</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <motion.div 
            className="form-container"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  variants={fadeInLeft}
                  initial="hidden"
                  animate="visible"
                >
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </motion.div>

                <motion.div 
                  className="form-group"
                  variants={fadeInRight}
                  initial="hidden"
                  animate="visible"
                >
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </motion.div>
              </div>

              <motion.div 
                className="form-group"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this about?"
                />
              </motion.div>

              <motion.div 
                className="form-group"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending Message...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <motion.div 
            className="map-container"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <i className="fas fa-map"></i>
              <p>Interactive map will be displayed here</p>
              <span>CDAC, Mumbai</span>
            </div>
          </motion.div>
        </div>
      </section>
    </Base>
  );
};

export default Contactus;