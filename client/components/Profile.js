import React from "react";
import { connect } from "react-redux";
import ProjectListItem from "./ProjectListItem";

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
  const { googleImage, firstName, username, jobTitle } = props.state.auth;
  const { projects } = props;
  console.log(props.state.auth);
  return (
    <div className="content-wrapper">
      <div className="leftColumn">
        <div className="avatar">
          <img src={googleImage} />
        </div>
        <div className="linkTree">LinkTree</div>
      </div>
      <div className="leftColumn">
        <div className="profileBasic">
          <h2>{firstName}</h2>
          <h4>{jobTitle}</h4>
        </div>
        <div className="profileBio">
          <div>Bio</div>
        </div>
        <div className="profileProject">
          <div>All of {firstName}'s projects</div>
          {projects.map((proj) => {
            return <div key={proj.id}>{proj.name}</div>;
          })}
        </div>
      </div>
      <h4>Connect with {firstName}</h4>
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
