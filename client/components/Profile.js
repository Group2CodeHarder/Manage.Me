import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileBio from "./ProfileBio";

{
  /* <ul>
<li>
  <img
    src={
      "https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
    }
  />
  <span></span>
</li>
<li>
  <img
    src={
      "https://www.sdihsspa.com/wp-content/uploads/2018/08/instagram-icon-450x450.jpg"
    }
  />
  <span></span>
</li>
</ul> */
}

export const Profile = (props) => {
  const { firstName, lastName, email, photo, id } = props.state.auth;
  const { projects } = props;

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

  const message = `https://manage-m3.herokuapp.com/profile/${id}`;
  const subjectLine = `${firstName}'s Portfolio`;

  return (
    <div className="profile-container" > 
      <div className="single-profile-left"> 
        <div className="avatar">
          <img src={photo} />
        </div>
        <div className="profileBasic">
          <h2>{firstName} {lastName}</h2>
        </div>
        <div className="profile-info-container"> 
        <div className="profile-info-container-ctr">
      <h4 style={{marginLeft: "1.7rem"}}>Connect with {firstName}</h4>
      <button className="profile-link-button" style={{marginLeft: "1.2rem", marginTop: "5px"}}>
        <ButtonMailto
        type="button" label={`Write ${firstName} an e-mail`}
        mailto={`mailto:${email}?subject=Subject&body=${message}`}
      />
      </button>
      </div>
      </div>
      </div>
      <div className="single-profile-right">
          <ProfileBio />
    </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    state,
    projects: state.projects || [],
  };
};

export default connect(mapState)(Profile);
