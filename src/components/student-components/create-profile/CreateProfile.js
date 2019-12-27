import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../../actions/student-actions/profileActions';
import './style.css';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      middle_initial: "",
      lastname: "",
      addressline1: "",
      addressline2: "",
      apt: "",
      city: "",
      state: "",
      zip: "",

      // intermediate Step

      personal_email: "",
      institute_email: "",
      ph_no1: "",
      ph_no1_type: "",
      ph_no2: "",
      ph_no2_type: "",
      ethnicity: "",
      race: "",
      gender: "",

      // final step

      high_school_name: "",
      gpa: "",
      aid: "",
      extra_curricular: "",
      major_area_of_study: "",
      day: "",
      month: "",
      year: "",
      scholarship_type: "",
      student_time: "",
      created_by: "",
      other_scholarships: "",
      shop_locally: "",
      age_over: "",
      share_profile: "",


      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      firstname: this.state.firstname,
      middle_initial: this.state.middle_initial,
      lastname: this.state.lastname,
      addressline1: this.state.addressline1,
      addressline2: this.state.addressline2,
      apt: this.state.apt,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,

      // intermediate Step

      personal_email: this.state.personal_email,
      institute_email: this.state.institute_email,
      ph_no1: this.state.ph_no1,
      ph_no1_type: this.state.ph_no1_type,
      ph_no2: this.state.ph_no2,
      ph_no2_type: this.state.ph_no2_type,
      ethnicity: this.state.ethnicity,
      race: this.state.race,
      gender: this.state.gender,

      // final step

      high_school_name: this.state.high_school_name,
      gpa: this.state.gpa,
      aid: this.state.aid,
      extra_curricular: this.state.extra_curricular,
      major_area_of_study: this.state.major_area_of_study,
      day: this.state.day,
      month: this.state.month,
      year: this.state.year,
      scholarship_type: this.state.scholarship_type,
      student_time: this.state.student_time,
      created_by: this.state.created_by,
      other_scholarships: this.state.other_scholarships,
      shop_locally: this.state.shop_locally,
      age_over: this.state.age_over,
      share_profile: this.state.share_profile

    };

    console.log(profileData)
    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;




    // Profile Created By
    const profile_created_by = [
      { label: ' Profile created by *', value: 0 },
      { label: 'Parent', value: 'Parent' },
      { label: 'Student', value: 'Student' }
    ];

    // Race
    const race = [
      { label: ' Race', value: 0 },
      { label: 'American Indian or Alaska Native', value: 'American Indian or Alaska Native' },
      { label: 'Asian', value: 'Asian' },
      { label: 'Black or African American', value: 'Black or African American' },
      { label: 'Caucasian', value: 'Caucasian' },
      { label: 'Filipino', value: 'Filipino' },
      { label: 'Hispanic or Latino', value: 'Hispanic or Latino' },
      { label: 'Indian', value: 'Indian ' },
      { label: 'Native Hawaiian', value: 'Native Hawaiian' },
      { label: 'Pacific Islander', value: 'Pacific Islander' },
      { label: 'Other', value: 'Other' },


    ];

  
    // /full_time_or_part_time
    const full_time_or_part_time = [
      { label: ' Full time/part student  *', value: 0 },
      { label: 'Full time', value: 'full time' },
      { label: 'Part time', value: 'part time' }
    ]
    //  // GPA
    const gpa = [
      { label: ' GPA *', value: 0 },
      { label: '4.0', value: '4.0' },
      { label: '3.9', value: '3.9' },
      { label: '3.8', value: '3.8' },
      { label: '3.7', value: '3.7' },
      { label: '3.6', value: '3.6' },
      { label: '3.5', value: '3.5' },
      { label: '3.4', value: '3.4' },
      { label: '3.3', value: '3.3' },
      { label: '3.2', value: '3.2' },
      { label: '3.1', value: '3.1' },
      { label: '3.0', value: '3.0' },
      { label: '2.9', value: '2.9' },
      { label: '2.8', value: '2.8' },
      { label: '2.7', value: '2.7' },
      { label: '2.6', value: '2.6' },
      { label: '2.5', value: '2.5' },
      { label: '2.4', value: '2.4' },
      { label: '2.3', value: '2.3' },
      { label: '2.2', value: '2.2' },
      { label: '2.1', value: '2.1' },
      { label: '2.0', value: '2.0' },



    ];
    // Gender
    const Gender = [
      { label: ' Gender *', value: 0 },
      { label: 'Male', value: 'Male' },
      { label: 'Female', value: 'Female' }
    ]
    // Age 
    const Age = [
      { label: 'Are you the age of 13? *', value: 0 },
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' }
    ]
    // profilecontact
    const profilecontact = [
      { label: ' May we share your profile, including  your contact? *', value: 0 },
      { label: 'Yes', value: 'Yes' },
      { label: 'No', value: 'No' }

    ]
    // Phoneno1
    const phoneno1 = [
      { label: 'Phone 1 type *', value: '0' },
      { label: 'Option 1', value: 'Value 1' },
      { label: 'Option 2', value: 'Value 2' }
    ]
    // Phoneno2
    const phonenumber2 = [
      { label: 'Phone 2 type', value: '0' },
      { label: 'Option 1', value: 'Value 1' },
      { label: 'Option 2', value: 'Value 2' }
    ]
    // Ethnicity
    const Ethnicity = [
      { label: 'Ethinicity *', value: '0' },
      { label: 'Option 1', value: 'Value 1' },
      { label: 'Option 2', value: 'Value 2' }
    ]
    // majorareastudy
    const majorareastudy = [
      { label: 'Major area of study *', value: '0' },
      { label: 'Option 1', value: 'Value 1' },
      { label: 'Option 2', value: 'Value 2' }
    ]
    // Day
    const Day = [
      { label: 'Birth-Day *', value: '0' },
      { label: 'Sun', value: 'Sun' },
      { label: 'Mon', value: 'Mon' },
      { label: 'Tue', value: 'Tue' },
      { label: 'Wed', value: 'Wed' },
      { label: 'Thu', value: 'Thu' },
      { label: 'Fri', value: 'Fri' },
      { label: 'Sat', value: 'Sat' }
    ]

    //Shop Locally?
    const shop_locally = [
      { label: 'Are you panning to shop locally? *', value: '0' },
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' }
    ]
    // Month
    const Month = [
      { label: 'Birth-Month *', value: '0' },
      { label: 'Jan', value: 'Jan' },
      { label: 'Feb', value: 'Feb' },
      { label: 'Mar', value: 'Mar' },
      { label: 'Apr', value: 'Apr' },
      { label: 'May', value: 'May' },
      { label: 'Jun', value: 'Jun' },
      { label: 'Jul', value: 'Jul' },
      { label: 'Aug', value: 'Aug' },
      { label: 'Sep', value: 'Sep' },
      { label: 'Oct', value: 'Oct' },
      { label: 'Nov', value: 'Nov' },
      { label: 'Dec', value: 'Dec' }
    ]
    // Year
    const Year = [
      { label: 'Birth-Year *', value: '0' },
      { label: '2000', value: '2000' },
      { label: '1999', value: '1999' },
      { label: '1998', value: '1998' },
      { label: '1997', value: '1997' },
      { label: '1996', value: '1996' },
      { label: '1995', value: '1995' }


    ]
    const usaStates = [
      { label: ' Select state *', value: 0 },
      { label: 'Alabama - AL', value: 'Alabama - AL' },
      { label: 'Alaska - AK', value: 'Alaska - AK' },
      { label: 'Arizona - AZ', value: 'Arizona - AZ' },
      { label: 'Arkansas - AR', value: 'Arkansas - AR' },
      { label: 'California - CA', value: 'California - CA' },
      { label: 'Colorado - CO', value: 'Colorado - CO' },
      { label: 'Connecticut - CT', value: 'Connecticut - CT' },
      { label: 'Delaware - DE', value: 'Delaware - DE' },
      { label: 'Florida - FL', value: 'Florida - FL' },
      { label: 'Georgia - GA', value: 'Georgia - GA' },
      { label: 'Hawaii - HI', value: 'Hawaii - HI' },
      { label: 'Idaho - ID', value: 'Idaho - ID' },
      { label: 'Illinois - IL', value: 'Illinois - IL' },
      { label: 'Indiana - IN', value: 'Indiana - IN' },
      { label: 'Iowa - IA', value: 'Iowa - IA' },
      { label: 'Kansas - KS', value: 'Kansas - KS' },
      { label: 'Kentucky - KY', value: 'Kentucky - KY' },
      { label: 'Louisiana - LA', value: 'Louisiana - LA' },
      { label: 'Maine - ME', value: 'Maine - ME' },
      { label: 'Maryland - MD', value: 'Maryland - MD' },
      { label: 'Massachusetts - MA', value: 'Massachusetts - MA' },
      { label: 'Michigan - MI', value: 'Michigan - MI' },
      { label: 'Minnesota - MN', value: 'Minnesota - MN' },
      { label: 'Mississippi - MS', value: 'Mississippi - MS' },
      { label: 'Missouri - MO', value: 'Missouri - MO' },
      { label: 'Montana - MT', value: 'Montana - MT' },
      { label: 'Nebraska - NE', value: 'Nebraska - NE' },
      { label: 'Nevada - NV', value: 'Nevada - NV' },
      { label: 'New Hampshire - NH', value: 'New Hampshire - NH' },
      { label: 'New Jersey - NJ', value: 'New Jersey - NJ' },
      { label: 'New Mexico - NM', value: 'New Mexico - NM' },
      { label: 'New York - NY', value: 'New York - NY' },
      { label: 'North Carolina - NC', value: 'North Carolina - NC' },
      { label: 'North Dakota - ND', value: 'North Dakota - ND' },
      { label: 'Ohio - OH', value: 'Ohio - OH' },
      { label: 'Oklahoma - OK', value: 'Oklahoma - OK' },
      { label: 'Oregon - OR', value: 'Oregon - OR' },
      { label: 'Pennsylvania - PA', value: 'Pennsylvania - PA' },
      { label: 'Rhode Island - RI', value: 'Rhode Island - RI' },
      { label: 'South Carolina - SC', value: 'South Carolina - SC' },
      { label: 'South Dakota - SD', value: 'South Dakota - SD' },
      { label: 'Tennessee - TN', value: 'Tennessee - TN' },
      { label: 'Texas - TX', value: 'Texas - TX' },
      { label: 'Utah - UT', value: 'Utah - UT' },
      { label: 'Vermont - VT', value: 'Vermont - VT' },
      { label: 'Virginia - VA', value: 'Virginia - VA' },
      { label: 'Washington - WA', value: 'Washington - WA' },
      { label: 'West Virginia - WV', value: 'West Virginia - WV' },
      { label: 'Wisconsin - WI', value: 'Wisconsin - WI' },
      { label: 'Wyoming - WY', value: 'Wyoming - WY' }
    ]
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12 m-auto ">
              {/* <h1 className="display-4 text-center create-profile-heading">Create Your Profile</h1> */}
              <p className="lead text-center">
                Create Your Student Profile
              </p>
              <small className="d-block pb-3"> <span className="required-asterisk">*</span> Means Required Fields</small>
              <form onSubmit={this.onSubmit}>
                <div className="final-step">
                  <div className=" form-row-wrapper">
                    <div className="row">

                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <TextFieldGroup
                          placeholder="First name *"
                          name="firstname"
                          value={this.state.firstname}
                          onChange={this.onChange}
                          error={errors.firstname}
                        // info="Firstname *"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <TextFieldGroup
                          placeholder="Middle initial "
                          name="middle_initial"
                          value={this.state.middle_initial}
                          onChange={this.onChange}
                          error={errors.middle_initial}
                        // info="Middle Initial"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <TextFieldGroup
                          placeholder="Last name *"
                          name="lastname"
                          value={this.state.lastname}
                          onChange={this.onChange}
                          error={errors.lastname}
                        // info="Last Name"
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <TextFieldGroup
                          placeholder="Address line 1 *"
                          name="addressline1"
                          value={this.state.addressline1}
                          onChange={this.onChange}
                          error={errors.addressline1}
                        // info="Address Line1"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <TextFieldGroup
                          placeholder="Address line 2"
                          name="addressline2"
                          value={this.state.addressline2}
                          onChange={this.onChange}
                          error={errors.addressline2}
                        // info="Address Line2"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <TextFieldGroup
                          placeholder="Apt.#"
                          name="apt"
                          value={this.state.apt}
                          onChange={this.onChange}
                          error={errors.apt}
                        // info="Apt.#"
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <TextFieldGroup
                          placeholder="City *"
                          name="city"
                          value={this.state.city}
                          onChange={this.onChange}
                          error={errors.city}
                        // info="City"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <SelectListGroup
                          placeholder="State *"
                          name="state"
                          value={this.state.state}
                          onChange={this.onChange}
                          options={usaStates}
                          error={errors.state}
                        // info="State"
                        />
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <TextFieldGroup
                          placeholder="Zip *"
                          name="zip"
                          value={this.state.zip}
                          onChange={this.onChange}
                          error={errors.zip}
                        // info="zip"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* intermediate step */}
                <div className="intermediate-step">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="Personal email *"
                        name="personal_email"
                        value={this.state.personal_email}
                        onChange={this.onChange}
                        error={errors.personal_email}
                      // info="Personal Email"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="Collage(School) email *"
                        name="institute_email"
                        value={this.state.institute_email}
                        onChange={this.onChange}
                        error={errors.institute_email}
                      // info="Collage(School) Email"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="Phone number 1 *"
                        name="ph_no1"
                        value={this.state.ph_no1}
                        onChange={this.onChange}
                        error={errors.ph_no1}
                      // info="Phone number 1"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Phone number 1 type *"
                        name="ph_no1_type"
                        value={this.state.ph_no1_type}
                        onChange={this.onChange}
                        options={phoneno1}
                        error={errors.ph_no1_type}
                      // info="Phone number 1 Type"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="Phone number 2"
                        name="ph_no2"
                        value={this.state.ph_no2}
                        onChange={this.onChange}
                        error={errors.ph_no2}
                      // info="Phone number 2(optional)"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Phone number 2 type"
                        name="ph_no2_type"
                        value={this.state.ph_no2_type}
                        onChange={this.onChange}
                        options={phonenumber2}
                        error={errors.ph_no2_type}
                      // info="Phone number 2 Type(optional)"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Ethnicity *"
                        name="ethnicity"
                        value={this.state.ethnicity}
                        onChange={this.onChange}
                        options={Ethnicity}
                        error={errors.ethnicity}
                      // info="Ethnicity"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Race *"
                        name="race"
                        value={this.state.race}
                        onChange={this.onChange}
                        options={race}
                        error={errors.race}
                      // info="Race"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Gender *"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                        options={Gender}
                        error={errors.gender}
                      // info="Gender"
                      />
                    </div>
                  </div>
                </div>

                {/* final Step*/}
                <div className="final-step">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="High scholl name *"
                        name="high_school_name"
                        value={this.state.high_school_name}
                        onChange={this.onChange}
                        error={errors.high_school_name}
                      // info="High School Name"
                      />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="GPA *"
                        name="gpa"
                        value={this.state.gpa}
                        onChange={this.onChange}
                        options={gpa}
                        error={errors.gpa}
                      // info="GPA"
                      />
                    </div>

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <TextFieldGroup
                        placeholder="Essay on what the aid will be used for *"
                        name="aid"
                        value={this.state.aid}
                        onChange={this.onChange}
                        error={errors.aid}
                      // info="Essay on what the aid will be used for"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <TextFieldGroup
                        placeholder="Extra curricuum acctivities (high school -> college) *"
                        name="extra_curricular"
                        value={this.state.extra_curricular}
                        onChange={this.onChange}
                        error={errors.extra_curricular}
                      // info="Extra curricuum acctivities (high school -> college"
                      />
                    </div>
                  </div>
                </div>

                <div className="final-step">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Major area of study *"
                        name="major_area_of_study"
                        value={this.state.major_area_of_study}
                        onChange={this.onChange}
                        options={majorareastudy}
                        error={errors.major_area_of_study}
                      // info="Major area of study"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                          <SelectListGroup
                            placeholder="Day *"
                            name="day"
                            value={this.state.day}
                            onChange={this.onChange}
                            options={Day}
                            error={errors.day}
                          // info="Day"

                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                          <SelectListGroup
                            placeholder="Month *"
                            name="month"
                            value={this.state.month}
                            onChange={this.onChange}
                            options={Month}
                            error={errors.month}
                          // info="Month"

                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                          <SelectListGroup
                            placeholder="Year *"
                            name="year"
                            value={this.state.year}
                            onChange={this.onChange}
                            options={Year}
                            error={errors.year}
                          // info="Year"

                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="Type of scholarship *"
                        name="scholarship_type"
                        value={this.state.scholarship_type}
                        onChange={this.onChange}
                        error={errors.scholarship_type}
                      // info="Type of scholarship"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Full time/part student  *"
                        name="student_time"
                        value={this.state.student_time}
                        onChange={this.onChange}
                        options={full_time_or_part_time}
                        error={errors.student_time}
                      // gpa="Full Time/Part Student "
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Are you the parent/student *"
                        name="created_by"
                        value={this.state.created_by}
                        onChange={this.onChange}
                        options={profile_created_by}
                        error={errors.created_by}
                      // info="Are you the parent/student"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <TextFieldGroup
                        placeholder="Other scholarship "
                        name="other_scholarships"
                        value={this.state.other_scholarships}
                        onChange={this.onChange}
                        error={errors.other_scholarships}
                      // info="Other Scholarship"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Are you panning to shop locally *"
                        name="shop_locally"
                        value={this.state.shop_locally}
                        onChange={this.onChange}
                        options={shop_locally}
                        error={errors.shop_locally}
                      // info="Are you planning to shop locally"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="Are you the age of 13 *"
                        name="age_over"
                        value={this.state.age_over}
                        onChange={this.onChange}
                        options={Age}
                        error={errors.age_over}
                      // info="Are you the age of 13"
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <SelectListGroup
                        placeholder="May we share your profile,including your contact *"
                        name="share_profile"
                        value={this.state.share_profile}
                        onChange={this.onChange}
                        options={profilecontact}
                        error={errors.share_profile}
                      // info="May we share your profile,including your contact"
                      />

                    </div>


                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      value="REGISTER"
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

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
