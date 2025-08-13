import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";
import { getUserListHandler } from "../../Features/admin/adminSlice";

function ListAllUsers() {
  const [buttonValue, setButtonValue] = useState("");
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    userListHandler();
  }, []);

  const userListHandler = () => {
    dispatch(getUserListHandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  return (
    <Base>
      <div
        style={{
          background: "linear-gradient(to right, #4987eaff, #c2e9fb)",
          textAlign: "center",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h1 style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
          Registered Users
        </h1>
      </div>

      <div className="mb-5" style={{ marginBottom: "20px" }}>
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
              }}
            >
              <thead style={{ backgroundColor: "#278ef6ff" }}>
                <tr>
                  <th>User ID</th>
                  <th style={{ width: 120 }}>User Name</th>
                  <th>Email ID</th>
                  <th>Contact number</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Identity Proof Type</th>
                  <th>Id Card Number</th>
                  <th>Verification Status</th>
                </tr>
              </thead>

              <tbody>
                {data.map((userdata) => {
                  return (
                    <tr key={userdata.id}>
                      <td>{userdata.user.id}</td>
                      <td style={{ width: 120 }}>
                        {userdata.user.firstName} {userdata.user.lastName}
                      </td>

                      <td>{userdata.user.email}</td>
                      <td>{userdata.user.contactNo}</td>
                      <td>{userdata.user.age}</td>
                      <td>{userdata.user.gender}</td>
                      <td>{userdata.documentType}</td>
                      <td>{userdata.uniqueIdNumber}</td>
                      <td>
                        {userdata.status.includes("REJECTED") && (
                          <Button
                            style={{
                              backgroundColor: "#b30000", // darker red
                              borderColor: "#800000",
                              fontWeight: "bold",
                              padding: "8px 16px",
                              color: "white",
                            }}
                          >
                            {userdata.status}
                          </Button>
                        )}
                        {userdata.status.includes("PENDING") && (
                          <Button
                            style={{
                              backgroundColor: "#cc7a00", // darker amber
                              borderColor: "#995c00",
                              fontWeight: "bold",
                              padding: "8px 16px",
                              color: "white",
                            }}
                          >
                            {userdata.status}
                          </Button>
                        )}
                        {userdata.status.includes("APPROVED") && (
                          <Button
                            style={{
                              backgroundColor: "#006400", // darker green
                              borderColor: "#004d00",
                              fontWeight: "bold",
                              padding: "8px 16px",
                              color: "white",
                            }}
                          >
                            {userdata.status}
                          </Button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Base>
  );
}

export default ListAllUsers;
