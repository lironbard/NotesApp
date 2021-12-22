import React from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

function Note(props) {
  const { noteText, id, noteTitle } = props;
  function handleDelete() {
    if (window.confirm("Are you sure you want to delete your note?")) {
      props.deleteNote(id);
    }
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div className="card mt-1" style={{ width: "15rem" }}>
      <div onClick={toggleModal} className="card-body">
        <button onClick={handleDelete} className="btn btn-sm btn-light">
          x
        </button>
        <small className="text-muted">{id}</small>
        <h5>{noteTitle}</h5>
        <p>{noteText}</p>
      </div>
      <Modal isOpen={modalIsOpen}>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h5>{noteTitle}</h5>
            <p>{id}</p>
            {noteText}
            <br />
            <button onClick={toggleModal} className="btn btn-outline-success">
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Note;

// function Modal(props) {
//   const { noteText, noteTitle } = props;
//   if (
//     window.confirm(
//       <div className="card-body">
//         <h5>{noteTitle}</h5>
//         {noteText}
//       </div>
//     )
//   ) {
//     console.log("Modal Close");
//   }
// }
