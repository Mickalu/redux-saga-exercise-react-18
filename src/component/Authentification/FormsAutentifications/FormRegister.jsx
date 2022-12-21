import React from 'react';

import Form from "react-bootstrap/Form";

const FormRegister = ({ submitRegisterUser, formRegisterValues, setFormRegisterValues }) =>{
  const handleUsernameInput = (inputUsername) => {
    var copy = {...formRegisterValues};
    copy.username = inputUsername;

    setFormRegisterValues(copy);
  };

  return (
      <Form>
        <Form.Group>
          <Form.Label>Username : </Form.Label>
          <Form.Control type='text' onChange={(e) => handleUsernameInput(e.target.value)} required/>
        </Form.Group>
      </Form>
  )
};

export default FormRegister
