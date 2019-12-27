import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../../../actions/student-actions/authActions";
import TextFieldGroup from "../../common/TextFieldGroup";
import '../style.css';
import {Link} from 'react-router-dom';
import ourvillager from '../../../../assets/villager logo black.png';
class Register extends Component {
  constructor() {
    super();
    this.state ={
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); // Form bind:
  }

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

onChange(e) { // e is an event parameter
  this.setState({[e.target.name]: e.target.value});
}

onSubmit(e) {
  e.preventDefault();
const newUser = {
  name: this.state.name,
  email: this.state.email,
  password: this.state.password,
  password2: this.state.password2,
  errors: {}
};
console.log(newUser);
  this.props.registerUser(newUser, this.props.history);
}

  render() {
    const { errors } = this.state;
    const inputStyle = {
      backgroundColor: 'blue',
    };

    return (
        <section className="login-block">
    <div className="container">
	<div className="row">
		<div className="col-md-6 form-block">
		   <div className="text-center">
        {/* <Logo /> */}
       </div>
       <div className="container">
         <h5 className="form-heading"><b>Hi there!</b></h5>
         <p className="scholarship-heading">Sign in to get your dream scholarship from worlds best scholarship provider platform</p>
         <i className="  fa fa-angle-right learn-more"> Learn more about our premium subscription</i>
     </div><br></br>
		    <form onSubmit={this.onSubmit} className="">
          <label className="heading">Name </label>
              <TextFieldGroup 
                style={inputStyle}
                className="input-color"
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}
                />
              <label className="heading">Email address</label>
             <TextFieldGroup  className="i"
                  placeholder="Email" 
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
               
                <label className="heading">Password</label>
               
                <TextFieldGroup  className="input-color"
                  placeholder="Password" 
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                   <label>Confirm password </label>
                <TextFieldGroup className="input-color"
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                />
                <input type="submit" value="Sign up" className="btn blue-submit-button btn-block mt-4" />
                <hr/>
                <p className="register-link">Have an account already? <span className="learn-more"><Link to="/studentlogin">Login</Link></span></p>
  
        </form>
		</div>
		<div className="col-md-6 text-center register-form-second-section">
    {/* <img src={LargeLogo} alt=" Our Villager Logo" className="img-fluid" /> */}
    <div className="villager-description text-center">
      <img src={ourvillager} alt="ourvillager"/>
    <h4 className="serving-title">Our Villager serving a million scholarships per year.</h4>
    </div>
  </div>
	</div>
</div>
</section>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));