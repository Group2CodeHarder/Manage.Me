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
      // <div className="content-wrapper">
      <div className="single-profile-right">
        <div className="profile-info-flex-div">
          <div className="profile-info-container">
            <div className="profileBasicInfo">
              <h4>Job Title: Commando</h4>
              <h4>Company: Sky Marshal, LLC.</h4>
              <hr />
              <div>
                <strong>Email:</strong> {email}
              </div>
              <div>
                <strong>Financial Goal:</strong> ${financialGoal}
                <br />
                <p className="profileInfoPara">
                  Don't worry, this figure will not show on your public profile{" "}
                </p>
              </div>
              <br />
            </div>
          </div>
          <br />
          <div className="profile-info-container">
            <div className="profileSocialMedia">
              <div>
                <strong>Twitter:</strong> {twitter}
              </div>
              <div>
                <strong>Instagram:</strong> {instagram}
              </div>
              <div>
                <strong>Facebook:</strong> {facebook}
              </div>
              <div>
                <strong>LinkedIn:</strong> {linkedIn}
              </div>
              <div>
                <strong>Personal Website:</strong> {personalSite}
              </div>
              <div>
                <strong>GitHub:</strong> {gitHub}
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="profile-info-container">
          <div className="profile-info-container-bio">
            <div className="profileBioInfo">
              <div>
                <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec non leo et massa egestas scelerisque
                consectetur non magna. Mauris quam velit, sollicitudin nec elit
                eget, efficitur molestie nunc. Integer dignissim euismod
                sollicitudin. Proin lobortis porttitor efficitur. Nulla
                consectetur arcu sit amet neque mattis fringilla. Etiam aliquet
                tempus massa a blandit. Nullam eget augue tortor. Sed gravida
                facilisis ligula, id posuere tortor sodales quis. Quisque
                vehicula risus nec leo vestibulum, et tincidunt est pharetra.
                Etiam ut quam dolor. Suspendisse facilisis tellus at erat
                eleifend molestie. Proin a ullamcorper nisi. Nam luctus posuere
                odio, id vehicula metus varius vitae.
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="single-profile-left">
          <button
            className="profile-link-button"
            style={{ marginLeft: "16px" }}
          >
            <Link to="/editBio">Edit Profile</Link>
          </button>
        </div>
        <br />
      </div>
    );
  }
}

const mapState = (state) => {
  return state.auth;
};

export default connect(mapState)(ProfileBio);
