import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: "",
      noteText: "",
      id: new Date().toTimeString(),
    };
  }

  handleSubmit(event) {
    const { addNote } = this.props;
    event.preventDefault();
    addNote(this.state);
    this.setState({
      noteTitle: "",
      noteText: " ",
      id: new Date().toTimeString(),
    });
  }

  handleTextChange(noteText) {
    // console.log(noteText);
    this.setState({ noteText });
  }

  handleTitleChange(noteTitle) {
    this.setState({ noteTitle });
  }

  render() {
    const { noteText, noteTitle } = this.state;
    // console.log(this.state);
    return (
      <div className="container d-flex justify-content-center">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="noteTitle" value={noteTitle} onChange={(event) => this.handleTitleChange(event.target.value)} />
          <textarea name="noteText" value={noteText} onChange={(event) => this.handleTextChange(event.target.value)} className="form-control" placeholder="Your Note..."></textarea>
          <br />
          <button className="btn btn-outline-warning" type="submit">
            Add Note
          </button>
        </form>
        <br />
      </div>
    );
  }
}

export default Form;
