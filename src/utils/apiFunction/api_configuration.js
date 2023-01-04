export const defaultHeaderWithToken = (token) => {
  const header = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Method': ['POST', "GET"],
    'Content-Type': 'application/json',
    'Authorization': "Token " + token,
  };

  return header;
};
