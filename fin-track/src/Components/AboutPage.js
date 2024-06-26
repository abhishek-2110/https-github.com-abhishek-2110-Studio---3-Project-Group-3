import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavbar from "./mainNavbar";
import { Link } from "react-router-dom";
import "../CSS/AboutPage.css";
 import ourScope from "../Images/about.jpeg";
 import support from "../Images/support.jpg";
 import money from "../Images/9834606.jpg";
 import join from "../Images/join.jpg";

function About() {
  return (
    <div>
      <MainNavbar />
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-center pr-5">
            <h1 className="display-1">About Our Site</h1>

            <p>
              Expense tracking made simple, so you can focus on what matters!
            </p>

            <Link to="/register" className="btn custom-btn-outline">
              Use It Now!
            </Link>
          </Col>
          <Col md={6} className="d-flex align-self-center justify-content-end">
            <img
               src={ourScope}
              alt="..."
              className="rounded img-fluid w-auto mx-auto about-image"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ margin: "20px 0" }}
        >
          <Col style={{ padding: "0 15px" }}>
            <div
              className="card"
              style={{
                backgroundColor: "#fff",
                margin: "20px 0",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                 src={join}
                className="img-fluid img-thumbnail"
                style={{
                  width: "100px",
                  height: "auto",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Join Now</h5>
                <p className="card-text">
                  Ready to take control of your finances? Join us now to track
                  expenses, manage budgets, and achieve financial goals.
                </p>
              </div>
            </div>
          </Col>
          <Col style={{ padding: "0 15px" }}>
            <div
              className="card"
              style={{
                backgroundColor: "#fff",
                margin: "20px 0",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={money} className="img-fluid img-thumbnail"
                style={{
                  width: "100px",
                  height: "auto",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Empower Your Financial Journey With Us
                </h5>
                <p className="card-text">
                  Join us for financial freedom. Together, let's thrive!
                </p>
              </div>
            </div>
          </Col>
          <Col style={{ padding: "0 15px" }}>
            <div
              className="card"
              style={{
                backgroundColor: "#fff",
                margin: "20px 0",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={support} className="img-fluid img-thumbnail"
                style={{
                  width: "100px",
                  height: "auto",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">Contact our Support Team</h5>
                <p className="card-text">
                  Have questions? <br />
                  Contact us at{" "}
                  <a href="mailto:supportfintrackteam@gmail.com">
                    supportfintrackteam@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
