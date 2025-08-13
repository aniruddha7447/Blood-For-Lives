import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";
import {
  approveRejectAppointmentsHendler,
  getPendingAppointmenthandler,
} from "../../Features/admin/adminSlice";

function PendingAppointments() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    appointmentHandler();
  }, []);

  const appointmentHandler = () => {
    dispatch(getPendingAppointmenthandler())
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  };

  // Optimistic Approve
  const approve = (item) => {
    setData((prev) => prev.filter((a) => a.id !== item.id));
    let payload = { id: item.id, status: "APPROVED" };
    dispatch(approveRejectAppointmentsHendler(payload))
      .then(() => {
        appointmentHandler();
      })
      .catch(() => {
        appointmentHandler();
      });
  };

  // Optimistic Reject
  const reject = (item) => {
    setData((prev) => prev.filter((a) => a.id !== item.id));
    let payload = { id: item.id, status: "REJECTED" };
    dispatch(approveRejectAppointmentsHendler(payload))
      .then(() => {
        appointmentHandler();
      })
      .catch(() => {
        appointmentHandler();
      });
  };

  return (
    <Base>
      <div>
        {/* Title */}
        <div
          style={{
            background: "linear-gradient(to right, #ffb6c1, #ff8a80)",
            textAlign: "center",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
            Pending Appointments
          </h1>
        </div>

        {/* Table */}
        <Row>
          <Col>
            <Table
              striped
              hover
              style={{
                padding: "1px",
                textAlign: "center",
                border: "2px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fffaf0",
              }}
            >
              <thead style={{ backgroundColor: "#f1f3f5" }}>
                <tr>
                  <th>Appointment Id</th>
                  <th>Name</th>
                  <th>Appointment Schedule Date</th>
                  <th colSpan={2} style={{ textAlign: "center" }}>
                    Action
                  </th>
                  <th>Blood Group</th>
                  <th>Patient Name</th>
                  <th>Bag Size (in ml)</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id}
                    style={{
                      backgroundColor: "#fff3cd", // pending row highlight
                    }}
                  >
                    <td style={{ textAlign: "center", height: 70 }}>
                      {item.id}
                    </td>
                    <td>{item.user.firstName}</td>
                    <td style={{ textAlign: "center" }}>
                      {item.appointmentScheduleDate}
                    </td>
                    <td>
                      <Button
                        onClick={() => approve(item)}
                        style={{
                          backgroundColor: "#006400", // darker green
                          borderColor: "#004d00",
                          fontWeight: "bold",
                          padding: "8px 20px",
                          borderRadius: "5px",
                          color: "white",
                        }}
                      >
                        Approve
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => reject(item)}
                        style={{
                          backgroundColor: "#b30000", // darker red
                          borderColor: "#800000",
                          fontWeight: "bold",
                          padding: "8px 20px",
                          borderRadius: "5px",
                          color: "white",
                        }}
                      >
                        Reject
                      </Button>
                    </td>
                    <td>{item.bloodGroup}</td>
                    <td>{item.patient.name}</td>
                    <td style={{ textAlign: "center" }}>{item.bagSize}</td>
                    <td style={{ textAlign: "center" }}>{item.bagQuantity}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Base>
  );
}

export default PendingAppointments;
