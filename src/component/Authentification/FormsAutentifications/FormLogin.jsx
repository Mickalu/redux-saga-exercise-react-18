import React from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import "../../../assets/css/FormLogin.css";

const FormLogin = () => (
  <Form >
    <Row>
      <Form.Group className="mb-3">
        <Form.Label>Username : </Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password : </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Row>

    <Row>
      <Col className="row_form__button">
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Col>

      <Col className="row_form__button register_button">
        <Link to="/register">
          <Button variant="link">
            Register
          </Button>
        </Link>
      </Col>
    </Row>
  </Form>
);

export default FormLogin
