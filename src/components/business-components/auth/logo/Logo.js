import React from 'react';
import '../style.css';
import logotransperent from '../../../../assets/Logo_Transperent.png';
function Logo(){
    return(
        <div className="logoimg">
            <img src={logotransperent} alt="logo" className="bg-white white-color" />
        </div>
    )
}
export default Logo