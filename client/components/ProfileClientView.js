import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileBio from "./ProfileBio";
import { getUserById } from '../store/user'


class ProfileClientView extends React.Component {
  constructor(){
    super();
  };

componentDidMount () {
  const URL = window.location.pathname;
  const userId = URL.slice(9)*1
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
              "mailto:username@example.com?subject=Subject&body=message%20goes%20here";
            window.location = mailto;
            e.preventDefault();
          }}
        >
          {label}
        </Link>
      );
    };
  
    const message = "Cody's Link";


    return (
      <div className="content-wrapper">
        <div className="leftColumn">
          <div className="avatar">
            <img src={user.photo} />
          </div>
        </div>
        <div className="leftColumn">
          <div className="profileBasic">
            <h2>{user.firstName}</h2>
          </div>
          <div className="profileBio">
            <div className="profileBio-container">
            <div className="profileBasicInfo">
          <div>Job Title: {user.jobTitle}</div>
          <div>Company: {user.company}</div>
          <div>Bio: {user.bio}</div>
        </div>
        <br />
        <div className="profileContactInfo">
          <div>Email: {user.email}</div>
        </div>
        <br />
        <div className="profileSocialMedia">
          <div>Twitter: {user.twitter}</div>
          <div>Instagram: {user.instagram}</div>
          <div>Personal Website: {user.personalSite}</div>
          <div>GitHub: {user.gitHub}</div>
        </div>
        <br />
            </div>
          </div>
 
        </div>
        <h4>Connect with {user.firstName}</h4>
        <ButtonMailto
          label={`Write ${user.firstName} an e-mail`}
          mailto={`mailto:${user.email}?subject=Subject&body=${message}`}
        />




      </div>
      );
  };
};

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