import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormRegister from '../../component/Authentification/FormsAutentifications/FormRegister';

const Register = () => {
  const initFormValue = {
    username: "",
    password1: "",
    password2: "",
    first_name: "",
    last_name: "",
    email: "",
  };

  const [formRegisterValues, setFormRegisterValues] = useState(initFormValue);

  const submitRegisterUser = () => {
    console.log("submit");
  };

  console.log("formRegisterValues : ", formRegisterValues);

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
