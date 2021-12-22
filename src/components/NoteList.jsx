import React from "react";
import Note from "./Note";

function NoteList(props) {
  const { notes } = props;
  if (notes.length === 0) return <div></div>;
  return (
    <div className="container d-flex mt-5">
      <div className="row justify-content-between">
        {notes.map((note) => {
          return <Note deleteNote={props.deleteNote} key={note.id} id={note.id} noteText={note.noteText} noteTitle={note.noteTitle} />;
        })}
      </div>
    </div>
  );
}

export default NoteList;
