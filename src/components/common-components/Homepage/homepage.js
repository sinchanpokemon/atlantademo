import React from 'react';
// import './style.css';
import Carouselfade from './carousel/Carouselfade';
import Eventcalender from './Eventcalender';
function Homepage(){
    return(
        <div className="home">
            <Carouselfade />
            <Eventcalender />
            {/* <h1 className="homepage">Welcome to Homepage</h1> */}
        </div>
    )
}
export default Homepage