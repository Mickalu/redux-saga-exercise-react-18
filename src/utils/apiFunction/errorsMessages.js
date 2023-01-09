export const getAllMessageForOneKeyError = (listMessages) => {
  let concaneAllMessageError = "";

  for (const message of listMessages) {
    concaneAllMessageError += message + " ";
  }

  return concaneAllMessageError;
};

export const getErrorMessageApi = (dictDataErrorMessage) => {
  let strMessage = "";

  for (const key of Object.keys(dictDataErrorMessage)) {
    strMessage += key + " : " + getAllMessageForOneKeyError(dictDataErrorMessage[key]);
  };

  return strMessage;
};
