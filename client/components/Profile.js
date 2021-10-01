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
  const { firstName, email, photo } = props.state.auth;
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

  const message = "Cody's Link";

  return (
    <div className="content-wrapper">
      <div className="leftColumn">
        <div className="avatar">
          <img src={photo} />
        </div>
      </div>
      <div className="leftColumn">
        <div className="profileBasic">
          <h2>{firstName}</h2>
        </div>
        <div className="profileBio">
          <div className="profileBio-container">
            <ProfileBio />
          </div>
        </div>
        <div className="profileProject">
          <div>All of {firstName}'s projects</div>
          {projects.map((proj) => {
            return <div key={proj.id}>{proj.name}</div>;
          })}
        </div>
      </div>
      <h4>Connect with {firstName}</h4>
      <ButtonMailto
        label={`Write ${firstName} an e-mail`}
        mailto={`mailto:${email}?subject=Subject&body=${message}`}
      />
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
