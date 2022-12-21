import React from 'react';

import Form from "react-bootstrap/Form";

import { changeInputFormIntoState } from '../../../utils/functionGestionInput/gestionFormInput';

const FormRegister = ({ submitRegisterUser, formRegisterValues, setFormRegisterValues }) =>{
  const handleUsernameInput = (inputUsername) => {
    const field = "username";

    changeInputFormIntoState(formRegisterValues, field, inputUsername, setFormRegisterValues);
  };

  const handlePassword1 = (inputPassword1) => {
    const field = "password1";

    changeInputFormIntoState(formRegisterValues, field, inputPassword1, setFormRegisterValues);
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
      <Form>
        <Form.Group>
          <Form.Label>Username : </Form.Label>
          <Form.Control type='text' onChange={(e) => handleUsernameInput(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password : </Form.Label>
          <Form.Control type='password' onChange={(e) => handlePassword1(e.target.value)} required/>
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
          <Form.Control type='email' onChange={(e) => handleFirstName(e.target.value)} required/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Last name: </Form.Label>
          <Form.Control type='email' onChange={(e) => handleLastName(e.target.value)} required/>
        </Form.Group>
      </Form>
  );
};

export default FormRegister
