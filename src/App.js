import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';
import { setCurrentUser, logoutUser }from './actions/student-actions/authActions'
import { clearCurrentProfile } from './actions/student-actions/profileActions';
import store from './store';
import './App.css'
import { Provider } from "react-redux";
import navigationbg from './assets/navigaition-bg.png';
import PrivateRoute from './components/student-components/common/PrivateRoute';
import {Navbar,Homepage,Blog,About,Contact,
  Programs,NotFound,Footer,Terms,NewsLetterForm,SelectAccountType}from './components/common-components';
  import {ForgotPassword,BussinessLogin,BussinessRegister
    ,CreateBussinessProfile,EditBussinessProfile,bussinessdashboard}from './components/business-components';
    import {Login,Register
      ,CreateProfile,EditProfile,Dashboard}from './components/student-components';
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <img src={navigationbg} alt="navigationbgimage" className="img-fluid"/> */}
            <Navbar />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/bussinessdashboard" component={bussinessdashboard} />
              <PrivateRoute exact path="/create-bussiness-profile" component={CreateBussinessProfile} />
              <PrivateRoute exact path="/edit-bussiness-profile" component={EditBussinessProfile} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
               <PrivateRoute
                exact
                path="/create-bussiness-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
              
              <Route exact path="/" component={Homepage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/programs" component={Programs} />
              <Route exact path="/blog" component={Blog} />
              <Route exact path="/contact" component={Contact} />
               
            
              <Route exact path="/businessregister" component={BussinessRegister} />
              <Route exact path="/studentregister" component={Register} />
              <Route exact path="/studentlogin" component={Login} />
              <Route exact path="/bussinesslogin" component={BussinessLogin} />
              <Route exact path="/select-account-type" component={SelectAccountType} />
              <Route exact path="/forgot" component={ForgotPassword} />
              <Route exact component={NotFound} />
            </Switch>
           <NewsLetterForm/>
           <Footer />
            <Terms /> 
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
