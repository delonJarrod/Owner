import React from "react";
import classes from "./CV.module.css";
import { Container, Row, Col } from "react-bootstrap";
import CVDoc from "../files/CV_Jarrod_2021_Aug.pdf";
import Card from "../ui/Card";
import { BsPhone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";

function CV() {
  return (
    <section className={classes.CV}>
      <div className="d-flex">
        <Container fluid>
          <Row>
            <Col className="mt-5 col-sm-5">
              <div className={classes.card}>
                <Card className={classes.card}>
                  <div className="m-5 pb-5 ">
                    <div className="m-5 border-bottom border-dark">
                      <h1 className="mt-5 pt-5 text-center">Contact</h1>
                    </div>
                    <div>
                      <h5>
                        <i>
                          <BsPhone />
                        </i>
                        <b> Phone:</b>
                        <a href="tel:0711968195" className={classes.contact}>
                          {" "}
                          071 196 8195
                        </a>
                      </h5>

                      <h5>
                        <i>
                          <BsEnvelope />
                        </i>
                        <b> Email:</b>
                        <a
                          href="mailto: delonjarrod1307@gmail.com"
                          className={classes.contact}
                        >
                          {" "}
                          Email Me here
                        </a>
                      </h5>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col className={classes.socials}>
              <Row className="col mt-4 text-center">
                <Col>
                  <a
                    className={classes.facebook}
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/jarrod.naidoo.18"
                  >
                    <i
                      className="fab fa-facebook fa-3x green pr-3"
                      aria-hidden="false"
                    />
                  </a>
                </Col>
                <Col>
                  <a
                    className={classes.instagram}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/jarrod_thatguy/"
                  >
                    <i
                      className="fab fa-instagram fa-3x green pr-3"
                      aria-hidden="true"
                    />
                  </a>
                </Col>
                <Col>
                  <span>
                    <a
                      className={classes.twitter}
                      rel="noreferrer"
                      href="https://github.com/delonJarrod"
                      target="_blank"
                    >
                      <i className="fab fa-git fa-3x green" />
                    </a>
                  </span>
                </Col>
                <Col>
                  <span>
                    <a
                      className={classes.twitter}
                      rel="noreferrer"
                      href=" https://linkedin.com/in/delon-jarrod-naidoo-131299191"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin fa-3x green" />
                    </a>
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-5 mb-5">
            <Col className="d-flex justify-content-center">
              <a
                href={CVDoc}
                download="Delon J. Naidoo CV"
                className="btn btn-outline-dark p-3 w-50"
              >
                <h5>Download CV</h5>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default CV;
