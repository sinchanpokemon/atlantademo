import React from 'react';
import './style.css';
import appstoreimg from '../../../../assets/app-store.png';
import googlestoreimg from '../../../../assets/play-store.png';
function Socialicon(){
    return(
        <div className="socialrow tc">
            <div className="container social-store ">
        <div className="row">
                <div className="col-md-4">
            
                </div>
                <div className="col-md-4 appngooglestore text-center">
                    <img src={appstoreimg} alt="appstore" className="footerimage" />&nbsp;&nbsp;
                    <img src={googlestoreimg} alt="googleplay" className="footerimage" />
                </div>
                <div className="col-md-4 text-center">
       <div className="wrapper-icon">
             <div className="socialicon">
                 <i className="fa fa-facebook media-icon"></i>
                 </div>
             <div className=" socialicon">
                <i className="fa fa-twitter media-icon"></i>
             </div>
            <div className="socialicon">
                 <i className="fa fa-youtube media-icon"></i>
             </div>
             <div className="socialicon">
                    <i className="fa fa-instagram media-icon"></i>
             </div>
         </div>
                </div>
              
            </div>
            </div>
            </div>
        
    )
}
export default Socialicon