import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Root = ({ children }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {children}
    </BrowserRouter>
  );
};

export default Root;
