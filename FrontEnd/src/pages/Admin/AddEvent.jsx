import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import Base from "../../components/Base";
import { createCampHandler } from './../../Features/admin/adminSlice';
import { motion } from "framer-motion";

const AddEvent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [camp, setCamp] = useState({
    title: "",
    description: "",
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
    venue: "",
  });

  const submitCamp = (e) => {
    dispatch(createCampHandler(camp))
      .then((response) => {
        toast.success(response.data);
        navigate("/upcomingevents");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setCamp({ ...camp, [property]: event.target.value });
  };

  return (
    <Base>
      <div className="add-event-container">
        <Row className="justify-content-center mt-4">
          <Col lg={8} md={10} sm={12}>
            <Card color="dark" outline>
              <CardHeader className="text-center bg-info text-white py-3">
                <h3>Create Event</h3>
              </CardHeader>

              <CardBody>
                <form method="post">
                  <FormGroup>
                    <Label for="title">Event Title</Label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter Event Title"
                      onChange={(e) => handleChange(e, "title")}
                      value={camp.title}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      id="description"
                      name="description"
                      placeholder="Write Event Description"
                      onChange={(e) => handleChange(e, "description")}
                      value={camp.description}
                      style={{ resize: 'none' }}
                    />
                  </FormGroup>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="eventStartDate">Event Start Date</Label>
                        <Input
                          type="date"
                          id="eventStartDate"
                          name="eventStartDate"
                          onChange={(e) => handleChange(e, "eventStartDate")}
                          value={camp.eventStartDate}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="eventStartTime">Event Start Time</Label>
                        <Input
                          type="time"
                          step="2"
                          id="eventStartTime"
                          name="eventStartTime"
                          onChange={(e) => handleChange(e, "eventStartTime")}
                          value={camp.eventStartTime}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="eventEndDate">Event End Date</Label>
                        <Input
                          type="date"
                          id="eventEndDate"
                          name="eventEndDate"
                          onChange={(e) => handleChange(e, "eventEndDate")}
                          value={camp.eventEndDate}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="eventEndTime">Event End Time</Label>
                        <Input
                          type="time"
                          step="2"
                          id="eventEndTime"
                          name="eventEndTime"
                          onChange={(e) => handleChange(e, "eventEndTime")}
                          value={camp.eventEndTime}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="venue">Event Venue</Label>
                    <Input
                      type="text"
                      id="venue"
                      name="venue"
                      placeholder="Write Full Address of Event"
                      onChange={(e) => handleChange(e, "venue")}
                      value={camp.venue}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="city">Select City</Label>
                    <Input
                      id="city"
                      name="city"
                      type="select"
                      onChange={(event) => handleChange(event, "city")}
                    >
                      <option defaultValue>Choose a City</option>
                      <option value="THANE">Thane</option>
                      <option value="PUNE">Pune</option>
                      <option value="SURAT">Surat</option>
                      <option value="AHMEDABAD">Ahmedabad</option>
                    </Input>
                  </FormGroup>

                  <Container className="text-center">
                    <motion.div whileTap={{ scale: 0.92 }} style={{ display: 'inline-block' }}>
                      <Button
                        type="button"
                        color="info"
                        onClick={submitCamp}
                        className="me-3"
                        style={{ minWidth: 140, fontWeight: 600, borderRadius: 30, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', background: 'linear-gradient(90deg, #e53935 0%, #1976d2 100%)', border: 'none' }}
                      >
                        Create Event
                      </Button>
                    </motion.div>
                    <motion.div whileTap={{ scale: 0.92 }} style={{ display: 'inline-block' }}>
                      <Button type="reset" color="secondary" style={{ minWidth: 120, fontWeight: 600, borderRadius: 30, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', background: 'linear-gradient(90deg, #757575 0%, #bdbdbd 100%)', border: 'none', marginLeft: 12 }}>
                        Reset
                      </Button>
                    </motion.div>
                  </Container>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Base>
  );
};

export default AddEvent;
