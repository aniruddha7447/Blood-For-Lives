import React from "react";
import Base from "../../components/Base";
import BloodStock from "./BloodStock";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

function AdminHome() {
  return (
    <Base>
      <Container className="mt-5 mb-5">
        <Row>
          <Col sm={12}>
            <Card className="shadow-lg rounded">
              <CardBody>
                <h3 className="text-center mb-4 text-primary">Admin Dashboard</h3>
                <BloodStock />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
}

export default AdminHome;
