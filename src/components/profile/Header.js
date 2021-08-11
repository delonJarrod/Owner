import classes from "./Header.module.css";
import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import profilePic from "../img/DP.jpg";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className={classes.Headerbackground}>
      <div className="d-flex">
        <Container fluid>
          <Row>
            <Col className="d-flex justify-content-center mt-5">
              <Image
                src={profilePic}
                width="300px"
                height="95%"
                roundedCircle
                className={classes.selectedImg}
                draggable="false"
              />
            </Col>
          </Row>
          <Row>
            <Col className=" justify-content-center">
              <div className={classes.divide}>
                <div className={classes.margin}>
                  <div className="mb-5">
                    <h1>Delon J. Naidoo</h1>
                    <h4>Software Developer</h4>
                  </div>
                  <div className="mb-5">
                    <h1>About me{"  "}</h1>
                    <p>
                      I am a hardworking and diligent young man with a positive
                      outlook. I work well as part of a team or individually. I
                      am motivative, proactive and passionate about programming,
                      application development and solving problems.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*button bar 
          
           <div className={classes.SecondheadingText}>
            <btn
              className={" btn btn-outline-light"}
              onClick={() => setModalShow(true)}
            >
              Learn More
            </btn>
          </div>
          
          
          
          */}
    </section>
  );
}

export default Header;
