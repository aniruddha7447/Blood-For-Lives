import Base from "../components/Base.jsx"
import './About.css'; // adjust path if needed
import CustomNavbar from "../components/CustomNavbar";
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
};

const aboutus = () => {
  return (
    <div className="about-page">
      <CustomNavbar/>
      
      {/* Hero Section */}
      <motion.div
        className="about-hero"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <h1 className="hero-title">About BloodForLives</h1>
          <p className="hero-subtitle">Connecting donors with those in need, one drop at a time</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="about-content">
      <motion.div
          className="about-section"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            Blood donation is a crucial component of modern healthcare. Managing blood supplies is a complex and critical task, as blood products are essential for saving lives. Due to their perishable nature, these products require careful handling, timely processing, and precise administration to ensure their effectiveness in life-threatening situations. Blood transfusions play a vital role in medical treatment and are integral to saving lives.
          </p>
        </motion.div>

        <motion.div
          className="about-section"
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Our Platform</h2>
          <p className="section-text">
            The significant challenge of blood management has been greatly eased with the advancement of information and computer technologies. The e-Blood Bank system is an integrated blood bank automation platform that connects all the blood banks in the state through a unified network. This system, known as the Integrated Blood Bank Management Information System (MIS), electronically collects, validates, stores, and shares data related to blood donation and transfusion services.
          </p>
          <p className="section-text">
            It can compile various types of data into clear, actionable reports that assist in decision-making, ranging from efficient donor screening to the optimal distribution of blood. This digital process makes it easier for the public to check the availability of blood in nearby banks with just a few clicks, enabling them to request specific blood types, especially rare ones, and ultimately help save lives.
          </p>
        </motion.div>

        <motion.div
          className="about-section"
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Comprehensive Management</h2>
          <p className="section-text">
            The system also offers real-time updates on the availability of blood units, categorized by blood group, in all licensed blood banks across the state. Additionally, it features an online tracking system that allows state-level administrators to monitor the movement and status of blood and its components. This comprehensive platform oversees the entire process, from the collection of blood at donation camps and hospitals to the distribution of blood units.
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="features-section"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🩸</div>
              <h3>Blood Collection Management</h3>
              <p>Streamlined process for managing blood donations</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>Inventory Management</h3>
              <p>Real-time tracking of blood stock levels</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <h3>Camp Management</h3>
              <p>Organize and manage blood donation camps</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>User Management</h3>
              <p>Comprehensive user and system administration</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Stock Management</h3>
              <p>Advanced blood stock monitoring and alerts</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Blood Issue Management</h3>
              <p>Efficient blood distribution system</p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="team-section"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Our Team</h2>
          <p className="section-text team-intro">
            Meet the dedicated professionals behind BloodForLives, working tirelessly to connect donors with those in need.
          </p>
          <div className="team-grid">
            <motion.div
              className="team-member"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <div className="member-photo">
                <img src="/team-member-1.jpg" alt="Aniruddha Lalge" />
              </div>
              <div className="member-info">
                <h3>Aniruddha Lalge</h3>
                <p>Lead & Backend Developer</p>
                <div className="member-social">
                  <a href="https://www.linkedin.com/in/aniruddha-lalge-aa06041b3/" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="team-member"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="member-photo">
                <img src="/team-member-2.jpg" alt="Gouri Chavan" />
              </div>
              <div className="member-info">
                <h3>Gouri Chavan</h3>
                <p>Backend Developer</p>
                <div className="member-social">
                  {/* TODO: Add Gouri's LinkedIn URL */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="team-member"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <div className="member-photo">
                <img src="/team-member-3.jpg" alt="Vishal Pawar" />
              </div>
              <div className="member-info">
                <h3>Vishal Pawar</h3>
                <p>Frontend Developer</p>
                <div className="member-social">
                  {/* TODO: Add Vishal's LinkedIn URL */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="team-member"
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <div className="member-photo">
                <img src="/team-member-4.jpg" alt="Shruti Banger" />
              </div>
              <div className="member-info">
                <h3>Shruti Banger</h3>
                <p>UI/UX Designer</p>
                <div className="member-social">
                  {/* TODO: Add Shruti's LinkedIn URL */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="team-member"
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
            >
              <div className="member-photo">
                <img src="/team-member-5.jpg" alt="Rutuja Gaikwad" />
              </div>
              <div className="member-info">
                <h3>Rutuja Gaikwad</h3>
                <p>Frontend Developer</p>
                <div className="member-social">
                  {/* TODO: Add Rutuja's LinkedIn URL */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Advantages Section */}
        <motion.div
          className="advantages-section"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <h2 className="section-title">Why Choose BloodForLives?</h2>
          <div className="advantages-grid">
            <div className="advantage-item">
              <div className="advantage-icon">📊</div>
              <p>State & Blood Bank dashboard to provide the group wise blood stocks status for all stakeholders.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🏥</div>
              <p>Dashboards for Blood Bank Officers (Tested/ Untested/ Buffer stock of blood units)</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🚚</div>
              <p>Distribution of blood from mother blood banks to blood storage centers.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">👥</div>
              <p>Recruitment and retention of the regular blood donors in the state.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">📋</div>
              <p>Maintain all the registers according to Drugs & Cosmetic Act of 1940.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">⚠️</div>
              <p>Inventory of kits and consumables with alert for short expiry.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🔔</div>
              <p>Alert mechanism for License, regular donors, organization to do VBD Camps.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">📱</div>
              <p>Provides a paperless donor room</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">⚡</div>
              <p>Real time information form collection to testing and use of blood and blood products.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🏷️</div>
              <p>Unique bar coding for each blood packets.</p>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🌍</div>
              <p>The citizen can access the availability of blood units from any blood bank of India.</p>
            </div>
          </div>
      </motion.div>
      </div>
    </div>
  );
};

export default aboutus;
