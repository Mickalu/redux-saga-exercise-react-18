export const changeInputFormIntoState = (formRegisterValues, fields, inputValue, setFunction) => {
  var copy = {...formRegisterValues};
  copy[fields] = inputValue;

  setFunction(copy);
};
