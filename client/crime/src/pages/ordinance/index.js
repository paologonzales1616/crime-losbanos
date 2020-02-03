import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import Content from "../../components/content/Content";
import { config } from "../../core/configs/";
import { routes } from "../../core/configs/routes";
import { AppContext } from "../../core/utils/Store";
import { Table, Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const { app, setApp } = useContext(AppContext);
  const [ordinances, setOrdinances] = useState([]);

  useEffect(() => {
    document.title = config.title + " | " + routes[1].name;
    setApp({ ...app, page: routes[1].page });
    localStorage.page = routes[1].page;
  }, []);

  useLayoutEffect(() => {
    getOrdinances();
  }, []);

  const getOrdinances = async () => {
    const res = await fetch("http://localhost:5000/data/ordinances");
    const body = await res.json();
    console.log(body);
    setOrdinances(body);
  };

  return (
    <Content>
      <Container fluid className="text-center">
        <p>BARANGAY ORDINANCES</p>
        <Form.Control
          size="sm"
          type="text"
          placeholder="Search"
          className="mb-2"
        />
        <Button
          className="mb-2 float-right"
          size="sm"
          variant="outline-primary"
        >
          <FontAwesomeIcon icon={faPlus} /> New Ordinance
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr style={{ backgroundColor: "#FFFFFF" }}>
              <td width="25%">Ordinance No.</td>
              <td>Title</td>
              <td width="15%">Actions</td>
            </tr>
          </thead>
          <tbody>
            {ordinances.map((data, index) => (
              <tr key={index}>
                <td>{data.ordinance_no}</td>
                <td>{data.title}</td>
                <td>
                  <Button size="sm" variant="outline-secondary">
                    <FontAwesomeIcon icon={faCog} /> Edit
                  </Button>{" "}
                  <Button size="sm" variant="outline-danger">
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Content>
  );
};

export default Index;
