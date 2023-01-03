import React from 'react';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import "../../../assets/css/FormLogin.css";

const FormLogin = ({ submitUserConnection, changeValueUsername, changeValuePassword, error_message }) => (
  <Form onSubmit={submitUserConnection}>
    <Row>
      <Form.Group className="mb-3">
        <Form.Label>Username : </Form.Label>
        <Form.Control onChange={(e) => changeValueUsername(e.target.value)} type="text" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password : </Form.Label>
        <Form.Control onChange={(e) => changeValuePassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
    </Row>

    <Row>

    </Row>
      {error_message()}
    <Row>
      <Col className='row_form__button'>
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </Col>

      <Col className='row_form__button register_button'>
        <Link to="register">
          <Button variant='link'>
            Register
          </Button>
        </Link>
      </Col>
    </Row>
  </Form>
);

export default FormLogin
