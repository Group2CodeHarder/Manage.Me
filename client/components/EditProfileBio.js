import { dispatch } from "d3-dispatch";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile, getUser } from "../store/auth";

class EditProfileBio extends Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      id: user.id,
      googleId: user.googleId,
      username: user.username,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      googleImage: user.googleImage,
      phoneNumber: user.phoneNumber,
      userType: user.userType,
      jobTitle: user.jobTitle,
      company: user.company,
      id_token: user.id_token,
      bio: user.bio,
      twitter: user.twitter,
      instagram: user.instagram,
      gitHub: user.gitHub,
      personalSite: user.personalSite,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user.bio !== this.props.user.bio) {
      this.props.getUser();
    }
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateProfile({ ...this.state });
  }

  render() {
    const { jobTitle, bio, twitter, instagram, gitHub, personalSite } =
      this.state;
    const { handleChange, handleSubmit } = this;
    const { user } = this.props;
    return (
      <div className="content-wrapper">
        <div>
          <form onSubmit={handleSubmit}>
            <label>Bio: </label>
            <input name="bio" onChange={handleChange} value={bio} />
            <br />
            <button type="submit">Save</button>
            <button className="cancel-button" type="button">
              <Link to="/profile">Cancel</Link>
            </button>
            <br />
          </form>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (user) => dispatch(updateProfile(user)),
  getUser: () => dispatch(getUser()),
});

// export default connect(mapState)(EditProfileBio);
export default connect(mapState, mapDispatchToProps)(EditProfileBio);
