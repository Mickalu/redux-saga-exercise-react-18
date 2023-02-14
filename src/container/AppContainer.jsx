import React from 'react';
import { useSelector } from 'react-redux';

import App from '../component/App';

const AppContainer = () => {
  const tokenInfo = useSelector((state) => state.tokenAuthentification);
  const userConnected = () => (tokenInfo.token);

  return (
    <>
      <App
        isUserConnected={userConnected()}
      />
    </>
  );
};

export default AppContainer;
