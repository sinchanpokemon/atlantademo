import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../../actions/business-actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';


class Dashboard extends Component {
  componentDidMount() {
    console.log("okoko")
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    console.log("okokok");
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <div className="dashboard-welcome-user-wrapper col-md-4 text-center">
              Welcome <span className='text-primary dashboard-user'>{user.name}</span><br/>
              <div className="profile-actions-wrapper">
               <ProfileActions />
               <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger">Delete Account</button>
              </div>
            </div>
           
            
          
            
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
           <div className="dashboard-welcome-user-wrapper col-md-4 text-center">
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-bussiness-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="dashboard mb-10">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="display-4">Dashboard</h3>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
