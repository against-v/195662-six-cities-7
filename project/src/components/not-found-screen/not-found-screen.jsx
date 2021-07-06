import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <div className="container">
      <h1>404 page not found</h1>
      <Link to="/">Main page</Link>
    </div>
  );
}

export default NotFoundScreen;
