import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row, Table } from "reactstrap";
import Base from "../../components/Base";

import {
  approveRejectIdproofHendler,
  getPendingIdproofhandler,
} from "../../Features/admin/adminSlice";

export const PendingUserVerification = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    idVerificationHandler();
  }, []);

  const [data, setData] = useState([]);

  const idVerificationHandler = () => {
    dispatch(getPendingIdproofhandler())
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {});
  };

  const approve = (item) => {
    let param = {
      status: "APPROVED",
    };
    dispatch(approveRejectIdproofHendler(param, item.user.id))
      .then(() => {
        idVerificationHandler();
      })
      .catch(() => {});
  };

  const reject = (item) => {
    let param = {
      status: "REJECTED",
    };
    dispatch(approveRejectIdproofHendler(param, item.user.id))
      .then(() => {
        idVerificationHandler();
      })
      .catch(() => {});
  };

  return (
    <Base>
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
          Pending User Verification
        </h1>
      </div>
      <div>
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
              <thead style={{ backgroundColor: "#f1f3f5" }}>
                <tr>
                  <th>User Id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Id</th>
                  <th>Identity Proof Type</th>
                  <th>Id Card Number</th>
                  <th colSpan={2} style={{ textAlign: "center" }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.user.id}</td>
                    <td>{item.user.firstName}</td>
                    <td>{item.user.lastName}</td>
                    <td>{item.user.email}</td>
                    <td>{item.documentType}</td>
                    <td>{item.uniqueIdNumber}</td>
                    <td>
                      <div>
                        <Button
                          onClick={() => approve(item)}
                          style={{
                            backgroundColor: "#006400", // darker green
                            borderColor: "#004d00",
                            color: "white",
                            padding: "8px 20px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          Approve
                        </Button>
                      </div>
                    </td>
                    <td>
                      <div>
                        <Button
                          onClick={() => reject(item)}
                          style={{
                            backgroundColor: "#b30000", // darker red
                            borderColor: "#800000",
                            color: "white",
                            padding: "8px 20px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </Base>
  );
};
