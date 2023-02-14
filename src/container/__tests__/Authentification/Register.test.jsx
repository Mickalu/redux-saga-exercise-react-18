import React from 'react';
import { useNavigate } from 'react-router-dom';
import { render } from '../../../utils/__testsTools__/renderMethodRTL/customRenderMethod';

import Register from "../../Authentification/Register";

const functionNavigate = () => jest.fn();

jest.mock('react-redux', () => ({
  _esModule: true,
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn((value) => ({ status: true })),
}));

jest.mock('react-router-dom', () => ({
  _esModule: true,
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(functionNavigate),
}))

it("Register should redirect to login page if API send good response", () => {

  render(<Register />);
  expect(useNavigate).toHaveBeenCalledTimes(1);
});
