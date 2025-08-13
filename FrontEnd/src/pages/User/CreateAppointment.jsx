import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Label,
  Row,
} from "reactstrap";
import Base from "../../components/Base";
import { appointmentCreationhandler } from "../../Features/user/userSlice";
import image1 from "../../images/bloodbank_1.png";

const CreateAppointment = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    name: "",
    gender: "",
    age: "",
    doctorName: "",
    description: "",
    appointmentScheduleDate: "",
    center: "",
    bloodGroup: "",
    bagSize: "",
    bagQuantity: "",
    dateOfDonation: "",
  });

  const handleChange = (event, property) => {
    setAppointment({ ...appointment, [property]: event.target.value });
  };

  const resetData = () => {
    setAppointment({
      name: "",
      gender: "",
      age: "",
      doctorName: "",
      description: "",
      appointmentScheduleDate: "",
      center: "",
      bloodGroup: "",
      bagSize: "",
      bagQuantity: "",
      dateOfDonation: "",
    });
  };

  const submitAppointment = () => {
    dispatch(appointmentCreationhandler(appointment, id))
      .then((response) => {
        toast.success(response.data);
        navigate("/userhome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <Base>
      <div
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Container className="mb-5">
          <Row>
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="light" outline>
                <CardHeader className="text-center" style={{ backgroundColor: "#00bcd4" }}>
                  <h3 style={{ color: "white" }}>Create Appointment</h3>
                </CardHeader>

                <CardBody>
                  <form>
                    <FormGroup>
                      <Label for="name">Patient Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter patient name"
                        onChange={(e) => handleChange(e, "name")}
                        value={appointment.name}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label>Gender</Label>
                      <div>
                        <Input
                          type="radio"
                          name="gender"
                          value="MALE"
                          id="male"
                          onChange={(e) => handleChange(e, "gender")}
                          checked={appointment.gender === "MALE"}
                        />
                        <Label for="male" className="ms-2">Male</Label>
                        <Input
                          type="radio"
                          name="gender"
                          value="FEMALE"
                          id="female"
                          onChange={(e) => handleChange(e, "gender")}
                          checked={appointment.gender === "FEMALE"}
                        />
                        <Label for="female" className="ms-2">Female</Label>
                        <Input
                          type="radio"
                          name="gender"
                          value="OTHER"
                          id="other"
                          onChange={(e) => handleChange(e, "gender")}
                          checked={appointment.gender === "OTHER"}
                        />
                        <Label for="other" className="ms-2">Other</Label>
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <Label for="age">Age</Label>
                      <Input
                        type="number"
                        id="age"
                        name="age"
                        placeholder="Enter age"
                        onChange={(e) => handleChange(e, "age")}
                        value={appointment.age}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="doctorName">Doctor's Name</Label>
                      <Input
                        type="text"
                        id="doctorName"
                        name="doctorName"
                        placeholder="Enter doctor's name"
                        onChange={(e) => handleChange(e, "doctorName")}
                        value={appointment.doctorName}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="description">Description</Label>
                      <Input
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter description"
                        onChange={(e) => handleChange(e, "description")}
                        value={appointment.description}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="appointmentScheduleDate">Appointment Date</Label>
                      <Input
                        type="date"
                        id="appointmentScheduleDate"
                        name="appointmentScheduleDate"
                        onChange={(e) => handleChange(e, "appointmentScheduleDate")}
                        value={appointment.appointmentScheduleDate}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="center">Select Blood Center</Label>
                      <Input
                        type="select"
                        id="center"
                        name="center"
                        onChange={(e) => handleChange(e, "center")}
                        value={appointment.center}
                      >
                        <option>Select a center</option>
                        <option value="SURAT">Surat</option>
                        <option value="AHMEDABAD">Ahmedabad</option>
                        <option value="THANE">Thane</option>
                        <option value="PUNE">Pune</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bagSize">Select Bag Size (ml)</Label>
                      <Input
                        type="select"
                        id="bagSize"
                        name="bagSize"
                        onChange={(e) => handleChange(e, "bagSize")}
                        value={appointment.bagSize}
                      >
                        <option>Choose bag size</option>
                        <option value="150">150 ml</option>
                        <option value="350">350 ml</option>
                        <option value="500">500 ml</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bagQuantity">Bag Quantity</Label>
                      <Input
                        type="select"
                        id="bagQuantity"
                        name="bagQuantity"
                        onChange={(e) => handleChange(e, "bagQuantity")}
                        value={appointment.bagQuantity}
                      >
                        <option>Choose quantity</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bloodGroup">Select Blood Group</Label>
                      <Input
                        type="select"
                        id="bloodGroup"
                        name="bloodGroup"
                        onChange={(e) => handleChange(e, "bloodGroup")}
                        value={appointment.bloodGroup}
                      >
                        <option>Choose blood group</option>
                        <option value="O_positive">O+</option>
                        <option value="O_negative">O-</option>
                        <option value="AB_positive">AB+</option>
                        <option value="AB_negative">AB-</option>
                        <option value="A_positive">A+</option>
                        <option value="A_negative">A-</option>
                        <option value="B_positive">B+</option>
                        <option value="B_negative">B-</option>
                      </Input>
                    </FormGroup>

                    <Container className="text-center mt-4">
                      <Button
                        color="info"
                        onClick={submitAppointment}
                        style={{
                          fontSize: "18px",
                          padding: "10px 20px",
                          borderRadius: "30px",
                        }}
                      >
                        Take Appointment
                      </Button>
                      <Button
                        type="reset"
                        color="secondary"
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          padding: "10px 20px",
                          borderRadius: "30px",
                        }}
                      >
                        Reset
                      </Button>
                    </Container>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  );
};

export default CreateAppointment;
