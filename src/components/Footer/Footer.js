import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Container fluid className="mt-5 bg-dark text-white">
        <Row>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Follow Me</h2>
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/nurmohammad.rayhan.9/"
            >
              <FaFacebook /> Facebook
            </a>
            <br />
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/"
            >
              <FaYoutube className="text-danger" /> YouTube
            </a>
            <br />
            <a
              className="text-decoration-none"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/"
            >
              <AiOutlineInstagram className="myBootstrap text-white " />{" "}
              Instagram
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-5 ps-5">
            <h2>Address</h2>
            <p className="mb-0 text-secondary">My address</p>
            <small className="text-secondary">
              <MdEmail className="me-1" />
              email@gmail.com
            </small>
            <br />
            <small className="text-secondary">
              <MdCall className="me-1" />
              016673743
            </small>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Information</h2>
            <a className="text-decoration-none text-secondary" to="/about">
              About Me
            </a>
            <br />
            <a className="text-decoration-none text-secondary" to="/contact">
              Contact Me
            </a>
          </Col>
          <Col lg={3} md={6} sm={12} className="p-5">
            <h2>Legal</h2>
            <a className="text-decoration-none text-secondary" to="/refund">
              Refund Policy
            </a>
            <br />
            <a className="text-decoration-none text-secondary" to="/terms">
              Terms and Condition
            </a>
            <br />
            <a className="text-decoration-none text-secondary" to="/privacy">
              Privacy Policy
            </a>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center bg-secondary py-3 text-white">
        <small>@kdfdkldl</small>
      </Container>
    </div>
  );
};

export default Footer;
