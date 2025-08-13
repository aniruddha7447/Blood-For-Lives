import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";
import { Table } from "reactstrap";

import Base from "../../components/Base";
import { getDonationHistoryHandler } from "../../Features/user/userSlice";

export const DonationHistory = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.persist.user.id);

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getDonationHistoryHandler(id))
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        toast.error("Oops, your donation history is empty!!");
      });
  }, []);

  return (
    <Base>
      <div
        style={{
          backgroundColor: "#00bcd4",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ color: "white", fontWeight: "bold" }}>Blood Donation History</h1>
      </div>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="shadow-sm">
              <MDBCardBody>
                <Table
                  striped
                  hover
                  style={{
                    textAlign: "center",
                    borderCollapse: "collapse",
                    width: "100%",
                  }}
                >
                  <thead style={{ backgroundColor: "#f8f9fa" }}>
                    <tr>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Id</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Blood Sample ID</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Blood Group</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Bag Size (ml)</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Bag Quantity</th>
                      <th style={{ padding: "10px", border: "1px solid #ddd" }}>Donation Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.id}</td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                          {item.user.firstName} {item.user.lastName}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                          {item.bloodSampleId}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                          {item.bloodGroup}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                          {item.bagSize}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                          {item.bagQuantity}
                        </td>
                        <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                          {item.dateOfDonation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Base>
  );
};
