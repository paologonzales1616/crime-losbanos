/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../core/configs/routes";
import { Nav, Button, Image, Container } from "react-bootstrap";
import classNames from "classnames";
import { AppContext } from "../../core/utils/Store";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const SideBar = () => {
  const { app, setApp } = useContext(AppContext);

  return (
    <div className={classNames("sidebar shadow", { "is-open": app.isOpen })}>
      <div className="sidebar-header pt-2">
        <Button
          variant="link"
          onClick={() =>
            setApp({
              ...app,
              isOpen: !app.isOpen
            })
          }
          style={{ color: "#000" }}
          className="mt-4"
        >
          <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
        </Button>
        <Container className="text-center">
          <Image src={logo} width="125" fluid alt="logo_no_title" />
          <p className="p-0 m-0">Municipality of Los Banos, Laguna</p>
        </Container>
      </div>

      <Nav className="flex-column pt-2">
        {routes.map((value, index) => (
          <Nav.Item
            key={index}
            className={classNames({ active: value.page == app.page })}
          >
            <Link className="nav-link" to={`/${value.page}`}>
              <FontAwesomeIcon icon={value.icon} className="mr-2" />
              {value.name}
            </Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default withRouter(SideBar);
