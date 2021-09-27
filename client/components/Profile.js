import React from "react";
import { connect } from "react-redux";

export const Profile = (props) => {
  const { googleImage, firstName, username, jobTitle } = props.state.auth;
  return (
    <div className="content-wrapper">
      <div style={{display: "flex", flexWrap: "wrap", marginTop: "20px"}}>
        <div style={{ marginLeft: "70px", marginTop: "20px" }}>
          <div style={{}}>
            <img
              src={googleImage}
              style={{ height: "190px", width: "190px", borderRadius: "25%" }}
            />
          </div>
          <div style={{ marginLeft: "8px", marginTop: "10px" }}>
            <h4>More about {firstName}: </h4>
            <p style={{ marginTop: "10px" }}>It me.</p>
          </div>
        </div>
        <div style={{ marginLeft: "40px", marginTop: "70px" }}>
          <h2>{username}</h2>
          <p style={{marginTop: "8px", fontSize: "1.2rem"}}>{jobTitle}</p>
        </div>
        <div style={{ marginLeft: "550px", marginTop: "20px", backgroundColor: "#CCCCCC", borderRadius: "8%"}}>
          <h4 style={{padding: "6px"}}>Connect with {firstName}</h4>
          <ul style={{listStyleType: "none", marginLeft: "15px"}}>
            <li style={{padding: "10px"}}><img src={"https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"} style={{height: "40px", width: "40px", cursor: "pointer"}}/><span></span>
            </li>
            <li style={{padding: "10px"}}><img src={"https://www.sdihsspa.com/wp-content/uploads/2018/08/instagram-icon-450x450.jpg"} style={{height: "40px", width: "40px", cursor: "pointer"}}/><span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    state,
  };
};

export default connect(mapState)(Profile);
