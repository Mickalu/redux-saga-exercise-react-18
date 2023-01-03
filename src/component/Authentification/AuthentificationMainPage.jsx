import React from 'react';

import FormLogin from './FormsAutentifications/FormLogin';
import "../../assets/css/AuthentificationMainPage.css";
import Col from 'react-bootstrap/Col';

const AuthentificationMainPage = () => (
  <div className='formLogin__container'>
    <Col lg="4">
      <FormLogin />
    </Col>
  </div>
);

export default AuthentificationMainPage
