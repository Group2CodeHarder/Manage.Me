import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProfileBio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const {
      bio,
      company,
      email,
      gitHub,
      instagram,
      jobTitle,
      personalSite,
      twitter,
      facebook,
      linkedIn,
      financialGoal,
    } = this.props;

    return (
      <div className="content-wrapper">
        <div className="profileBasicInfo">
          <div>Job Title: {jobTitle}</div>
          <div>Company: {company}</div>
          <div>Bio: {bio}</div>
          <div>Financial Goal: ${financialGoal}</div>
        </div>
        <br />
        <div className="profileContactInfo">
          <div>Email: {email}</div>
        </div>
        <br />
        <div className="profileSocialMedia">
          <div>Twitter: {twitter}</div>
          <div>Instagram: {instagram}</div>
          <div>Facebook: {facebook}</div>
          <div>LinkedIn: {linkedIn}</div>
          <div>Personal Website: {personalSite}</div>
          <div>GitHub: {gitHub}</div>
        </div>
        <br />
        <button>
          <Link to="/editBio">Edit Profile</Link>
        </button>
        <br />
      </div>
    );
  }
}

const mapState = (state) => {
  return state.auth;
};

export default connect(mapState)(ProfileBio);
