import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser }from '../../../../actions/student-actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';
import '../style.css';
class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
    const userData = {
      email: this.state.email,
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="login ">
    
        <div className="container fogot-password">
          <div className="row ">
            <div className="col-md-5 m-auto form-color">
              <form onSubmit={this.onSubmit} className="forgot-form">
              <h4 className="email-text">Enter email to recover password</h4><br></br>
                <label>Email</label>
                <TextFieldGroup  className="input-color"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <input type="submit" value="RECOVER" className="btn recoverbtn btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>    
    );
  }
}

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(ForgotPassword);
