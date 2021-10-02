import React from "react";
import { connect } from "react-redux";
import { newList, newCard } from "../store/tasks";

class TaskActionButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

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

  handleAddList = (ev) => {
    ev.preventDefault();
    const { project } = this.props;
    const { text } = this.state;
    const list = {
      title: text,
      projectId: project.id
    };

    if (text) {
      this.props.newList(list);
    }
    this.closeForm();
  };

  handleAddCard = (ev) => {
    ev.preventDefault();
    const { listId, boards } = this.props; 
    const { text } = this.state;

    const card = {
      content: text,
      listId: listId,
    };

    if(text) {
    this.props.newCard(card, boards.projectId);
    }
    this.closeForm();

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
    const { list, boards } = this.props;
    console.log("BOARDS", boards);

    const placeholder = list ? "Enter list title..." : "Enter text here...";

    const buttonTitle = list ? "Add a list" : "Add a card";
    return (
      <div>
          <div style={actionStyles}>
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
                onMouseDown={list ? this.handleAddList : this.handleAddCard }
              >
                {buttonTitle}
              </button>
              <button
                style={{
                  marginLeft: "15px",
                }}
              >
                Cancel
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

const mapDispatch = (dispatch) => ({
  newList: (list) => dispatch(newList(list)),
  newCard: (card, projectId) => dispatch(newCard(card, projectId))
});

export default connect(null, mapDispatch)(TaskActionButton);

const txtAreaStyles = {
  marginLeft: "0",
  resize: "none",
  outline: "none",
  border: "none",
  overflow: "hidden",
  minHeight: "85",
  minWidth: "272",
};

const actionStyles = {
  backgroundColor: "white",
  margin: ".5rem",
  marginBottom: "8px",
  padding: "1rem",
};
