import React from 'react'
import { useSelector } from 'react-redux';

import App from '../component/App';

const AppContainer = () => {
  const tokenInfo = useSelector((state) => state.tokenAuthentification);
  const userConnected = () => {
    return (tokenInfo.token) ? true : false ;
  };

  return (
    <>
      <App
        isUserConnected={userConnected()}
      />
    </>
  )
};

export default AppContainer;
