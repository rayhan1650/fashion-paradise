import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "../../asset/css/custom.css";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <Container fluid className="my-5 p-0">
      <h2 className="text-center">Our Collections</h2>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="gy-5">
            <Card className="bg-dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/fashion-polo-shirt-men_74190-4858.jpg?w=900&t=st=1660548737~exp=1660549337~hmac=7ea5db1c7bea0ab13ecd18b6faf37f25e7028cc998b3ab161d0eb56c5b051af4"
              />
              <Card.Body className="text-white d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between">
                  <div>
                    <Badge bg="danger">BDT 999</Badge>
                    <small className="px-1 text-info fw-bold">Save 30%</small>
                  </div>

                  <Badge bg="secondary">
                    <s>BDT 1299</s>
                  </Badge>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="mt-auto ">
                  <Link to="/productDetails">
                    <Link to="/productDetails">
                      <button className="fw-bold glow-on-hover">Details</button>
                    </Link>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="gy-5">
            <Card className="bg-dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/fashion-polo-shirt-men_74190-4858.jpg?w=900&t=st=1660548737~exp=1660549337~hmac=7ea5db1c7bea0ab13ecd18b6faf37f25e7028cc998b3ab161d0eb56c5b051af4"
              />
              <Card.Body className="text-white d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between">
                  <div>
                    <Badge bg="danger">BDT 999</Badge>
                    <small className="px-1 text-info fw-bold">Save 30%</small>
                  </div>

                  <Badge bg="secondary">
                    <s>BDT 1299</s>
                  </Badge>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="mt-auto ">
                  <Link to="/productDetails">
                    <button className="fw-bold glow-on-hover">Details</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="gy-5">
            <Card className="bg-dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/fashion-polo-shirt-men_74190-4858.jpg?w=900&t=st=1660548737~exp=1660549337~hmac=7ea5db1c7bea0ab13ecd18b6faf37f25e7028cc998b3ab161d0eb56c5b051af4"
              />
              <Card.Body className="text-white d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between">
                  <div>
                    <Badge bg="danger">BDT 999</Badge>
                    <small className="px-1 text-info fw-bold">Save 30%</small>
                  </div>

                  <Badge bg="secondary">
                    <s>BDT 1299</s>
                  </Badge>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="mt-auto ">
                  <Link to="/productDetails">
                    <button className="fw-bold glow-on-hover">Details</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="gy-5">
            <Card className="bg-dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/fashion-polo-shirt-men_74190-4858.jpg?w=900&t=st=1660548737~exp=1660549337~hmac=7ea5db1c7bea0ab13ecd18b6faf37f25e7028cc998b3ab161d0eb56c5b051af4"
              />
              <Card.Body className="text-white d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between">
                  <div>
                    <Badge bg="danger">BDT 999</Badge>
                    <small className="px-1 text-info fw-bold">Save 30%</small>
                  </div>

                  <Badge bg="secondary">
                    <s>BDT 1299</s>
                  </Badge>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="mt-auto ">
                  <Link to="/productDetails">
                    <button className="fw-bold glow-on-hover">Details</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="gy-5">
            <Card className="bg-dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/fashion-polo-shirt-men_74190-4858.jpg?w=900&t=st=1660548737~exp=1660549337~hmac=7ea5db1c7bea0ab13ecd18b6faf37f25e7028cc998b3ab161d0eb56c5b051af4"
              />
              <Card.Body className="text-white d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between">
                  <div>
                    <Badge bg="danger">BDT 999</Badge>
                    <small className="px-1 text-info fw-bold">Save 30%</small>
                  </div>

                  <Badge bg="secondary">
                    <s>BDT 1299</s>
                  </Badge>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="mt-auto ">
                  <Link to="/productDetails">
                    <button className="fw-bold glow-on-hover">Details</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="gy-5">
            <Card className="bg-dark">
              <Card.Img
                variant="top"
                src="https://img.freepik.com/free-photo/fashion-polo-shirt-men_74190-4858.jpg?w=900&t=st=1660548737~exp=1660549337~hmac=7ea5db1c7bea0ab13ecd18b6faf37f25e7028cc998b3ab161d0eb56c5b051af4"
              />
              <Card.Body className="text-white d-flex flex-column">
                <div className="mb-2 d-flex justify-content-between">
                  <div>
                    <Badge bg="danger">BDT 999</Badge>
                    <small className="px-1 text-info fw-bold">Save 30%</small>
                  </div>

                  <Badge bg="secondary">
                    <s>BDT 1299</s>
                  </Badge>
                </div>

                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <div className="mt-auto ">
                  <Link to="/productDetails">
                    <button className="fw-bold glow-on-hover">Details</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Collections;
