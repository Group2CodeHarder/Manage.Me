import React from "react";
import { connect } from "react-redux";
import { newList, addCard } from "../store/tasks";

class TaskActionButton extends React.Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (ev) => {
    this.setState({
      formOpen: false,
    });
  };

  handleChange = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(newList(text));
    }
    return;
  };

  handleAddCard = () => {
    // const { dispatch, listID } = this.props;
    // const { text } = this.state;
    // if(text) {
        // dispatch(addCard(listID, text))
    // }
    // return;
  };

  displayAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "+ Add another list" : "+ Add another card";

    return (
      <div
        onClick={this.openForm}
        style={{
          cursor: "pointer",
        }}
      >
        <p>{buttonText}</p>
      </div>
    );
  };

  displayForm = () => {
    const { list } = this.props;

    const placeholder = list ? "Enter list title..." : "Enter text here...";

    const buttonTitle = list ? "Add a list" : "Add a card";

    return (
      <div>
        <div
          style={actionStyles}
        >
          <textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleChange}
            style={txtAreaStyles}
          />
          <div>
            <button
              onMouseDown={list ? this.handleAddList : this.handleAddCard}
            >
              {buttonTitle}
            </button>
            <button
              style={{
                marginLeft: "15px",
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.displayForm() : this.displayAddButton();
  }
}

export default connect()(TaskActionButton);

const txtAreaStyles = {
    marginLeft: "0",
    resize: "none",
    outline: "none",
    border: "none",
    overflow: "hidden",
    minHeight: "85",
    minWidth: "272"
};

const actionStyles = {
    backgroundColor: "white",
    margin: ".5rem",
    marginBottom: "8px",
    padding: "1rem",
  };
