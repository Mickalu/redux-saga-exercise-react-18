import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "../../assets/css/Register.css";
import Col from "react-bootstrap/Col";

import FormRegister from '../../component/Authentification/FormsAutentifications/FormRegister';
import { authentificationAction } from "../../action/authentificationAction.js";

const Register = () => {
  const initFormValue = {
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  const [formRegisterValues, setFormRegisterValues] = useState(initFormValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitRegisterUser = (event) => {
    event.preventDefault();
    dispatch({ type: authentificationAction.REGISTER_USER, formRegisterValues })
    navigate("/home");
  };

  return (
    <div className='register-container'>
      <Col lg="5">
        <FormRegister
          submitRegisterUser={submitRegisterUser}
          formRegisterValues={formRegisterValues}
          setFormRegisterValues={setFormRegisterValues}
        />
      </Col>
    </div>
  );
};

export default Register;
