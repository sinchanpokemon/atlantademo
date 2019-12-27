import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ProfileActions = () => {
  return (
    <div>
      <Link to="/edit-bussiness-profile" className="btn btn-primary mr-2">
       Edit Profile
      </Link>
     
    </div>
  );
};  

export default ProfileActions;
