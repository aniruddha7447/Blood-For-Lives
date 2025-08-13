import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Form, Input, Label, Row, Card, CardBody } from "reactstrap";
import Base from "../../components/Base";
import {
  getBloodStockHandler,
  submitUpdateStockHandler
} from "../../Features/admin/adminSlice";
import "./bloodStock.css";

function BloodStock() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [show, setShow] = useState();
  const navigate = useNavigate();
  const [isshowHideBloodUpdate, setIsshowHideBloodUpdate] = useState(false);
  const [bloodData, setBloodData] = useState({
    bloodGroup: "",
    bloodSize: "",
    bloodQuantity: "",
  });

  const handleChange = (event, property) => {
    setBloodData({ ...bloodData, [property]: event.target.value });
  };

  useEffect(() => {
    bloodStockHandler();
  }, []);

  const bloodStockHandler = () => {
    dispatch(getBloodStockHandler())
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {});
  };

  const showHideBloodUpdate = () => {
    setIsshowHideBloodUpdate(true);
  };

  const submitUpdateStock = (e) => {
    dispatch(submitUpdateStockHandler(bloodData))
      .then((response) => {
        toast.success(response.data);
        setIsshowHideBloodUpdate(false);
        bloodStockHandler();
        navigate("/adminhome");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div>
      <Base>
        <Row
          className="bg-primary text-white p-3 text-center rounded"
        >
          <Col lg={10}>
            <h1>Available Blood Stock</h1>
          </Col>
          <Col className="ms-2 mt-2">
            <Button onClick={showHideBloodUpdate} color="warning">
              Update Blood Stock
            </Button>
          </Col>
        </Row>

        {isshowHideBloodUpdate && (
          <Form className="form-control mt-5 mb-5 ms-5">
            <Row>
              <Col>
                <Label for="bloodGroup">Select Blood Group Type</Label>
                <Input
                  onChange={(event) => {
                    handleChange(event, "bloodGroup");
                  }}
                  id="bloodGroup"
                  name="bloodGroup"
                  type="select"
                >
                  <option>Choose any</option>
                  <option value="O_positive">O+</option>
                  <option value="O_negative">O-</option>
                  <option value="AB_positive">AB+</option>
                  <option value="AB_negative">AB-</option>
                  <option value="A_positive">A+</option>
                  <option value="A_negative">A-</option>
                  <option value="B_positive">B+</option>
                  <option value="B_negative">B-</option>
                </Input>
              </Col>
              <Col>
                <Label for="bagSize">Select Bag Size (in ml)</Label>
                <Input
                  onChange={(event) => {
                    handleChange(event, "bagSize");
                  }}
                  id="bagSize"
                  name="bagSize"
                  type="select"
                >
                  <option>Choose any</option>
                  <option value="150">150</option>
                  <option value="350">350</option>
                  <option value="500">500</option>
                </Input>
              </Col>
              <Col>
                <Label for="bagQuantity">Select Units of Blood Donated</Label>
                <Input
                  onChange={(event) => {
                    handleChange(event, "bagQuantity");
                  }}
                  id="bagQuantity"
                  name="bagQuantity"
                  type="number"
                />
              </Col>
              <Col className="d-flex justify-content-center align-items-center mt-4">
                <Button
                  onClick={submitUpdateStock}
                  className="btn-warning"
                  type="button"
                >
                  Update Now
                </Button>
              </Col>
            </Row>
          </Form>
        )}

        <div className="d-flex flex-wrap justify-content-center mt-5">
          {data
            .filter((bloodStockdata) => bloodStockdata.bagQuantity > 0) 
            .map((bloodStockdata) => {
              return (
                <Card
                  key={bloodStockdata.id}
                  className="col-3 m-3 shadow-lg rounded"
                  style={{
                    padding: 20,
                    position: "relative",
                    cursor: "pointer",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <CardBody>
                    <h5 className="card-title">
                      <small className="text-muted">Blood Group: </small>
                      {bloodStockdata.bloodGroup}
                    </h5>
                    <h5 className="card-title">
                      <small className="text-muted">Bag Size: </small>
                      {bloodStockdata.bagSize} ml
                    </h5>
                    <h5 className="card-title">
                      <small className="text-muted">Bag Quantity: </small>
                      {bloodStockdata.bagQuantity}
                    </h5>
                    <h5 className="card-title">
                      <small className="text-muted">Updated On: </small>
                      {bloodStockdata.lastUpdatedDate}
                    </h5>
                  </CardBody>
                </Card>
              );
            })}
        </div>
      </Base>
    </div>
  );
}

export default BloodStock;
