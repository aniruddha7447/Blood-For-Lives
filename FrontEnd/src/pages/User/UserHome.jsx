import {
  MDBBreadcrumb,
  MDBBreadcrumbItem, MDBCard, MDBCardBody,
  MDBCardImage, MDBCardText, MDBCol,
  MDBContainer,
  MDBRow
} from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import Base from "../../components/Base";

const UserHome = () => {
  let userDetails = useSelector((state) => state.persist.user);
  return (
    <Base>
      <section style={{ backgroundColor: "#f1f1f1", padding: "40px 0" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href="/">Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4 shadow-sm">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src={`https://cdn-icons-png.flaticon.com/512/599/599305.png`}
                    alt="profilePic"
                    className="rounded-circle"
                    style={{ width: "150px", border: "5px solid #00bcd4" }}
                    fluid
                  />
                  <h4 className="text-dark mb-1">{userDetails.firstName} {userDetails.lastName}</h4>
                  <p className="text-muted">{userDetails.role}</p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4 shadow-sm">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userDetails.email}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Phone</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userDetails.contactNo}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Gender</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userDetails.gender}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />

                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        {userDetails.age}
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </Base>
  );
};

export default UserHome;
