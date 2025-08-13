import React, { useEffect, useState } from "react";
import Base from "../../components/Base";
import { Table, Container, Row, Col, Card, CardBody } from "reactstrap";
import { getAllDonationHistoryHandler } from "../../Features/admin/adminSlice";
import { useDispatch } from "react-redux";

export const BloodDonationHistory = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    bloodStockHandler();
  }, []);

  const bloodStockHandler = () => {
    dispatch(getAllDonationHistoryHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  return (
    <Base>
      <Container className="mt-5">
        <Row>
          <Col sm={12}>
            <Card className="shadow-lg rounded-lg">
              <CardBody>
                <div className="text-center mb-4">
                  <h2 className="text-primary font-weight-bold">All Blood Donations</h2>
                </div>

                <Table
                  striped
                  hover
                  responsive
                  style={{
                    textAlign: "center",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <thead className="bg-light">
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Blood Sample ID</th>
                      <th>Blood Group</th>
                      <th>Bag Size (ml)</th>
                      <th>Bag Quantity</th>
                      <th>Donation Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user.firstName} {item.user.lastName}</td>
                        <td>{item.bloodSampleId}</td>
                        <td>{item.bloodGroup}</td>
                        <td>{item.bagSize}</td>
                        <td>{item.bagQuantity}</td>
                        <td>{item.dateOfDonation}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default BloodDonationHistory;
