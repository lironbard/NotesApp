import "./App.css";
import react from "react";
import Form from "./components/Form";
import NoteList from "./components/NoteList";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    this.handleAddNote = this.handleAddNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  handleAddNote(note) {
    this.setState((prevState) => {
      return { notes: [...prevState.notes, note] };
    });
  }

  deleteNote(id) {
    const notes = [...this.state.notes];
    const noteAfterDelete = notes.filter((note) => note.id !== id);
    this.setState({ notes: noteAfterDelete });
  }

  render() {
    return (
      <div className="App">
        <Form addNote={this.handleAddNote} />
        <NoteList deleteNote={this.deleteNote} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
