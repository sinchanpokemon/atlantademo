import React, { Component } from 'react';
import './style.css'
class NewsLetterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container-fluid newletter-master-wrapper">
             <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h5>Join Our Villager to receive latest updates and news!</h5   >
                    </div>
                     <div className="col-lg-6">
                        <form>
                            <input
                                type="email"
                                placeholder="Email "
                                className="newsletter-email"

                            />
                            <button className="btn btn-primary">Join Us</button>
                        </form>
                     </div>
                </div>
             
            </div>
            </div>
         );
    }
}
 
export default NewsLetterForm;