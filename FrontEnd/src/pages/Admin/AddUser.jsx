import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
import { addUserByAdminHandler } from "../../Features/admin/adminSlice";
import "../signup.css";
import { motion } from "framer-motion";

function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    age: "",
    gender: "",
    documentType: "",
    uniqueIdNumber: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setUser({ ...user, [property]: event.target.value });
  };

  const resetUser = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      age: "",
      gender: "",
      documentType: "",
      uniqueIdNumber: "",
    });
  };

  const submitForm = (e) => {
    dispatch(addUserByAdminHandler(user))
      .then((response) => {
        toast.success(response.data);
        navigate("/adminhome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="signupBackground">
      <Base>
        <Container className="mb-5 mt-5">
          <Row className="mt-4">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card className="shadow-lg rounded">
                <CardHeader className="text-center bg-primary text-white py-3">
                  <h3>Register New User</h3>
                </CardHeader>

                <CardBody>
                  <form className="signup">
                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <Label for="firstName">First Name</Label>
                          <Input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your first name"
                            onChange={(e) => handleChange(e, "firstName")}
                            value={user.firstName}
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <Label for="lastName">Last Name</Label>
                          <Input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Enter your last name"
                            onChange={(e) => handleChange(e, "lastName")}
                            value={user.lastName}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <Label for="email">Email ID</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => handleChange(e, "email")}
                            value={user.email}
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <Label for="contactNo">Contact No</Label>
                          <Input
                            type="text"
                            id="contactNo"
                            name="contactNo"
                            placeholder="Enter your contact number"
                            onChange={(e) => handleChange(e, "contactNo")}
                            value={user.contactNo}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={6}>
                        <FormGroup>
                          <Label for="age">Age</Label>
                          <Input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            onChange={(e) => handleChange(e, "age")}
                            value={user.age}
                          />
                        </FormGroup>
                      </Col>

                      <Col sm={6}>
                        <FormGroup>
                          <Label for="gender">Gender</Label>
                          <div className="d-flex justify-content-between">
                            <div>
                              <Input
                                type="radio"
                                name="gender"
                                value="MALE"
                                id="male"
                                onChange={(e) => handleChange(e, "gender")}
                                checked={user.gender === "MALE"}
                              />
                              <Label for="male">Male</Label>
                            </div>
                            <div>
                              <Input
                                type="radio"
                                name="gender"
                                value="FEMALE"
                                id="female"
                                onChange={(e) => handleChange(e, "gender")}
                                checked={user.gender === "FEMALE"}
                              />
                              <Label for="female">Female</Label>
                            </div>
                            <div>
                              <Input
                                type="radio"
                                name="gender"
                                value="OTHER"
                                id="other"
                                onChange={(e) => handleChange(e, "gender")}
                                checked={user.gender === "OTHER"}
                              />
                              <Label for="other">Other</Label>
                            </div>
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for="documentType">Identity Proof Type</Label>
                      <Input
                        type="select"
                        id="documentType"
                        name="documentType"
                        onChange={(e) => handleChange(e, "documentType")}
                        value={user.documentType}
                      >
                        <option defaultValue>Choose ID Type</option>
                        <option value="AADHAR_CARD">Aadhar Card</option>
                        <option value="VOTER_ID">Voter ID</option>
                        <option value="PAN_CARD">Pan Card</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="uniqueIdNumber">Identity Document ID</Label>
                      <Input
                        type="text"
                        id="uniqueIdNumber"
                        name="uniqueIdNumber"
                        placeholder="Enter your identity document number"
                        onChange={(e) => handleChange(e, "uniqueIdNumber")}
                        value={user.uniqueIdNumber}
                      />
                    </FormGroup>

                    <Container className="text-center mb-5">
                      <motion.div whileTap={{ scale: 0.92 }} style={{ display: 'inline-block' }}>
                        <Button
                          color="primary"
                          type="button"
                          onClick={submitForm}
                          className="me-3"
                          style={{ minWidth: 140, fontWeight: 600, borderRadius: 30, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', background: 'linear-gradient(90deg, #e53935 0%, #1976d2 100%)', border: 'none' }}
                        >
                          Add User
                        </Button>
                      </motion.div>
                      <motion.div whileTap={{ scale: 0.92 }} style={{ display: 'inline-block' }}>
                        <Button
                          type="reset"
                          color="secondary"
                          onClick={resetUser}
                          className="ms-3"
                          style={{ minWidth: 120, fontWeight: 600, borderRadius: 30, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', background: 'linear-gradient(90deg, #757575 0%, #bdbdbd 100%)', border: 'none' }}
                        >
                          Reset
                        </Button>
                      </motion.div>
                    </Container>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
}

export default AddUser;
