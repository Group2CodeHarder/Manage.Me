import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileBio from "./ProfileBio";
import { getUserById } from "../store/user";

class ProfileClientView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const URL = window.location.pathname;
    const userId = URL.slice(9) * 1;
    this.props.getUserById(userId);
  }

  render() {
    const { user } = this.props;

    const ButtonMailto = ({ mailto, label }) => {
      return (
        <Link
          to="#"
          onClick={(e) => {
            window.location.href =
            `mailto:${user.email}?subject=Subject&body=${message}`;
            window.location = mailto;
            e.preventDefault();
          }}
        >
          {label}
        </Link>
      );
    };

    const message = "Write something to Cody!";

    return (
      <div className="content-wrapper">
        <div className="profile-container">
          <div className="single-profile-left">
            <div className="avatar">
              <img src={user.photo} />
            </div>
            <div className="profileBasic">
              <h2>{user.firstName}</h2>
            </div>
            <div className="profile-info-container">
              <div className="profile-info-container-ctr">
                <h4>Connect with {user.firstName}</h4>
                <button className="profile-link-button">
                  <ButtonMailto
                    label={`Write ${user.firstName} an e-mail`}
                    mailto={`mailto:${user.email}?subject=Subject&body=${message}`}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="single-profile-right">
            <div className="profile-info-flex-div">
              <div className="profile-info-container">
                <div className="profileBasicInfo">
                  <h4>Job Title: {user.jobTitle}</h4>
                  <h4>Company: {user.company}</h4>
                  <hr />
                  <div>
                    <strong>Email:</strong> {user.email}
                  </div>
                </div>
              </div>
              <br />
              <div className="profile-info-container">
                <div className="profileSocialMedia">
                  <div>
                    <strong>Twitter:</strong> {user.twitter}
                  </div>
                  <div>
                    <strong>Instagram:</strong> {user.instagram}
                  </div>
                  <div>
                    <strong>Personal Website:</strong> {user.personalSite}
                  </div>
                  <div>
                    <strong>GitHub:</strong> {user.gitHub}
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="profile-info-container">
              <div className="profile-info-container-bio">
                <div className="profileBioInfo">
                  <div>
                    <strong>Bio:</strong> Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec non leo et massa egestas
                    scelerisque consectetur non magna. Mauris quam velit,
                    sollicitudin nec elit eget, efficitur molestie nunc. Integer
                    dignissim euismod sollicitudin. Proin lobortis porttitor
                    efficitur. Nulla consectetur arcu sit amet neque mattis
                    fringilla. Etiam aliquet tempus massa a blandit. Nullam eget
                    augue tortor. Sed gravida facilisis ligula, id posuere
                    tortor sodales quis. Quisque vehicula risus nec leo
                    vestibulum, et tincidunt est pharetra. Etiam ut quam dolor.
                    Suspendisse facilisis tellus at erat eleifend molestie.
                    Proin a ullamcorper nisi. Nam luctus posuere odio, id
                    vehicula metus varius vitae.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>

      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.user || {},
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUserById: (userId) => dispatch(getUserById(userId)),
  };
};

export default connect(mapState, mapDispatch)(ProfileClientView);
