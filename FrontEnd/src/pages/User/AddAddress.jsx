import { useState } from "react";
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
  Row,
} from "reactstrap";
import Base from "../../components/Base";
import { addAddresshandler } from "../../Features/user/userSlice";
import "../signup.css";

function AddAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const [address, setAddress] = useState({
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  const handleChange = (event, property) => {
    setAddress({ ...address, [property]: event.target.value });
  };

  const resetaddress = () => {
    setAddress({
      address: "",
      city: "",
      state: "",
      pincode: "",
    });
  };

  const submitForm = (e) => {
    dispatch(addAddresshandler(id, address))
      .then((response) => {
        toast.success(response.data);
        navigate("/getalladdresses");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div style={{ height: "100%", background: "linear-gradient(to bottom, #33ccff, #ff99cc)" }}>
      <Base>
        <Container className="mb-5">
          <Row className="mt-3">
            <Col sm={{ size: 6, offset: 3 }}>
              <Card color="light" outline style={{ borderRadius: "10px" }}>
                <CardHeader className="text-center" style={{ backgroundColor: "#ff66b2", color: "white" }}>
                  <h3>Fill Address Details</h3>
                </CardHeader>

                <CardBody>
                  <form onSubmit={submitForm} className="signup">
                    <FormGroup>
                      <label htmlFor="address">Enter Full Address</label>
                      <Input
                        type="textarea"
                        rows="4"
                        id="address"
                        name="address"
                        placeholder="Enter full address"
                        onChange={(e) => handleChange(e, "address")}
                        value={address.address}
                        style={{ borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="city">City</label>
                      <Input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter city"
                        onChange={(e) => handleChange(e, "city")}
                        value={address.city}
                        style={{ borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="pincode">Pincode</label>
                      <Input
                        type="number"
                        id="pincode"
                        name="pincode"
                        placeholder="Enter your pincode"
                        onChange={(e) => handleChange(e, "pincode")}
                        value={address.pincode}
                        style={{ borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <label htmlFor="state">State</label>
                      <Input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="Enter state"
                        onChange={(e) => handleChange(e, "state")}
                        value={address.state}
                        style={{ borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }}
                      />
                    </FormGroup>

                    <Container className="text-center">
                      <Button
                        color="info"
                        type="submit"
                        style={{
                          borderRadius: "20px",
                          padding: "10px 30px",
                          fontSize: "16px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        Add Address
                      </Button>
                      <Button
                        type="reset"
                        color="secondary"
                        className="ms-4"
                        style={{
                          borderRadius: "20px",
                          padding: "10px 30px",
                          fontSize: "16px",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                        onClick={resetaddress}
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
      </Base>
    </div>
  );
}

export default AddAddress;
