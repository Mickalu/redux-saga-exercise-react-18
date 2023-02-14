import { Promise } from "es6-promise";

import { defaultHeaderWithToken } from "../utils/apiFunction/api_configuration";

Promise.polyfill();

export const likeBeerApi = (token, dataValues) => (
  fetch("http://127.0.0.1:8000/beer/create-like/", {
    method: 'POST',
    headers: defaultHeaderWithToken(token),
    body: JSON.stringify(dataValues),
  })
  .then(response => response.json())
);

export const getUserBeersInteractedApi = (token) => (
  fetch("http://127.0.0.1:8000/beer/get-likes/", {
    method: 'GET',
    headers: defaultHeaderWithToken(token),
  })
  .then(response => response.json())
);
