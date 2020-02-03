import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AppContext } from "../../core/utils/Store";
import { withRouter } from "react-router-dom";
import Functions from "../../core/utils/Functions";
const Navigationbar = ({ history }) => {
  const { app, setApp } = useContext(AppContext);

  return (
    <Navbar
      bg="light"
      className="navbar shadow-sm p-3 mb-3 bg-white rounded"
      expand
    >
      <Button
        style={{ backgroundColor: "#FFFFFF", borderColor: "#2b579a" }}
        onClick={() => setApp({ ...app, isOpen: !app.isOpen })}
      >
        <FontAwesomeIcon color="#2b579a" icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto pt-2" navbar>
          {/* <OverlayTrigger
            placement="auto"
            overlay={<Tooltip>Information</Tooltip>}
          >
            <Nav.Link href="#">
              <FontAwesomeIcon size="lg" icon={faInfoCircle} />
            </Nav.Link>
          </OverlayTrigger> */}
          <OverlayTrigger
            placement="auto"
            overlay={<Tooltip>Sign Out</Tooltip>}
          >
            <Nav.Link
              onClick={e => {
                e.preventDefault();
                history.push("/login");
                Functions.logout();
              }}
              href="#"
            >
              <FontAwesomeIcon size="lg" icon={faPowerOff} />
            </Nav.Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigationbar);
