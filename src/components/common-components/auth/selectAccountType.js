import React,{Component} from 'react';
import StudentImage from '../../../assets/student.png';
import BusinessImage from '../../../assets/team.png';

import './style.css';
class Selectaccount extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container business-wrapper text-center">
                    <h5 className="select-account-type-title">Select Your Account Type</h5><br></br>
                    
                        <div className="row text-center account-type-inner-div">
                            <div className="col-lg-3 col-md-6 col-sm-6 student-account">
                                 <img src={StudentImage} alt="student-scholarship" className="img-fluid" /><br></br><br></br>
                                 <div className="text-center">
                                 <p className="student-account-type-title" onClick={()=>{this.props.history.push('/studentregister')}}>Need a scholarship? >></p>
                                 </div>
                             </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 business-account">
                                 <img src={BusinessImage} alt="team-icon" className="img-fluid" /><br></br><br></br>
                                 <div className="text-center">
                                 <p className="business-account-type-title" onClick={()=>{this.props.history.push('/businessregister')}}> Provide a scholarship? >></p>
                                 </div>
                             </div>
                     
                         </div>
                
            </div>
         );
    }
}
 
export default Selectaccount ;