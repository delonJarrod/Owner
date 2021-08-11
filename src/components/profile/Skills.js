import React from "react";
import classes from "./Skills.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Collapsible from "react-collapsible";
import { BsTrophy } from "react-icons/bs";
import { BsPen } from "react-icons/bs";

function Skills() {
  return (
    <div className={classes.background}>
      <div className={classes.textWhite}>
        <div>
          <Container>
            <div className="row pb-5">
              <div className="col-sm-6 mt-5 text-center">
                <h1 className="mb-5">View Details</h1>

                <div>
                  <Collapsible
                    trigger="Qualifications"
                    triggerTagName="div"
                    transitionTime={300}
                    className={classes.trigger}
                  >
                    <ul className={classes.list}>
                      <Container fluid>
                        <Row>
                          <Col>
                            <div>
                              <h3>
                                <span className="m-2">
                                  <BsTrophy />
                                </span>
                                DEGREE IN APPLICATION DEVELOPMENT AND COMPUTER
                                SCIENCE
                              </h3>
                              <p>
                                The Independent Institute of Education <br />
                                Varsity College -Graduated
                              </p>
                            </div>
                            <div>
                              <h3>
                                <span className="m-2">
                                  <BsTrophy />
                                </span>
                                NATIONAL SENIOR CERTIFICATE
                              </h3>
                              <p>
                                Kharwastan Secondary School
                                <br />
                                Completed ( Matric - bachelors pass )
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </ul>
                  </Collapsible>
                </div>
                <div className="mt-3">
                  <Collapsible
                    trigger="Experience"
                    triggerTagName="div"
                    transitionTime={300}
                    className={classes.trigger}
                  >
                    <ul className={classes.list}>
                      <Container fluid>
                        <Row>
                          <Col>
                            <div>
                              <h3>
                                <span className="m-2">
                                  <BsPen />
                                </span>
                                WEB DESIGNER {"&"} SOFTWARE DEVELOPER
                              </h3>
                              <h5>Inzalo Utility Systems</h5>
                              <p>
                                - Web application development.
                                <br /> - Connecting, retrieving, modifying and
                                displaying data from API. <br />- Enhanced pre
                                existing features.
                                <br /> - Developed and maintained new features.
                                <br /> - Front End design changes and
                                enhancements.
                                <br /> - SQL database editing, retrieving and
                                arranging data.
                                <br />- Edited content on MVC websites.
                                <br /> - Updated client websites.
                              </p>
                            </div>
                            <div>
                              <h3>
                                <span className="m-2">
                                  <BsPen />
                                </span>
                                WEB DESIGNER {"&"} CONTENT EDITOR
                              </h3>
                              <h5>IX Online Motoring</h5>
                              <p>
                                - Developed websites.
                                <br />- Edited content on websites.
                                <br />- Updated client websites.
                                <br />- Handled stock related tasks.
                                <br />- Installed and managed 3rd party
                                applications on clients websites.
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </ul>
                  </Collapsible>
                </div>
              </div>

              <div className="col-sm-6 mt-5 p-3">
                <div className={classes.skills}>
                  <div className={classes.progress}>
                    <h6>React js</h6>
                    <div className="progress">
                      <div
                        className="progress-bar theme-bg"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.progress}>
                    <h6>Javascript</h6>
                    <div className="progress">
                      <div
                        className="progress-bar theme-bg"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.progress}>
                    <h6>Android</h6>
                    <div className="progress">
                      <div
                        className="progress-bar theme-bg"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.progress}>
                    <h6>C#</h6>
                    <div className="progress">
                      <div
                        className="progress-bar theme-bg"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "93%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.progress}>
                    <h6>HTML</h6>
                    <div className="progress">
                      <div
                        className="progress-bar theme-bg"
                        role="progressbar"
                        aria-valuenow="42"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Skills;
