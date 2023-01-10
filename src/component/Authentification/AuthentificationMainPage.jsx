import React from 'react';

import Col from 'react-bootstrap/Col';

import FormLogin from './FormsAutentifications/FormLogin';
import "../../assets/css/AuthentificationMainPage.css";

const AuthentificationMainPage = () => (
  <div className='formLogin__container'>
    <Col lg="4">
      <FormLogin />
    </Col>
  </div>
);

export default AuthentificationMainPage;
