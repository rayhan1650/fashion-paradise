import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../asset/css/custom.css";

const TopBanner = () => {
  return (
    <Container fluid className="topFixedBanner p-0">
      <div className="topBannerOverlay">
        <Container className="topContent">
          <Row>
            <Col className="text-white text-center">
              <h1 className="topTitle">Hello World</h1>
              <h4 className="topSubTitle">Hello world</h4>
              <Button variant="primary">More Info</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default TopBanner;
