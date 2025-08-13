import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import Base from "../../components/Base";
import { deleteCampHandler, getUpcomigEventsHandler } from "../../Features/admin/adminSlice";
import { updateCampHandler } from "../../Features/admin/adminSlice";

function UpcomingEvents() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [camp, setCamp] = useState({
    id: "",
    title: "",
    description: "",
    eventStartDate: "",
    eventStartTime: "",
    eventEndDate: "",
    eventEndTime: "",
    venue: "",
    city: "",
  });

  useEffect(() => {
    eventListHandler();
  }, []);
  
  const eventListHandler = () => {
    dispatch(getUpcomigEventsHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  const handleChange = (event, property) => {
    setCamp({ ...camp, [property]: event.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const buttonUpdateEvent = (item) => {
    handleShow();
    setCamp({
      id: item.id,
      title: item.title,
      description: item.description,
      eventStartDate: item.eventStartDate,
      eventStartTime: item.eventStartTime,
      eventEndDate: item.eventEndDate,
      eventEndTime: item.eventEndTime,
      venue: item.venue,
      city: item.city,
    });
  };

  const buttondeleteEvent = (item) => {
    setCamp({ id: item.id });
  };

  const deleteEvent = (e) => {
    buttondeleteEvent(camp.id);
    dispatch(deleteCampHandler(e))
      .then((response) => {
        toast.success(response.data);
        eventListHandler();
      })
      .catch((error) => {});
  };

  const updatingEvent = (e) => {
    handleClose();
    dispatch(updateCampHandler(camp))
      .then((response) => {
        toast.success(response.data);
        eventListHandler();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <Base>
      <div
        style={{
          background: "linear-gradient(135deg, #00b4db, #0083b0)",
          textAlign: "center",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ color: "#fff", fontFamily: "Arial, sans-serif" }}>Upcoming Events</h1>
      </div>
      <div>
        <Row>
          <Col>
            <Table
              striped
              hover
              style={{
                padding: "10px",
                textAlign: "center",
                border: "1px solid #ddd",
                borderRadius: "8px",
              }}
            >
              <thead style={{ backgroundColor: "#f8f9fa" }}>
                <tr>
                  <th>Event No.</th>
                  <th>Event Name</th>
                  <th>Description</th>
                  <th>Starting From</th>
                  <th>Ending on</th>
                  <th>Location</th>
                  <th>City</th>
                  <th colSpan={2}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.eventStartDate}</td>
                    <td>{item.eventEndDate}</td>
                    <td>{item.venue}</td>
                    <td>{item.city}</td>
                    <td>
                      <Button
                        className="btn-warning"
                        onClick={() => buttonUpdateEvent(item)}
                        style={{ fontWeight: "bold", padding: "8px 20px" }}
                      >
                        Update
                      </Button>
                    </td>
                    <td>
                      <Button
                        className="btn-danger"
                        onClick={() => deleteEvent(item.id)}
                        style={{ fontWeight: "bold", padding: "8px 20px" }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form method="put" className="signup">
            <FormGroup>
              <Row style={{ textAlign: "center" }}>
                <Col>
                  <label>Event Id</label>
                  <Input
                    style={{ textAlign: "center" }}
                    readOnly={"true"}
                    value={camp.id}
                  ></Input>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <label for="title">Event Title</label>
              <Input
                type="text"
                id="title"
                name="title"
                placeholder="Enter Event title here"
                onChange={(e) => handleChange(e, "title")}
                value={camp.title}
              />
            </FormGroup>

            <FormGroup>
              <label for="description">Description</label>
              <Input
                style={{ resize: "none" }}
                rows="4"
                type="textarea"
                id="description"
                name="description"
                placeholder="Write event description here"
                onChange={(e) => handleChange(e, "description")}
                value={camp.description}
              />
            </FormGroup>

            <Row>
              <Col>
                <FormGroup>
                  <label for="eventStartDate">Event Start Date</label>
                  <Input
                    type="date"
                    id="eventStartDate"
                    name="eventStartDate"
                    onChange={(e) => handleChange(e, "eventStartDate")}
                    value={camp.eventStartDate}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label for="eventStartTime">Event Start Time</label>
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
              <Col>
                <FormGroup>
                  <label for="eventEndDate">Event End Date</label>
                  <Input
                    type="date"
                    id="eventEndDate"
                    name="eventEndDate"
                    onChange={(e) => handleChange(e, "eventEndDate")}
                    value={camp.eventEndDate}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <label for="eventEndTime">Event End Time</label>
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
              <label for="venue">Event Venue</label>
              <Input
                type="text"
                id="venue"
                name="venue"
                placeholder="Write full address of event"
                onChange={(e) => handleChange(e, "venue")}
                value={camp.venue}
              />
            </FormGroup>

            <FormGroup>
              <Label for="city">Select City</Label>
              <Input
                onChange={(event) => handleChange(event, "city")}
                id="city"
                name="city"
                type="select"
                value={camp.city}
              >
                <option default>Choose a city</option>
                <option value="THANE">THANE</option>
                <option value="PUNE">PUNE</option>
                <option value="SURAT">SURAT</option>
                <option value="AHMEDABAD">AHMEDABAD</option>
              </Input>
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Container className="text-center mb-5">
            <Button className="btn-light" onClick={handleClose}>
              Close
            </Button>
            <Button
              type="button"
              className="btn-warning"
              onClick={updatingEvent}
              style={{ fontWeight: "bold", padding: "10px 20px" }}
            >
              Update Event
            </Button>
          </Container>
        </Modal.Footer>
      </Modal>
    </Base>
  );
}

export default UpcomingEvents;
