import { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { removeUser } from "../Features/persist/persist";
import { storageItem } from "../services/helper";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import "./CustomNavbar.css";
import { motion } from "framer-motion";
import { FaTint, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaHome, FaInfoCircle, FaEnvelope, FaList, FaCalendarAlt, FaBoxes, FaUsers, FaHistory, FaPlus, FaMapMarkerAlt } from "react-icons/fa";

function CustomNavbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let userDetails = useSelector((state) => state.persist.user);

  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const isLoggedIn = () => {
    let data = storageItem.getItem("token");
    if (data != null) return true;
    else return false;
  };

  const getCurrentUserDetail = () => {
    if (isLoggedIn()) {
      return userDetails;
    } else {
      return undefined;
    }
  };

  const logout = () => {
    dispatch(removeUser());
    storageItem.removeItem("token");
    navigate("/");
    window.location.reload(true);
  };

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  return (
    <motion.div
      className="customNav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      style={{
        backdropFilter: "blur(8px)",
        background: "linear-gradient(90deg, rgba(229,57,53,0.95) 0%, rgba(25,118,210,0.95) 100%)",
        boxShadow: "0 4px 24px rgba(25, 118, 210, 0.13)",
        borderBottom: "1.5px solid rgba(255,255,255,0.08)",
      }}
    >
      <Navbar dark expand="md" className="navbar">
        <NavbarBrand tag={ReactLink} to="/" className="navbar-brand-custom">
          <FaTint className="brand-icon" style={{ color: "#fff", marginRight: 8 }} />
          BloodForLives
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="navbar-toggler-custom" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {!login && (
              <NavItem>
                <NavLink tag={ReactLink} to="/login" className="nav-link-custom">
                  <FaTint className="nav-icon" /> Need Blood
                </NavLink>
              </NavItem>
            )}
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav className="dropdown-toggle-custom">
                <FaList className="nav-icon" /> More
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-custom" right>
                <DropdownItem tag={ReactLink} to="/contactus" className="dropdown-item-custom">
                  <FaEnvelope className="dropdown-icon" /> Contact Us
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/aboutus" className="dropdown-item-custom">
                  <FaInfoCircle className="dropdown-icon" /> About Us
                </DropdownItem>
                <DropdownItem tag={ReactLink} to="/privacy-policy" className="dropdown-item-custom">
                  <FaInfoCircle className="dropdown-icon" /> Privacy Policy
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Nav navbar>
            {login && user && user.role === "ROLE_ADMIN" && (
              <>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaUsers className="nav-icon" /> Users
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/listallusers" className="dropdown-item-custom">
                      <FaList className="dropdown-icon" /> All Users
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/pendinguserverification" className="dropdown-item-custom">
                      <FaUser className="dropdown-icon" /> Pending ID Verification
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/adduser" className="dropdown-item-custom">
                      <FaUserPlus className="dropdown-icon" /> Add New User
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaCalendarAlt className="nav-icon" /> Appointments
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/all_appointment" className="dropdown-item-custom">
                      <FaList className="dropdown-icon" /> All Appointments
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/pendingappointment" className="dropdown-item-custom">
                      <FaCalendarAlt className="dropdown-icon" /> All Pending Appointments
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaTint className="nav-icon" /> Blood Donations
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/blooddonationhistory" className="dropdown-item-custom">
                      <FaHistory className="dropdown-icon" /> Blood Donations History
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/createuserblooddonation" className="dropdown-item-custom">
                      <FaPlus className="dropdown-icon" /> Create Blood Donation
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaCalendarAlt className="nav-icon" /> Events
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/upcomingevents" className="dropdown-item-custom">
                      <FaCalendarAlt className="dropdown-icon" /> Upcoming Events
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/addevent" className="dropdown-item-custom">
                      <FaPlus className="dropdown-icon" /> Create Event
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaBoxes className="nav-icon" /> Blood Stock
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/bloodStock" className="dropdown-item-custom">
                      <FaBoxes className="dropdown-icon" /> All blood stock
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink tag={ReactLink} to="/adminhome" className="nav-link-custom user-link">
                    <FaUser className="nav-icon" /> {user.firstName}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout} className="nav-link-custom logout-link" style={{ cursor: 'pointer' }}>
                    <FaSignOutAlt className="nav-icon" /> Logout
                  </NavLink>
                </NavItem>
              </>
            )}
            {login && user && user.role === "ROLE_USER" && (
              <>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaCalendarAlt className="nav-icon" /> Appointment
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/AppointmentHistory" className="dropdown-item-custom">
                      <FaHistory className="dropdown-icon" /> Appointment History
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/createappointment" className="dropdown-item-custom">
                      <FaPlus className="dropdown-icon" /> Create New Appointment
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaMapMarkerAlt className="nav-icon" /> Address
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/getalladdresses" className="dropdown-item-custom">
                      <FaList className="dropdown-icon" /> View all addresses
                    </DropdownItem>
                    <DropdownItem tag={ReactLink} to="/addaddress" className="dropdown-item-custom">
                      <FaPlus className="dropdown-icon" /> Create New Address
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav className="dropdown-toggle-custom">
                    <FaTint className="nav-icon" /> Blood Donations
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-custom" right>
                    <DropdownItem tag={ReactLink} to="/donationhistory" className="dropdown-item-custom">
                      <FaHistory className="dropdown-icon" /> Donation History
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink tag={ReactLink} to="/userhome" className="nav-link-custom user-link">
                    <FaUser className="nav-icon" /> {user.firstName}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink nav onClick={logout} className="nav-link-custom logout-link" style={{ cursor: 'pointer' }}>
                    <FaSignOutAlt className="nav-icon" /> Logout
                  </NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <Nav></Nav>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login" className="nav-link-custom">
                    <FaSignInAlt className="nav-icon" /> Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup" className="nav-link-custom">
                    <FaUserPlus className="nav-icon" /> Signup
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </motion.div>
  );
}

export default CustomNavbar;
