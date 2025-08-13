import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table, Container, Card, CardBody } from "reactstrap";
import Base from "../../components/Base";
import { getAllAppointmentHistoryHandler } from "../../Features/admin/adminSlice";

function AllAppointment() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    appointmentHandler();
  }, []);

  const appointmentHandler = () => {
    dispatch(getAllAppointmentHistoryHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  };

  return (
    <Base>
      <Container className="mt-4 mb-5">
        <Row>
          <Col sm={12}>
            <Card className="shadow-lg rounded-lg">
              <CardBody>
                <div className="text-center mb-4">
                  <h2 className="text-primary font-weight-bold">
                    All Appointments
                  </h2>
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
                      <th>Appointment Id</th>
                      <th>Name</th>
                      <th>Appointment Schedule Date</th>
                      <th>Blood Group</th>
                      <th>Patient Name</th>
                      <th>Bag Size (ml)</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.user.firstName}</td>
                        <td>{item.appointmentScheduleDate}</td>
                        <td>{item.bloodGroup}</td>
                        <td>{item.patient.name}</td>
                        <td>{item.bagSize}</td>
                        <td>
                          {item.status.includes("REJECTED") && (
                            <Button
                              style={{
                                backgroundColor: "#b30000", // darker red
                                borderColor: "#800000",
                                fontWeight: "bold",
                                padding: "8px 16px",
                                color: "white",
                              }}
                            >
                              {item.status}
                            </Button>
                          )}
                          {item.status.includes("PENDING") && (
                            <Button
                              style={{
                                backgroundColor: "#cc7a00", // darker amber
                                borderColor: "#995c00",
                                fontWeight: "bold",
                                padding: "8px 16px",
                                color: "white",
                              }}
                            >
                              {item.status}
                            </Button>
                          )}
                          {item.status.includes("APPROVED") && (
                            <Button
                              style={{
                                backgroundColor: "#006400", // darker green
                                borderColor: "#004d00",
                                fontWeight: "bold",
                                padding: "8px 16px",
                                color: "white",
                              }}
                            >
                              {item.status}
                            </Button>
                          )}
                        </td>
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
}

export default AllAppointment;
