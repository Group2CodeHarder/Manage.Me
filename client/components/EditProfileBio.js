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
      facebook: user.facebook,
      linkedIn: user.linkedIn,
      personalSite: user.personalSite,
      financialGoal: user.financialGoal,
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
    this.props.updateProfile({ ...this.state }, this.props.history);
    const { history } = this.props;
    history.push("/profile");
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
    } = this.state;
    const { handleChange, handleSubmit } = this;
    const { history } = this.props;
    const redirect = () => history.push("/profile");

    return (
      <div className="content-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="profileBasicInfo">
            <label>Job Title: </label>
            <input name="jobTitle" onChange={handleChange} value={jobTitle} />
            <label>Company: </label>
            <input name="company" onChange={handleChange} value={company} />
            <label>Bio: </label>
            <input name="bio" onChange={handleChange} value={bio} />
            <label>Financial Goal: </label>
            <input
              name="financialGoal"
              onChange={handleChange}
              value={financialGoal}
            />
          </div>

          <div className="profileContactInfo">
            <label>Email: </label>
            <input name="email" onChange={handleChange} value={email} />
          </div>

          <div className="profileSocialMedia">
            <label>Twitter: </label>
            <input name="twitter" onChange={handleChange} value={twitter} />
            <label>Instagram: </label>
            <input name="instagram" onChange={handleChange} value={instagram} />
            <label>Facebook: </label>
            <input name="facebook" onChange={handleChange} value={facebook} />
            <label>LinkedIn: </label>
            <input name="linkedIn" onChange={handleChange} value={linkedIn} />
            <label>Personal Website: </label>
            <input
              name="personalSite"
              onChange={handleChange}
              value={personalSite}
            />{" "}
            <label>GitHub: </label>
            <input name="gitHub" onChange={handleChange} value={gitHub} />
          </div>

          <br />
          <button type="submit">Save</button>
          <button className="cancel-button" type="button" onClick={redirect}>
            Cancel
          </button>
          <br />
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatchToProps = (dispatch, { history }) => ({
  updateProfile: (user) => dispatch(updateProfile(user, history)),
  getUser: () => dispatch(getUser()),
});

export default connect(mapState, mapDispatchToProps)(EditProfileBio);
