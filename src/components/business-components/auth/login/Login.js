import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../../../actions/business-actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';
import '../style.css';
import {Link} from 'react-router-dom';
import Handshake from '../../../../assets/handshake.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/bussinessdashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/bussinessdashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

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
              <label className="heading">Email address</label>
             <TextFieldGroup  
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <div className="row">
                <div className="col-lg-6 col-md-6">
                <label className="heading">Password</label>
                </div>
                  <div className="col-lg-6 col-md-6">
                <label className="forgotpassword"><Link to="/forgot">Forgot Password?</Link></label>
                </div>
                </div>
                <TextFieldGroup  
                  placeholder="Password"  
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" value="Sign In" className="btn submitbutton btn-block mt-4" /><br></br>
                <hr/><br></br>
                <p className="paragraph-link">Don't have an account? <span className="learn-more"><Link to="/businessregister">Sign up now</Link></span></p>
  
        </form>
		</div>
		<div className="col-md-6 login-form-second-section text-center ">
    <img src={Handshake} alt=" Hand Shake icon" className="img-fluid" />
    <h4 className="serving-title">Our Villager serving a million scholarships per year.</h4>

	</div>
	</div>
</div>
</section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
