import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

  const submitRegisterUser = (event) => {
    event.preventDefault();
    dispatch({ type: authentificationAction.REGISTER_USER, formRegisterValues })
  };

  return (
    <div>
      <FormRegister
        submitRegisterUser={submitRegisterUser}
        formRegisterValues={formRegisterValues}
        setFormRegisterValues={setFormRegisterValues}
      />
    </div>
  );
};

export default Register;
