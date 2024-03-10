// NotFound.js

import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
  <div className='not-found'>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <h3><Link to='/'>Go to Home Page</Link></h3>
    </div>
  );
};

export default NotFound;
