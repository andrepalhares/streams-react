import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';


const Header = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <Link to="/" className="active red item">
          Streamer
        </Link>
      <div className="right menu">
        <Link to="/streams/list" className="red item">All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
    </div>
  );
};

export default Header;
