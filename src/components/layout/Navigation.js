import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import title from "../img/AlgoCorp_Solutions_4K.png";

const Navigation = () => {
  return (
    <div className={classes.headerImg}>
      <Navbar
        hidden
        className={classes.navbar}
        collapseOnSelect
        expand="lg"
        /*sticky="top"*/
        variant="dark"
      >
        <Navbar.Brand as={Link} to="/">
          <div className="d-flex">
            <div className="col">
              <img
                alt="bg"
                src={title}
                style={{ paddingLeft: 45, height: 60, width: 300 }}
              />
            </div>
          </div>
        </Navbar.Brand>
        {/*<Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto border-bottom">
            <Nav.Item></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
