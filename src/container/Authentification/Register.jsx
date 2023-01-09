import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "../../assets/css/Register.css";
import Col from "react-bootstrap/Col";

import FormRegister from '../../component/Authentification/FormsAutentifications/FormRegister';
import { resetRegisterUser } from '../../slice/Authentification/registerSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = useSelector((state) => state.registerUser);

  const initFormValue = {
    username: "",
    password: "",
    password2: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  const [formRegisterValues, setFormRegisterValues] = useState(initFormValue);

  const submitRegisterUser = (event) => {
    event.preventDefault();
    dispatch({ type: "REGISTER_USER", formRegisterValues });
  };

  useEffect(() => {
    if(registerUser.status) {
      dispatch(resetRegisterUser());
      navigate("/");
    };
  },
  [dispatch, navigate, registerUser]);

  return (
    <div className='register-container'>
      <Col lg="5">
        <FormRegister
          submitRegisterUser={submitRegisterUser}
          formRegisterValues={formRegisterValues}
          setFormRegisterValues={setFormRegisterValues}
          apiResponse={registerUser}
        />
      </Col>
    </div>
  );
};

export default Register;
