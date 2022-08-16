import React, { useState } from "react";
import { Container, Row, Form, Button, Modal } from "react-bootstrap";
import { GlassMagnifier } from "react-image-magnifiers";
import "./ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleShow();
  };
  return (
    <Container>
      <Row className="mx-1">
        <div className="card my-5 p-0 shadow">
          <div className="row g-0">
            <div className="col-md-6">
              <GlassMagnifier
                magnifierSize="35%"
                className="img-fluid rounded-start"
                imageSrc="https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1660572636~exp=1660573236~hmac=fc611c9ba9b476b0a75c3d6ff8232f3d52d68e74cbb3452b1a6e0cd8cc4354b1"
                imageAlt="Example"
              />
            </div>
            <div className="col-md-6 bg-dark text-white">
              <div className="card-body">
                <h4 className="card-title text-info">
                  McLaren 2022 summer new men's t-shirts
                </h4>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <ul>
                  <li>100% cotton</li>
                  <li>Size: M, L, XL, 2XL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className="myForm mx-auto border shadow py-4">
        <h2 className="text-center text-info pb-3">
          Submit your info for placing order
        </h2>
        <Form onSubmit={handleSubmit}>
          {/* product Name  */}
          <Form.Group className="mb-3" controlId="formBasicProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          {/* product quantity  */}
          <Form.Group className="mb-3" controlId="formBasicProductQuantity">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity of product"
            />
          </Form.Group>

          {/* product size  */}
          <Form.Group className="mb-3" controlId="formBasicProductSize">
            <Form.Label>Product size</Form.Label>
            <Form.Control type="text" placeholder="Enter size of product" />
          </Form.Group>

          {/* customer email  */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          {/* customer phone no  */}
          <Form.Group className="mb-3" controlId="formBasicPhoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>

          <Button variant="info" type="submit">
            Place Order
          </Button>
        </Form>

        {/* modal  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Information submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            We received your order. For confirmation we will contact you soon.
            Thank You.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
