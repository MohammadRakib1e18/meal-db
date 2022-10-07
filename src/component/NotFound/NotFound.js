import React from 'react';
import './NotFound.css';
import notFoundPage from '../../Images/page-not-found.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="not-found">
        <img src={notFoundPage} alt="" />
        <h1>Page Not Found!</h1>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    );
};

export default NotFound;