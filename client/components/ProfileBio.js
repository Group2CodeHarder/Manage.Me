import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProfileBio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {
      bio,
      company,
      email,
      gitHub,
      instagram,
      jobTitle,
      personalSite,
      twitter,
    } = this.props;

    return (
      <div className="content-wrapper">
        <div className="profileBasicInfo">
          <div>Job Title: {jobTitle}</div>
          <div>Company: {company}</div>
          <div>Bio: {bio}</div>
        </div>
        <div className="profileContactInfo">
          <div>Email: {email}</div>
        </div>
        <div className="profileSocialMedia">
          <div>Twitter: {twitter}</div>
          <div>Instagram: {instagram}</div>
          <div>Personal Website: {personalSite}</div>
          <div>GitHub: {gitHub}</div>
        </div>
        <button>
          <Link to="/editBio">Edit Profile</Link>
        </button>
      </div>
    );
  }
}

const mapState = (state) => {
  return state.auth;
};

export default connect(mapState)(ProfileBio);
