import React, { useState } from "react";
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
  Label,
  Row,
} from "reactstrap";
import Base from "../../components/Base";
import { createBloodDonationHandler } from "../../Features/admin/adminSlice";
import image1 from "../../images/2.jpg";

const CreateUserBloodDonation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [blood, setBlood] = useState({
    bloodGroup: "",
    bagSize: "",
    bagQuantity: "",
    dateOfDonation: "",
    id: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setBlood({ ...blood, [property]: event.target.value });
  };

  const submitBlood = (e) => {
    dispatch(createBloodDonationHandler(blood.id, blood))
      .then((response) => {
        toast.success(response.data);
        navigate("/blooddonationhistory");
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
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <Container className="mb-5 mt-5">
          <Row className="mt-3">
            <Col sm={{ size: 8, offset: 2 }}>
              <Card color="dark" outline>
                <CardHeader className="bg-info text-white">
                  <Container className="text-center">
                    <h3>Create a Blood Donation</h3>
                  </Container>
                </CardHeader>

                <CardBody>
                  <form onSubmit={submitBlood}>
                    <Row>
                      <Col>
                        <FormGroup>
                          <Label for="id" className="text-primary">
                            Enter User ID
                          </Label>
                          <Input
                            onChange={(event) => handleChange(event, "id")}
                            id="id"
                            name="id"
                            type="number"
                            required
                          />
                        </FormGroup>
                      </Col>
                      <Col>
                        <FormGroup>
                          <Label for="bloodGroup" className="text-primary">
                            Select Blood Group Type
                          </Label>
                          <Input
                            onChange={(event) => handleChange(event, "bloodGroup")}
                            id="bloodGroup"
                            name="bloodGroup"
                            type="select"
                            required
                          >
                            <option default>Choose any</option>
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
                      </Col>
                    </Row>

                    <FormGroup>
                      <Label for="bagSize" className="text-primary">
                        Select Bag Size of the Received Blood (in ml)
                      </Label>
                      <Input
                        onChange={(event) => handleChange(event, "bagSize")}
                        id="bagSize"
                        name="bagSize"
                        type="select"
                        required
                      >
                        <option default>Choose any</option>
                        <option value="150">150</option>
                        <option value="350">350</option>
                        <option value="500">500</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="bagQuantity" className="text-primary">
                        Select Units of Blood Donated
                      </Label>
                      <Input
                        onChange={(event) => handleChange(event, "bagQuantity")}
                        id="bagQuantity"
                        name="bagQuantity"
                        type="select"
                        required
                      >
                        <option default>Choose any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Label for="dateOfDonation" className="text-primary">
                        Donation Date
                      </Label>
                      <Input
                        onChange={(event) => handleChange(event, "dateOfDonation")}
                        id="dateOfDonation"
                        name="dateOfDonation"
                        type="date"
                        required
                      />
                    </FormGroup>

                    <Container className="text-center mb-4">
                      <Button
                        type="submit"
                        color="info"
                        className="me-3"
                      >
                        Submit
                      </Button>
                      <Button type="reset" color="secondary">
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

export default CreateUserBloodDonation;
