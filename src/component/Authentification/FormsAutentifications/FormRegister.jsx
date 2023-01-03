import React from 'react';

import Row from 'react-bootstrap/Row';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

import { changeInputFormIntoState } from '../../../utils/functionGestionInput/gestionFormInput';

const FormRegister = ({ submitRegisterUser, formRegisterValues, setFormRegisterValues }) =>{
  const handleUsernameInput = (inputUsername) => {
    const field = "username";

    changeInputFormIntoState(formRegisterValues, field, inputUsername, setFormRegisterValues);
  };

  const handlePassword = (inputPassword) => {
    const field = "password";

    changeInputFormIntoState(formRegisterValues, field, inputPassword, setFormRegisterValues);
  };

  const handlePassword2 = (inputPassword2) => {
    const field = "password2";

    changeInputFormIntoState(formRegisterValues, field, inputPassword2, setFormRegisterValues);
  }

  const handleEmailInput = (inputEmail) => {
    const field = "email";

    changeInputFormIntoState(formRegisterValues, field, inputEmail, setFormRegisterValues);
  };

  const handleFirstName = (inputFirstName) => {
    const field = "first_name";

    changeInputFormIntoState(formRegisterValues, field, inputFirstName, setFormRegisterValues);
  };

  const handleLastName = (inputLastName) => {
    const field = "last_name";

    changeInputFormIntoState(formRegisterValues, field, inputLastName, setFormRegisterValues);
  };

  return (
      <Form onSubmit={submitRegisterUser}>
        <Form.Group>
          <Form.Label>Username : </Form.Label>
          <Form.Control type='text' onChange={(e) => handleUsernameInput(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password : </Form.Label>
          <Form.Control type='password' onChange={(e) => handlePassword(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password again : </Form.Label>
          <Form.Control type='password' onChange={(e) => handlePassword2(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Email : </Form.Label>
          <Form.Control type='email' onChange={(e) => handleEmailInput(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>First name: </Form.Label>
          <Form.Control type='text' onChange={(e) => handleFirstName(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last name: </Form.Label>
          <Form.Control type='text' onChange={(e) => handleLastName(e.target.value)} required/>
        </Form.Group>

        <Row>
          <Button type='submit'> Save </Button>
        </Row>
      </Form>
  );
};

export default FormRegister
