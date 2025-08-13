import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Container, Row, Col } from "reactstrap";
import Base from "../../components/Base";
import { getAppointmentHistoryhandler } from "../../Features/user/userSlice";

function AppointmentHistory() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAppointmentHistoryhandler(id))
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  }, [id, dispatch]);

  return (
    <Base>
      <div
        style={{
          background: "linear-gradient(135deg, #56ccf2, #6e7dff)",
          textAlign: "center",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#fff", fontSize: "36px", fontWeight: "600" }}>
          Appointment History
        </h1>
      </div>
      <Container className="mt-5">
        <Row>
          <Col sm="12">
            <Table
              striped
              hover
              responsive
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#f2f2f2",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                <tr>
                  <th>Id</th>
                  <th>Appointment Creation Date</th>
                  <th>Appointment Schedule Date</th>
                  <th>Status</th>
                  <th>Patient Name</th>
                  <th>Blood Group</th>
                  <th>Bag Size (ml)</th>
                  <th>Bag Quantity</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.appointmentCreationDate}</td>
                    <td>{item.appointmentScheduleDate}</td>
                    <td>
                      {item.status.includes("REJECTED") && (
                        <Button
                          className="btn-danger"
                          style={{ fontSize: "14px", borderRadius: "20px" }}
                        >
                          {item.status}
                        </Button>
                      )}
                      {item.status.includes("PENDING") && (
                        <Button
                          className="btn-warning"
                          style={{ fontSize: "14px", borderRadius: "20px" }}
                        >
                          {item.status}
                        </Button>
                      )}
                      {item.status.includes("APPROVED") && (
                        <Button
                          className="btn-success"
                          style={{ fontSize: "14px", borderRadius: "20px" }}
                        >
                          {item.status}
                        </Button>
                      )}
                    </td>
                    <td>{item.patient.name}</td>
                    <td>{item.bloodGroup}</td>
                    <td>{item.bagSize}</td>
                    <td>{item.bagQuantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default AppointmentHistory;
