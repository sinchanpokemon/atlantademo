import React from 'react';
import './style.css';
import transparentlogo from '../../../assets/footer logo.png';
import Socialicon from './Socialicon/socialicon';
function Footer(){
    return(
        <div>
        <div className="footer-section">
            <div className="container">
                <div className="row">
                   <div className="col-lg-3 col-md-3 col-12 transparent-logo">
                       <img src={transparentlogo} alt="" className="img-fluid logosize" />
                    </div>
                    <div className="col-lg-2 col-md-2 col-12">
                    <h5 className="text-white footerfont">ABOUT US</h5>
            <ul className="list-unstyled">
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Mission Statment</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  History</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Staff Directory</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Directions</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Photo Album</a></li>
    			</ul>
                    </div> 
                    <div className="col-lg-2 col-md-2 col-12">
                    <h5 className="text-white footerfont">ACEDEMICS</h5>
            <ul className="list-unstyled">
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Admissions</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Departments</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Classes </a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Guidence</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Mission Statment</a></li>
    			</ul>
                    </div> 
                    <div className="col-lg-2 col-md-2 col-12">
                    <h5 className="text-white footerfont">ATHLETICS</h5>
            <ul className="list-unstyled">
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Athletic Calender</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Teams</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Forms</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  News</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Student Athlete</a></li>
    			</ul>
                    </div> 
                    <div className="col-lg-2 col-md-2 col-12">
                    <h5 className="text-white footerfont">STUDENTS</h5>
            <ul className="list-unstyled">
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Bell Schedules</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Student Tools</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Forms</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Programming</a></li>
    			 <li className="listsstyle"><a href="/" className="achorlink"><i className="fa fa-angle-right rightangle-icon"></i>  Mission </a></li>
    			</ul>
                    </div> 
                </div>
            </div>
        </div>
        <Socialicon />
        </div>

    )
}
export default Footer;