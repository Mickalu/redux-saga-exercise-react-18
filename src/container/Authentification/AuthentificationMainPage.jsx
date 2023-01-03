import React, { useState, useEffect } from 'react';
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

  const [connexionFormValues, setConnexionFormValues] = useState(connexionFormValuesInitValues);

  const changeValueUsername = (inputValue) => {
    const field = "username";
    changeInputFormIntoState(connexionFormValues, field, inputValue, setConnexionFormValues);
  };

  const changeValuePassword = (inputValue) => {
    const field = "password";
    changeInputFormIntoState(connexionFormValues, field, inputValue, setConnexionFormValues);
  }

  const submitUserConnection = (event) => {
    event.preventDefault();
    dispatch({type:"SUBMIT_USER_CONNEXION", connexionFormValues});
  };

  useEffect(() => {
    if (tokenAuthentification.token !== "") {
      navigate("/home");
    }
  },
  [tokenAuthentification]);

  console.log("tokenAuthentification : ", tokenAuthentification);

  return (
    <div className='formLogin__container'>
      <Col lg="4">
        <FormLogin
          submitUserConnection={submitUserConnection}
          changeValueUsername={changeValueUsername}
          changeValuePassword={changeValuePassword}
        />
      </Col>
    </div>
  );
 };

export default AuthentificationMainPage
