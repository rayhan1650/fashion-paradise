import React from "react";
import "./NotFound.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="page_404">
      <Container fluid>
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-10 col-sm-offset-1  text-center mx-auto">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>
              </div>

              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link to="/home" class="link_404 text-decoration-none">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NotFound;
