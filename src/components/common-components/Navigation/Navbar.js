import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/student-actions/authActions';
import { clearCurrentProfile } from '../../../actions/business-actions/profileActions';
import './style.css';
import headerlogo from '../../../assets/header logo.png';
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
}

handleScroll() {
    this.setState({scroll: window.scrollY});
}

componentDidMount() {
    const el = document.querySelector('#custom-nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
}

componentDidUpdate() {
    this.state.scroll > this.state.top ? 
        document.body.style.paddingTop = `0px` :
        document.body.style.paddingTop = 0;
}
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }


  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item">
          <Link className="nav-link" to="/feed">
            Post Feed
          </Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <a
            href=""
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link1 login-link" to="/select-account-type"><i className="fa fa-lock lock-icon"></i>&nbsp;
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <div className="">
          <div className="container">
          <form className="searchbox">
          <input type="text" placeholder="" className="seachinputbox" required/>
          <button type="button" className="btn btn-default submitbtn"><i class="fa fa-chevron-circle-right formbutton"></i></button>
          </form>
          </div>
      <nav className="navbar navbar-expand-sm navigation-color login-link sticky-top " id="custom-nav" style={(this.state.scroll > this.state.top)?{ position:"fixed" }:{position:"relative"} }>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                  <img src={headerlogo} alt="logoimg" className="villager-logo" />
                  {/* <img src="../../img/OurVIllager-text-logo.png" alt="logo" /> */}
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {' '}
                  Developers
                </Link>
              </li> */}
             
              <li className="nav-item">
              <Link className="nav-link navlink-color"  to="/">
                  {' '}
                  Home
                </Link><span className="ma"></span>

              </li>
              <li className="nav-item">
              <Link className="nav-link navlink-color"  to="/about">
                  {' '}
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link navlink-color"  to="/programs">
                  {' '}
                  Programs
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link navlink-color"  to="/blog">
                  {' '}
                  Blog
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link navlink-color" to="/contact">
                  {' '}
                  Contact
                </Link>
              </li>
              
              
              
             
            </ul>
            {isAuthenticated ? authLinks : guestLinks}
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(
  Navbar
);
