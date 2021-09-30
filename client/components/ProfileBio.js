import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProfileBio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { bio, twitter } = this.props;

    return (
      <div>
        <div>{bio}</div>
        {/* <div>{twitter}</div> */}
        <Link to="/editBio">Edit Bio</Link>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    state,
    bio: state.auth.bio,
  };
};

export default connect(mapState)(ProfileBio);
