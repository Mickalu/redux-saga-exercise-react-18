import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormLogin from '../../component/Authentification/FormsAutentifications/FormLogin';
import "../../assets/css/AuthentificationMainPage.css";
import Col from 'react-bootstrap/Col';

import { changeInputFormIntoState } from '../../utils/functionGestionInput/gestionFormInput';

const AuthentificationMainPage = () => {
  const dispatch = useDispatch();
  const tokenAuthentification = useSelector((state) => state.tokenAuthentification);
  const navigate = useNavigate();

  const connexionFormValuesInitValues = {
    username: "",
    password: "",
  };

  let display_error_message = useRef(false);

  const [connexionFormValues, setConnexionFormValues] = useState(connexionFormValuesInitValues);

  const handleInputForm = (inputValue, field) => {
    changeInputFormIntoState(connexionFormValues, field, inputValue, setConnexionFormValues);
  };

  const submitUserConnection = (event) => {
    event.preventDefault();
    dispatch({type:"SUBMIT_USER_CONNEXION", connexionFormValues});
  };

  const error_message = () => {
    if (display_error_message) {
      return (
        <p style={{"color": "red"}}>{tokenAuthentification.error}</p>
      );
    }

    return null;
  };

  useEffect(() => {
    if (tokenAuthentification.token !== "") {
      display_error_message.current = false;
      navigate("/");
    }
    else {
      display_error_message.current = true;
    }
  },
  [tokenAuthentification]);

  return (
    <div className='formLogin__container'>
      <Col lg="4">
        <FormLogin
          submitUserConnection={submitUserConnection}
          handleInputForm={handleInputForm}
          error_message={error_message}
        />
      </Col>
    </div>
  );
 };

export default AuthentificationMainPage
