import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { GlassMagnifier } from "react-image-magnifiers";

const ProductDetailsPage = () => {
  return (
    <Container>
      <Row>
        <div className="card my-5 shadow">
          <div className="row g-0">
            <div className="col-md-6">
              <GlassMagnifier
                magnifierSize="35%"
                className="img-fluid rounded-start"
                imageSrc="https://img.freepik.com/free-photo/pink-sweater-front_125540-746.jpg?w=900&t=st=1660572636~exp=1660573236~hmac=fc611c9ba9b476b0a75c3d6ff8232f3d52d68e74cbb3452b1a6e0cd8cc4354b1"
                imageAlt="Example"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
