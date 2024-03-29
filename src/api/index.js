import Promise from 'es6-promise';

import { API_BASE_URL } from "../config";
import { defaultHeaderWithToken } from "../utils/apiFunction/api_configuration";

Promise.polyfill();

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': ['POST', "GET"],
  'Content-Type': 'application/json',
};

export const startSessionApi = () => (
  fetch(`${API_BASE_URL}/data/session.json`, {
    method: 'GET',
    headers: defaultHeaders,
  })
  .then(response => response.json())
  .then(session => session)
);

export const getBeers = (token) => (
  fetch(`http://127.0.0.1:8000/data/get_all_beers/`, {
    method: 'GET',
    headers: defaultHeaderWithToken(token),
  }).then(response => (
    response.json()
  ))
  .then(beers => beers)
);

