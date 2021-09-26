import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal } from "react-responsive-modal";
import { deleteEvents } from "../store/calendar";

const _CalEvents = (props) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const { event, deleteEvent } = props;
  const handleSubmit = () => {
    deleteEvent(event);
  };
  console.log("it`s working");
  return (
    <>
      <button className="add-button" onClick={openModal}>
        X
      </button>
      <Modal open={showModal} onClose={closeModal} center>
        <div className="modal-content-container">
          <div className="modal-title">Calendar Event</div>

          <div className="input-section">
            <div>
              <div>
                {/* <p>{event.title}</p>
                <p>{event.start}</p>
                <p>{event.end}</p> */}
                <p> Hello</p>
              </div>
              <button
                className="submit-button"
                type="submit"
                onClick={handleSubmit}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const mapDispatch = (dispatch) => {
  return {
    deleteEvent: () => dispatch(deleteEvents(event)),
  };
};

export const CalEvents = connect(null, mapDispatch)(_CalEvents);
