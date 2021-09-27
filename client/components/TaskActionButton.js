import React from "react";
import { connect } from "react-redux";
import { addList, addCard } from "../store/tasks";

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
      dispatch(addList(text));
    }
    return;
  };

  handleAddCard = () => {
    // const { dispatch, listID } = this.props;
    // const { text } = this.state;
    // if(text) {
    //     dispatch(addCard(listID, text))
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
          style={{
            backgroundColor: "white",
            margin: ".5rem",
            marginBottom: "8px",
            padding: "1rem",
            fontFamily: "Open Sans" | "sans-serif",
          }}
        >
          <textarea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleChange}
            style={{
              marginLeft: "0",
              resize: "none",
              outline: "none",
              border: "none",
              overflow: "hidden",
              minHeight: "85",
              minWidth: "272",
            }}
          />
          <div>
            <button
              onMouseDown={list ? this.handleAddList : this.handleAddCard}
              style={{ color: "white", backgroundColor: "#87CEFA" }}
            >
              {buttonTitle}
            </button>
            <button
              style={{
                outline: "none",
                border: "none",
                backgroundColor: "inherit",
                marginLeft: "15px",
              }}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
    //     <div style={{backgroundColor: "white", margin: ".5rem", marginBottom: "8px", padding: "1rem", fontFamily: "Open Sans" | "sans-serif"}}>
    //        placeholder={placeholder};
    //   </div>;
  };

  render() {
    return this.state.formOpen ? this.displayForm() : this.displayAddButton();
  }
}

export default connect()(TaskActionButton);
