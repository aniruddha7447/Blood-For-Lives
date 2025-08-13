import Base from "../components/Base";
import { Container, Row, Col, Carousel, ListGroupItem } from "react-bootstrap";
import { Card, CardBody, CardText, CardHeader, ListGroup } from "reactstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUpcomingEventsHandler } from "../Features/user/userSlice";
import './Home.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
};

const Home = () => {

  const dispatch = useDispatch();
  const [data, setData] = useState([]);
    useEffect(() => {
      getAllUpcomingEvents();
    }, []);

const getAllUpcomingEvents=()=>{
  dispatch(getAllUpcomingEventsHandler())
  .then((response) => {
    console.log(response.data)
    setData(response.data);
  })
  .catch((err) => {});
}

  return (
    <div>
      <Base>
        {/* Updated Carousel - Added text description in a minimalistic design */}
        <motion.div className="custom-carousel" variants={fadeInUp} initial="hidden" animate="visible">
          <Carousel interval={2000}> 
            <Carousel.Item>
              <motion.div className="carousel-item-content" variants={fadeInUp} initial="hidden" animate="visible">
                <h3 className="carousel-title">Help to make a Difference in our Society</h3>
                <p className="carousel-description">Join us in this Initiative!</p>
              </motion.div>
            </Carousel.Item>
          </Carousel> 
        </motion.div>

        {/* Section for Benefits of Donation */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <Card className="benefits-card shadow-lg rounded" style={{ borderTop: '3px solid #00bcd4' }}>
          <CardHeader
            className="benefits-card-header"
          >
            Why Donate Blood?
          </CardHeader>
          <ListGroup>
            <ListGroupItem className="benefits-list-item">
              <CardText>
                Donating blood may reduce the risk of heart diseases.
              </CardText>
             
              <CardText>
                You can donate on regular basis to help humankind!
              </CardText>
              <CardText>
                You can donate blood every 12 weeks.
              </CardText>
            </ListGroupItem>
          </ListGroup>
        </Card>
        </motion.div>

        {/* Upcoming Events Carousel */}
        <motion.div className="events-carousel" variants={fadeInUp} initial="hidden" animate="visible">
          <Carousel interval={3500}>
            {data.map((item) => (
              <Carousel.Item key={item.id}>
                <motion.div className="event-card-container" whileHover={{ scale: 1.03, boxShadow: "0 16px 48px rgba(229, 57, 53, 0.13)" }} variants={fadeInUp} initial="hidden" animate="visible">
                  <h3 className="event-title">{item.title}</h3>
                  <p className="event-description">{item.description}</p>
                  <div className="event-details">
                    <p><strong>Start Date:</strong> {item.eventStartDate} at {item.eventStartTime}</p>
                    <p><strong>End Date:</strong> {item.eventEndDate} at {item.eventEndTime}</p>
                    <p><strong>Venue:</strong> {item.venue}</p>
                    <p><strong>City:</strong> {item.city}</p>
                  </div>
                </motion.div>
              </Carousel.Item>
            ))}
          </Carousel>
        </motion.div>

        {/* "Did You Know?" Section */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
        <Card className="info-card shadow-lg rounded" style={{ backgroundColor: "#f5f5f5", borderTop: '3px solid #ff5722' }}>
          <CardHeader
            className="info-card-header"
          >
            Did You Know?
          </CardHeader>
          <CardBody>
            <CardText>
              Every 2 Seconds, someone in the country needs blood.
            </CardText>
            <CardText>
              Every year, about 4 to 5 Crore units of blood are needed nationwide.
            </CardText>
            <CardText>
              However, only 5 Lakh units are currently available.
            </CardText>
          </CardBody>
        </Card>
        </motion.div>
      </Base>
    </div>
  );
};

export default Home;
