import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../../actions/business-actions/profileActions";
import isEmpty from "../../../validation/is-empty";
import "./style.css";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companey_name: "",
      addressline1: "",
      addressline2: "",
      apt: "",
      city: "",
      bstate: "",
      zip: "",
      // intermidiate step

      yearinbussiness: "",
      industrytype: "",
      chamberofcommerce: "",
      contactfirstname: "",
      contactlastname: "",
      contactemail: "",
      contactphno: "",
      contactphnotwo:"",
      contactposition: "",
      BBB: "",

      // final step

      finacial_assistance: "",
      visiting_time_date: "",
      market_your_product: "",
      goodroi: "",
      support: "",
      employment_opportunities: "",
      sp: "",

      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;
      console.log("Profile Data", profile);

      // Bring skills array back to CSV
      // const skillsCSV = profile.skills.join(',');

      // If profile field doesnt exist, make empty string
      profile.companey_name = !isEmpty(profile.companey_name)
        ? profile.companey_name
        : "";
      profile.addressline1 = !isEmpty(profile.addressline1)
        ? profile.addressline1
        : "";
      profile.addressline2 = !isEmpty(profile.addressline2)
        ? profile.addressline2
        : "";
      profile.apt = !isEmpty(profile.apt) ? profile.apt : "";
      profile.city = !isEmpty(profile.city) ? profile.city : "";
      profile.bstate = !isEmpty(profile.bstate) ? profile.bstate: "";
      profile.zip = !isEmpty(profile.zip) ? profile.zip : "";

      // intermidiate step

      profile.yearinbussiness = !isEmpty(profile.yearinbussiness)
        ? profile.yearinbussiness
        : "";
      profile.industrytype = !isEmpty(profile.industrytype)
        ? profile.industrytype
        : "";
      profile.chamberofcommerce = !isEmpty(profile.chamberofcommerce)
        ? profile.chamberofcommerce
        : "";
      profile.contactfirstname = !isEmpty(profile.contactfirstname)
        ? profile.contactfirstname
        : "";
      profile.contactlastname = !isEmpty(profile.contactlastname)
        ? profile.contactlastname
        : "";
      profile.contactemail = !isEmpty(profile.contactemail)
        ? profile.contactemail
        : "";
      profile.contactphno = !isEmpty(profile.contactphno)
        ? profile.contactphno
        : "";
        profile.contactphnotwo = !isEmpty(profile.contactphnotwo)
        ? profile.contactphnotwo
        : "";
      profile.contactposition = !isEmpty(profile.contactposition)
        ? profile.contactposition
        : "";
      profile.BBB = !isEmpty(profile.BBB) ? profile.BBB : "";

      // final step
      profile.finacial_assistance = !isEmpty(profile.finacial_assistance)
        ? profile.finacial_assistance
        : "";
      profile.visiting_time_date = !isEmpty(profile.visiting_time_date)
        ? profile.visiting_time_date
        : "";
      profile.market_your_product = !isEmpty(profile.market_your_product)
        ? profile.market_your_product
        : "";
      profile.goodroi = !isEmpty(profile.goodroi) ? profile.goodroi : "";
      profile.support = !isEmpty(profile.support) ? profile.support : "";
      profile.employment_opportunities = !isEmpty(
        profile.employment_opportunities
      )
        ? profile.employment_opportunities
        : "";
      profile.sp = !isEmpty(profile.sp) ? profile.sp : "";

      // Set component fields state
      this.setState({
        companey_name: profile.companey_name,
        addressline1: profile.addressline1,
        addressline2: profile.addressline2,
        apt: profile.apt,
        city: profile.city,
        bstate:profile.bstate,
        zip: profile.zip,

        yearinbussiness: profile.yearinbussiness,
        industrytype: profile.industrytype,
        chamberofcommerce: profile.chamberofcommerce,
        contactfirstname: profile.contactfirstname,
        contactlastname: profile.contactlastname,
        contactemail: profile.contactemail,
        contactphno: profile.contactphno,
  
        contactposition: profile.contactposition,
        contactphnotwo: profile.contactphnotwo,
        BBB: profile.BBB,
        finacial_assistance: profile.finacial_assistance,
        visiting_time_date: profile.visiting_time_date,
        market_your_product: profile.market_your_product,
        goodroi: profile.goodroi,
        support: profile.support,
        employment_opportunities: profile.employment_opportunities,
        sp: profile.sp
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      companey_name: this.state.companey_name,
      addressline1: this.state.addressline1,
      addressline2: this.state.addressline2,
      apt: this.state.apt,
      city: this.state.city,
      bstate: this.state.bstate,
      zip: this.state.zip,

      // intermidiate step
      yearinbussiness: this.state.yearinbussiness,
      industrytype: this.state.industrytype,
      chamberofcommerce: this.state.chamberofcommerce,
      contactfirstname: this.state.contactfirstname,
      contactlastname: this.state.contactlastname,
      contactemail: this.state.contactemail,
      contactphno: this.state.contactphno,

      contactposition: this.state.contactposition,
      contactphnotwo:this.state.contactphnotwo,
      BBB: this.state.BBB,
      // final step
      finacial_assistance: this.state.finacial_assistance,
      visiting_time_date: this.state.visiting_time_date,
      market_your_product: this.state.market_your_product,
      goodroi: this.state.goodroi,
      support: this.state.support,
      employment_opportunities: this.state.employment_opportunities,
      sp: this.state.sp
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
      console.log(e.target.name +"  "+e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    //USA States
    const usaStates = [
      { label: " Select State", value: 0 },
      { label: "Alabama - AL", value: "Alabama - AL" },
      { label: "Alaska - AK", value: "Alaska - AK" },
      { label: "Arizona - AZ", value: "Arizona - AZ" },
      { label: "Arkansas - AR", value: "Arkansas - AR" },
      { label: "California - CA", value: "California - CA" },
      { label: "Colorado - CO", value: "Colorado - CO" },
      { label: "Connecticut - CT", value: "Connecticut - CT" },
      { label: "Delaware - DE", value: "Delaware - DE" },
      { label: "Florida - FL", value: "Florida - FL" },
      { label: "Georgia - GA", value: "Georgia - GA" },
      { label: "Hawaii - HI", value: "Hawaii - HI" },
      { label: "Idaho - ID", value: "Idaho - ID" },
      { label: "Illinois - IL", value: "Illinois - IL" },
      { label: "Indiana - IN", value: "Indiana - IN" },
      { label: "Iowa - IA", value: "Iowa - IA" },
      { label: "Kansas - KS", value: "Kansas - KS" },
      { label: "Kentucky - KY", value: "Kentucky - KY" },
      { label: "Louisiana - LA", value: "Louisiana - LA" },
      { label: "Maine - ME", value: "Maine - ME" },
      { label: "Maryland - MD", value: "Maryland - MD" },
      { label: "Massachusetts - MA", value: "Massachusetts - MA" },
      { label: "Michigan - MI", value: "Michigan - MI" },
      { label: "Minnesota - MN", value: "Minnesota - MN" },
      { label: "Mississippi - MS", value: "Mississippi - MS" },
      { label: "Missouri - MO", value: "Missouri - MO" },
      { label: "Montana - MT", value: "Montana - MT" },
      { label: "Nebraska - NE", value: "Nebraska - NE" },
      { label: "Nevada - NV", value: "Nevada - NV" },
      { label: "New Hampshire - NH", value: "New Hampshire - NH" },
      { label: "New Jersey - NJ", value: "New Jersey - NJ" },
      { label: "New Mexico - NM", value: "New Mexico - NM" },
      { label: "New York - NY", value: "New York - NY" },
      { label: "North Carolina - NC", value: "North Carolina - NC" },
      { label: "North Dakota - ND", value: "North Dakota - ND" },
      { label: "Ohio - OH", value: "Ohio - OH" },
      { label: "Oklahoma - OK", value: "Oklahoma - OK" },
      { label: "Oregon - OR", value: "Oregon - OR" },
      { label: "Pennsylvania - PA", value: "Pennsylvania - PA" },
      { label: "Rhode Island - RI", value: "Rhode Island - RI" },
      { label: "South Carolina - SC", value: "South Carolina - SC" },
      { label: "South Dakota - SD", value: "South Dakota - SD" },
      { label: "Tennessee - TN", value: "Tennessee - TN" },
      { label: "Texas - TX", value: "Texas - TX" },
      { label: "Utah - UT", value: "Utah - UT" },
      { label: "Vermont - VT", value: "Vermont - VT" },
      { label: "Virginia - VA", value: "Virginia - VA" },
      { label: "Washington - WA", value: "Washington - WA" },
      { label: "West Virginia - WV", value: "West Virginia - WV" },
      { label: "Wisconsin - WI", value: "Wisconsin - WI" },
      { label: "Wyoming - WY", value: "Wyoming - WY" }
    ];

    // Year in business
    const yearsInBusiness = [
      { label: " Years In Business", value: 0 },
      { label: "1-3", value: "1-3" },
      { label: "3-6", value: "3-6" },
      { label: "6-9", value: "6-9" },
      { label: "9-12", value: "9-12" },
      { label: ">12", value: ">12" }
    ];

    // Industry Type
    const typeOfIndustry = [
      { label: " Industry Type", value: 0 },
      { label: "Computer", value: "Computer" },
      { label: "Aerospace", value: "Aerospace" },
      { label: "Transport", value: "Transport" },
      { label: "Telecommunication", value: "Telecommunication" },
      { label: "Construction", value: "Construction" },
      { label: "Education", value: "Education" },
      { label: "Pharmaceutical", value: "Pharmaceutical" },
      { label: "Food", value: "Food" },
      { label: "Health Care", value: "Health Care" },
      { label: "Hospitality", value: "Hospitality" },
      { label: "Entertainment", value: "Entertainment" }
    ];
    // How do you currently market your product?
    const currentlyMarketYourProduct = [
      { label: " How Do You Currently Makret You Product", value: 0 },
      { label: "Option 1", value: "Value 1" },
      { label: "Option 2", value: "Value 2" },
      { label: "Option 3", value: "Value 3" },
      { label: "Option 4", value: "Value 4" }
    ];

    // Registered with BBB
    const bbbRegistered = [
      { label: " Registered with BBB?", value: 0 },
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" }
    ];

    // How do you supported the company
    const howDoYouSupportedCompany = [
      { label: " How Do You Supported The Company?", value: 0 },
      { label: "Option 1", value: "Value 1" },
      { label: "Option 2", value: "Value 2" },
      { label: "Option 3", value: "Value 3" },
      { label: "Option 4", value: "Value 4" }
    ];

    // How much company sp
    const companySp = [
      { label: " How Much  Per Year  Are You Sp?", value: 0 },
      { label: "Option 1", value: "Value 1" },
      { label: "Option 2", value: "Value 2" },
      { label: "Option 3", value: "Value 3" },
      { label: "Option 4", value: "Value 4" }
    ];
    // Employement opportunities available?
    const emplomentOpportunities = [
      { label: " Employement Opportunities Available?", value: 0 },
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" }
    ];
    // Good ROI?
    const goodRoi = [
      { label: " Do You Feel You Are Receiving Good ROI?", value: 0 },
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
      { label: "Sometimes", value: "Sometimes" }
    ];
    // Finanacial Assistance?
    const financialAssistance = [
      { label: " Have You Ever Provided Finacial Assistance?", value: 0 },
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" }
    ];

    return (
      <div className="create-profile">
      
        <div className="container">
          <div className="row">
              <div className="container">
              <Link to="/bussinessdashboard" className="btn btn-light mb-3">
                Go Back
              </Link>
          </div>
            <div className="col-md-12 m-auto ">
              {/* <h1 className="display-4 text-center create-profile-heading">Create Your Profile</h1> */}
              <p className="lead text-center">
                Update Your Business Info Here.
              </p>
              <small className="d-block pb-3"> <span className="">*</span>  Required Fields</small>
              <form onSubmit={this.onSubmit}>
            <div className="final-step">
              <div className=" form-row-wrapper">
                <div className="row">
                
                  <div className="col-lg-6 col-md-6 col-sm-12">
                  
                    <TextFieldGroup
                      placeholder="Company name *"
                      name="companey_name"
                      value={this.state.companey_name}
                      onChange={this.onChange}
                      error={errors.companey_name}
                      info="Company name *"
                   
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <TextFieldGroup
                      placeholder="Address line 1 *"
                      name="addressline1"
                      value={this.state.addressline1}
                      onChange={this.onChange}
                      error={errors.addressline1}
                      info="Address line 1 *"
                     
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <TextFieldGroup
                      placeholder="Address line 2"
                      name="addressline2"
                      value={this.state.addressline2}
                      onChange={this.onChange}
                      error={errors.addressline2}
                      info="Address line 2 "
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <TextFieldGroup
                      placeholder="Apt"
                      name="apt"
                      value={this.state.apt}
                      onChange={this.onChange}
                      error={errors.apt}
                      info="Apt"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <TextFieldGroup
                      placeholder="City *"
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                      error={errors.city}
                      info="City *"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <SelectListGroup
                      placeholder="State *"
                      name="bstate"
                      value={this.state.bstate}
                      onChange={this.onChange}
                      options={usaStates}
                      error={errors.bstate}
                      info="State *"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <TextFieldGroup
                      placeholder="Zip *"
                      name="zip"
                      value={this.state.zip}
                      onChange={this.onChange}
                      error={errors.zip}
                      info="Zip *"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* intermediate step */}
            <div className="intermediate-step">
                <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Year in bussiness *"
                  name="yearinbussiness"
                  value={this.state.yearinbussiness}
                  onChange={this.onChange}
                  options={yearsInBusiness}
                  error={errors.yearinbussiness}
                  info="Year in bussiness *"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Industry type *"
                  name="industrytype"
                  value={this.state.industrytype}
                  onChange={this.onChange}
                  options={typeOfIndustry}
                  error={errors.industrytype}
                  info="Industry type *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Contact first name *"
                  name="contactfirstname"
                  value={this.state.contactfirstname}
                  onChange={this.onChange}
                  error={errors.contactfirstname}
                  info="Contact first name *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Contact last name"
                  name="contactlastname"
                  value={this.state.contactlastname}
                  onChange={this.onChange}
                  error={errors.contactlastname}
                  info="Contact last name"
                />
              </div>

              
              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Contact email *"
                  name="contactemail"
                  value={this.state.contactemail}
                  onChange={this.onChange}
                  error={errors.contactemail}
                  // info="Contact Email"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Contact phone 1 *"
                  name="contactphno"
                  value={this.state.contactphno}
                  onChange={this.onChange}
                  error={errors.contactphno}
                  info="Contact phone 1 *"
                />
              </div>
              
              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Contact position *"
                  name="contactposition"
                  value={this.state.contactposition}
                  onChange={this.onChange}
                  error={errors.contactposition}
                  info="Contact position *"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Contact phone 2 *"
                  name="contactphnotwo"
                  value={this.state.contactphnotwo}
                  onChange={this.onChange}
                  error={errors.contactphnotwo}
                  info="Contact phone 2 *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Registered with BBB?"
                  name="BBB"
                  value={this.state.BBB}
                  onChange={this.onChange}
                  options={bbbRegistered}
                  error={errors.BBB}
                  // info="Registered With BBB?"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Chamber of commerce *"
                  name="chamberofcommerce"
                  value={this.state.chamberofcommerce}
                  onChange={this.onChange}
                  error={errors.chamberofcommerce}
                  info="Chamber of commerce *"
                />
              </div>
            </div>
            </div>

            {/* final Step*/}
            <div className="final-step">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Have you ever provided finacial assistance? *"
                  name="finacial_assistance"
                  value={this.state.finacial_assistance}
                  onChange={this.onChange}
                  options={financialAssistance}
                  error={errors.finacial_assistance}
                  info="Have you ever provided finacial assistance? *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <TextFieldGroup
                  placeholder="Best time date to reach the manager/ own *"
                  name="visiting_time_date"
                  value={this.state.visiting_time_date}
                  onChange={this.onChange}
                  error={errors.visiting_time_date}
                  info="Best time date to reach the manager/ own *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Do you feel you are receiving good ROI? *"
                  name="goodroi"
                  value={this.state.goodroi}
                  onChange={this.onChange}
                  options={goodRoi}
                  error={errors.goodroi}
                  info="Do you feel you are receiving good ROI? *"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="How do you currently market your product *"
                  name="market_your_product"
                  value={this.state.market_your_product}
                  onChange={this.onChange}
                  options={currentlyMarketYourProduct}
                  error={errors.market_your_product}
                  info="How do you currently market your product *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Please list how do you supported the company *"
                  name="support"
                  value={this.state.support}
                  onChange={this.onChange}
                  options={howDoYouSupportedCompany}
                  error={errors.support}
                  info="Please list how do you supported the company *"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Employment opportunities available?"
                  name="employment_opportunities"
                  value={this.state.employment_opportunities}
                  onChange={this.onChange}
                  options={emplomentOpportunities}
                  error={errors.employment_opportunities}
                  info="Employment opportunities available?"
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <SelectListGroup
                  placeholder="Approximately how much per year are you sp *"
                  name="sp"
                  value={this.state.sp}
                  onChange={this.onChange}
                  options={companySp}
                  error={errors.sp}
                  info="Approximately how much per year are you sp *"
                />
              </div>
              </div>
              <div className="text-center">
                <input
                type="submit"
                value="UPDATE"
                className="btn create-profile-btn  mt-4"
              />
              </div>
            </div>
          </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(EditProfile));