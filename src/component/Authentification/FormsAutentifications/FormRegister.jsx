import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { changeInputFormIntoState } from '../../../utils/functionGestionInput/gestionFormInput';

const FormRegister = ({ submitRegisterUser, formRegisterValues, setFormRegisterValues, apiResponse }) =>{
  const handleInputForm = (inputValue, field) => {
    changeInputFormIntoState(formRegisterValues, field, inputValue, setFormRegisterValues);
  };

  const displayErrorMessage = () => (
    (!apiResponse.status) ?
      (<p style={{color: "red"}}>{apiResponse.data}</p>) :
      null
  );

  const enableSubmit = () => (
    (formRegisterValues.password === formRegisterValues.password2 &&
      formRegisterValues.password !== "")
  );

  return (
    <Form onSubmit={submitRegisterUser}>
      <Row>
        <Form.Group className='mb-4'>
          <Form.Label>Username : </Form.Label>
          <Form.Control type='text' onChange={(e) => handleInputForm(e.target.value, "username")} required/>
        </Form.Group>

        <Form.Group className='mb-4'>
          <Form.Label>Password : </Form.Label>
          <Form.Control data-testid="password" type='password' onChange={(e) => handleInputForm(e.target.value, "password")} required/>
        </Form.Group>

        <Form.Group className='mb-4'>
          <Form.Label>Password again : </Form.Label>
          <Form.Control data-testid="password2" type='password' onChange={(e) => handleInputForm(e.target.value, "password2")} required/>
        </Form.Group>

        <Form.Group className='mb-4'>
          <Form.Label>Email : </Form.Label>
          <Form.Control type='email' onChange={(e) => handleInputForm(e.target.value, "email")} required/>
        </Form.Group>

        <Form.Group className='mb-4'>
          <Form.Label>First name: </Form.Label>
          <Form.Control type='text' onChange={(e) => handleInputForm(e.target.value, "first_name")} required/>
        </Form.Group>

        <Form.Group className='mb-4'>
          <Form.Label>Last name: </Form.Label>
          <Form.Control type='text' onChange={(e) => handleInputForm(e.target.value, "last_name")} required/>
        </Form.Group>
      </Row>

      <Row>
        <Col>
          <Button size="lg" type='submit' disabled={!enableSubmit()} data-testid="submit-form-button"> Save </Button>
        </Col>
      </Row>

      <Row>
        {displayErrorMessage()}
      </Row>
    </Form>
  );
};

export default FormRegister;
