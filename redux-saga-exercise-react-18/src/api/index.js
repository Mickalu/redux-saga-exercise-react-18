import Promise from 'es6-promise';
import { API_BASE_URL } from "../config";

Promise.polyfill();

const defaultHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Request-Method': 'POST',
  'Content-Type': 'application/json'
}

export const startSessionApi = () => (
  fetch(`${API_BASE_URL}/data/session.json`, {
    method: 'GET',
    headers: defaultHeaders
  })
  .then(response => response.json())
  .then(session => session)
);
