import React from 'react';
import studentcap from '../../../assets/student.png';
import './style.css';
export default () => {
  return (
    <div className="scholershiprow">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="cap-image text-center">
            <img src={studentcap} alt="studentcap" />
            <h2 className="cap-text">404</h2>
        </div>
        </div>
         <div className="col-lg-6 col-md-6 col-sm-12 text-center">
        <h2 className="page-color">Ooops!</h2><br></br>
        <h3> page not found </h3>
        <p>Sory,but the page you are looking <br></br> for does'nt exist or has moved.</p>
        <h4 className="hompage-color">Go To Homepage</h4>
        </div>
        </div>
       
        </div>
  );
};
